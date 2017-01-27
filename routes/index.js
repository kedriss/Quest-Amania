var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server,
    ObjectId = mongo.ObjectId;
var coteOppose ={"gaucheCenter":"droiteCenter", "droiteCenter":'gaucheCenter'};

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("route = /");
    var result;
    var gaucheCenter=[];
  //var client = new MongoClient(new Server("localhost", 27017), {native_parser: true});
    MongoClient.connect("mongodb://localhost:27017/userLinks",function(err, db) {
        if(!err) {
            console.log("We are connected");
            //console.log(db);
        }
        var collection = db.collection("gaucheCenter");
        collection.find({}).sort({sequence:1}).toArray().then(function(gaucheCenter){
            var collection = db.collection("droiteCenter");
            collection.find({}).sort({sequence:1}).toArray(function(e,result){
                res.render('index', { title: 'Express',gaucheCenter: gaucheCenter,droiteCenter:result });
            });
        })

    });

});

router.get('/lien/:side/:_id', function(req, res, next) {
    var side= req.params.side;
    var _id= new ObjectId(req.params._id);
    MongoClient.connect("mongodb://localhost:27017/userLinks",function(err, db) {
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
    var cote = lien.side;
    MongoClient.connect("mongodb://localhost:27017/userLinks",function(err, db) {
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
    })
    res.json({});
});

router.delete('/lien', function(req, res, next) {
    var lien = req.body;
    var _id = lien._id;
    var url = lien.liens;
    var image = lien.image;
    var sequence = lien.sequence;
    var nom = lien.nom;
    var cote = lien.cote;
    MongoClient.connect("mongodb://localhost:27017/userLinks", function (err, db) {
        var collection = db.collection(cote);
        var o_id = new ObjectId(_id);
        if (collection)
            collection.deleteOne({_id: o_id});
        res.json({});
    });
});
    module.exports = router;
