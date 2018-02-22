var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server,
    ObjectId = mongo.ObjectId;
var uriMongo=process.env.MONGODB_URI_QUEST; // utilisation d'une varible d'environnement pour la sécurité

var version_appli = process.env.QUESTAMANIA_VERSION;
var collection_name ="QUEST-AMANIA";
console.log("uriMongo="+uriMongo);
var checktoken = function(token){

    return new Promise(function(resolve,reject){
        MongoClient.connect(uriMongo,function(err, db) {
            var users = db.collection('users');
            users.findOne({token:token}).then(function(user){
                if (user){  resolve(user);}
                reject(user);
            })
        });
        });
}
function parseCookies (request) {
    var list = {},
        rc = request.headers.cookie;

    rc && rc.split(';').forEach(function( cookie ) {
        var parts = cookie.split('=');
        list[parts.shift().trim()] = decodeURI(parts.join('='));
    });

    return list;
}
function checkCookieToken(request){
    return new Promise(function(resolve, reject){
        var cookies=parseCookies(request);
        if(cookies && cookies['token']) {
            var token = cookies['token'];
            checktoken(token).then(function(user){
               if (user) resolve(user);
               reject(new Error(""));
            }).catch(function(e){
                reject(e);
            })
        }else{
            authentificate(request).then(function(user){
                resolve(user);
            }).catch(function(e){
                reject(e);
            })


        }

    })
}
router.get('/', function(req, res, next) {
    racine(req,res,next);

});
router.get('/survey/:id', function(req, res, next) {
console.log("dans le survey "+req.params.id)
    event(req,res,next,'response');

});

router.get('/event/:id', function(req, res, next) {
     event(req,res,next,'AdminEvent');

});
router.get('/event', function(req, res, next) {
    //event(req,res,next,'AdminEvent');
    res.render('AdminEvent', {
        title: "Merci de répondre au questionnaire",
        evenement: {nom: null, description:null,dates:null,type:'evenement', version: version_appli},
    });

});

router.get('/events', function(req, res, next) {
    events(req,res,next);

});

router.put('/survey', function(req, res, next) {
    //put_krakotte(req,res,next);

    var survey = req.body;
    var _id =survey._id;
    var nom = survey.nom;
    var description = survey.description;
    var dates =survey['dates[]'];
    if ( ! survey['dates[]']) dates =[];
    if (!Array.isArray(dates)) dates=[dates];
    console.log(survey);

    // checktoken(token).then(function(){
        MongoClient.connect(uriMongo,function(err, db) {
             var collection = db.collection(collection_name);
            if (_id) {
                var o_id = new ObjectId(_id);
                if (collection){
                    collection.find({_id:o_id}).toArray().then(function(data) {
                        if (data && data.length > 0)
                            collection.updateOne(
                                {_id: o_id}, {nom: nom, description:description,dates:dates,type:'evenement', version: version_appli});
                        else
                            collection.insertOne(
                                {nom: nom, description:description,dates:dates,type:'evenement', version: version_appli});

                    })
                }
            }
            else{
                if(collection)
                    collection.insertOne({nom: nom, description:description,dates:dates,type:'evenement', version: version_appli});
            }
            res.json({});
        })
    });


   // res.json({});
//});


router.put('/response', function(req, res, next) {
    //put_krakotte(req,res,next);
    var data_type = 'response';
    var response = req.body;
    var _id =response._id;
    var nom = response.nom;
    var prenom = response.prenom;
    var id_survey = response.id_survey;
    var dates =response['dates[]'];
    if ( ! response['dates[]']) dates =[];
    if (!Array.isArray(dates)) dates=[dates];

    var nbpersonnes =response['nbpersonnes[]'];
    if ( ! response['nbpersonnes[]']) nbpersonnes =[];
    if (!Array.isArray(nbpersonnes)) nbpersonnes=[nbpersonnes];

    var responses =[]
    console.log(response);
    dates.forEach(function(value,index){
        responses.push({date:dates[index],nbpersonne:nbpersonnes[index]});
    })

    // checktoken(token).then(function(){
    MongoClient.connect(uriMongo,function(err, db) {
        var collection = db.collection(collection_name);
        if (_id) {
            var o_id = new ObjectId(_id);
            if (collection){
                collection.find({_id:o_id}).toArray().then(function(data) {
                    if (data && data.length > 0)
                        collection.updateOne(
                            {_id: o_id}, {nom: nom, prenom:prenom ,responses:responses,type:data_type, version: version_appli, id_survey:id_survey});
                    else
                        collection.insertOne(
                            {nom: nom, prenom:prenom ,responses:responses,type:data_type, version: version_appli,id_survey:id_survey});

                })
            }
        }
        else{
            if(collection) {
                collection.insertOne({nom: nom, prenom: prenom, responses: responses, type: data_type, version: version_appli,id_survey:id_survey});

            }
        }
        res.json({});
    })
});

router.post('/', function(req, res, next) {
    racine(req,res,next);

});

var racine = function(req,res,next){
    console.log("route = /");
    var result;
    var gaucheCenter=[];
    checkCookieToken(req).then(function(user){
        MongoClient.connect(uriMongo, function (err, db) {
            if (!err) {
                var paramsFind = {token:user.token};
                var collection = db.collection("gaucheCenter");
                collection.find(paramsFind).sort({sequence: 1}).toArray().then(function (gaucheCenter) {
                    var collection = db.collection("droiteCenter");
                    collection.find(paramsFind).sort({sequence: 1}).toArray(function (e, droiteCenter) {
                        res.render('index', {
                            title: "Salut l'artiste",
                            user:{nom:user.username,token:user.token},
                            gaucheCenter: gaucheCenter,
                            droiteCenter: droiteCenter
                        });
                    });
                })
            }
        });
    }).catch(function(e){
        res.render('authentification', {
            title: "Connexion"
        });
    })
}
var events = function(req,res,next){
    var viewName = 'AdminEvents';
    var id= req.params.id;
    //var _id= new ObjectId(req.params._id);
    console.log(id)
    var o_id = new ObjectId(id);
    MongoClient.connect(uriMongo,function(err, db) {
        if(!err) {
            console.log("We are connected");
        }
        var collection = db.collection(collection_name);
        //console.log(collection);
        collection.find({'type':'evenement',version:version_appli}).toArray().then(function(result) {
            if (result && result.length > 0) {

                //var result;
                var gaucheCenter = [];
                console.log(result)
                //var t_dates = ['05/03/1990', '13/03/1989'];
                res.render(viewName, {
                    title: "Liste des événements",
                    evenements: result,
                });
                // res.json(result[0]);
            }
            else {
                //res.json(null);
                res.render(viewName, {
                    title: "Pas d'événement",
                    evenements: null,
                });
            }

        })

    });

}

var event = function(req,res,next,viewName){

    var id= req.params.id;
    //var _id= new ObjectId(req.params._id);
    console.log(id)
    var o_id = new ObjectId(id);
    MongoClient.connect(uriMongo,function(err, db) {
        if(!err) {
            console.log("We are connected");
        }
        var collection = db.collection(collection_name);
        //console.log(collection);
        collection.find({'_id':o_id,'type':'evenement',version:version_appli}).toArray().then(function(result) {
            if (result && result.length > 0) {

                //var result;
                var gaucheCenter = [];
                console.log(result[0])
                //var t_dates = ['05/03/1990', '13/03/1989'];
                res.render(viewName, {
                    title: "Merci de répondre au questionnaire",
                    evenement: result[0],
                });
                // res.json(result[0]);
            }
            else {
                //res.json(null);
                res.render(viewName, {
                    title: "Merci de répondre au questionnaire",
                    evenement: null,
                });
            }

        })

    });

}
var authentificate = function(req){
    return new Promise(function (resolve ,reject) {
        var username = req.body.username;
        var pwd = req.body.password;
        console.log(username);
        console.log(pwd);
        MongoClient.connect(uriMongo, function (err, db) {
            if (!err) {
                var collection = db.collection("users");
                collection.findOne({username: username, password: pwd}).then(function (user) {
                    if (user) {
                        resolve(user);
                    }else
                        reject(new Error('Conexion refusée'));
                })
            }
            else {
                console.log(err);
                reject(new Error('Connexion impossible'));
            }
        });
    });
}

router.post('/auth', function(req, res, next) {

    authentificate(req).then(function(user){
        res.json({token: user.token});
    }).catch(function(e){
        res.json({token: null});
    });

});

router.get('/lien/:side/:_id', function(req, res, next) {
    var side= req.params.side;
    var _id= new ObjectId(req.params._id);
    MongoClient.connect(uriMongo,function(err, db) {
        if(!err) {
            console.log("We are connected");
        }
        var collection = db.collection(side);
        collection.find({'_id':_id}).sort({sequence:1}).toArray().then(function(result){
                if (result && result.length>0)
                res.json(result[0]);

        })

    });

});

router.put('/lien', function(req, res, next) {
    var lien = req.body;
    var _id =lien._id;
    var url = lien.liens;
    var image = lien.image;
    var sequence = lien.sequence;
    var nom = lien.nom;
    var token = lien.token;
    var cote = lien.side;
    checktoken(token).then(function(){
        MongoClient.connect(uriMongo,function(err, db) {
            var collection = db.collection(cote);
            var collectionOpposite = db.collection(coteOppose[cote]);
            if (_id) {
                var o_id = new ObjectId(_id);
                if (collection){
                    collection.find({_id:o_id}).toArray().then(function(data) {
                        if (data && data.length > 0) {
                            collection.updateOne({_id: o_id}, {nom: nom, liens: url, image: image, sequence: sequence,token:token});
                        }
                        else if(collectionOpposite) { // SI on a pas trouver sur le cote, c'est qu'il faut le supprimer sur le coté opposé et creer dans le coté
                                collectionOpposite.deleteOne({_id:o_id});
                                collection.insertOne({nom:nom,liens:url, image:image,sequence:sequence,token:token});
                            }
                })
                }
                }
                else{
                    if(collection)
                        collection.insertOne({nom: nom, liens: url, image: image, sequence: sequence,token:token});
                }
            res.json({});
        })
    });

});

router.delete('/lien', function(req, res, next) {
    var lien = req.body;
    var _id = lien._id;
    var url = lien.liens;
    var image = lien.image;
    var sequence = lien.sequence;
    var nom = lien.nom;
    var cote = lien.cote;
    MongoClient.connect(uriMongo, function (err, db) {
        var collection = db.collection(cote);
        var o_id = new ObjectId(_id);
        if (collection)
            collection.deleteOne({_id: o_id});
        res.json({});
    });
});
    module.exports = router;
