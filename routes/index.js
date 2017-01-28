var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server,
    ObjectId = mongo.ObjectId;
var coteOppose ={"gaucheCenter":"droiteCenter", "droiteCenter":'gaucheCenter'};
var uriMongo = "mongodb://heroku_t9m2n7qd:obvtjtruvded5pmam57m3542b5@ds127978.mlab.com:27978/heroku_t9m2n7qd";
//var uriMongo="mongodb://localhost:27017/userLinks";

var checktoken = function(token){

    return new Promise(function(resolve,reject){
        MongoClient.connect(uriMongo,function(err, db) {
            var users = db.collection('users');
            users.findOne({token:token}).then(function(user){
                resolve(user);
            })
        });
        });
}
router.get('/', function(req, res, next) {
    console.log("route = /");
    var result;
    var gaucheCenter=[];
    MongoClient.connect(uriMongo,function(err, db) {
        if (!err) {
            console.log("We are connected");

        var collection = db.collection("gaucheCenter");
        collection.find({}).sort({sequence: 1}).toArray().then(function (gaucheCenter) {
            var collection = db.collection("droiteCenter");
            collection.find({}).sort({sequence: 1}).toArray(function (e, result) {
                res.render('index', {title: "Salut l'artiste", gaucheCenter: gaucheCenter, droiteCenter: result});
            });
        })
    }
    });

});

router.post('/auth', function(req, res, next) {
    var username = req.body.username;
    var pwd = req.body.password;
    console.log(req.params);
    console.log(username);
    console.log(pwd);
    MongoClient.connect(uriMongo,function(err, db) {
        if (!err) {
            console.log("We are connected");

            var collection = db.collection("users");
            collection.findOne({username:username,password:pwd}).then(function (user) {
                if (user ){
                    console.log(user);
                    res.json({token:user.token});
                }
                res.json({token:null});

            })
        }
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
                            collection.updateOne({_id: o_id}, {nom: nom, liens: url, image: image, sequence: sequence});
                        }
                        else if(collectionOpposite) { // SI on a pas trouver sur le cote, c'est qu'il faut le supprimer sur le coté opposé et creer dans le coté
                                collectionOpposite.deleteOne({_id:o_id});
                                collection.insertOne({nom:nom,liens:url, image:image,sequence:sequence});
                            }
                })
                }
                }
                else{
                    if(collection)
                        collection.insertOne({nom: nom, liens: url, image: image, sequence: sequence});
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
