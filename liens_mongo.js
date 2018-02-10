use userLinks;
db.gaucheCenter.remove({});

db.droiteCenter.remove({});
db.droiteCenter.insert({"_id" : ObjectId("588237145e79b979ef153aa6"),"sequence":0,"image":"/images/CdN.jpg","nom":"CdN","liens":"https://www.credit-du-nord.fr/particuliers"});


/*use userLinks; 
db.links.remove({});
db.links.insert({"_id" : ObjectId("588237135e79b979ef153aa0"),"side":"gaucheCenter","sequence":0,"nom":"Facebook","image":"/images/FB.png","liens":"http://www.facebook.com"});
db.links.insert({"_id" : ObjectId("588237135e79b979ef153aa1"),"side":"gaucheCenter","sequence":1,"nom":"Drive","image":"/images/Drive.png","liens":"https://drive.google.com/drive/my-drive"});
db.links.insert({"_id" : ObjectId("588237135e79b979ef153aa2"),"side":"gaucheCenter","sequence":2,"nom":"Hotmail","image":"/images/Hotmail.png","liens":"http://www.hotmail.com"});
db.links.insert({"_id" : ObjectId("588237135e79b979ef153aa3"),"side":"gaucheCenter","sequence":3,"nom":"Gmail","image":"/images/gmail.png","liens":"https://mail.google.com/mail"});
db.links.insert({"_id" : ObjectId("588237135e79b979ef153aa4"),"side":"gaucheCenter","sequence":4,"nom":"Youtube","image":"/images/YT.png","liens":"http://www.youtube.com/?gl=FR&hl=fr"});
db.links.insert({"_id" : ObjectId("588237135e79b979ef153aa5"),"side":"gaucheCenter","sequence":6,"nom":"Slack","image":"/images/slack.png","liens":"https://fil2017.slack.com/messages/general/details/"});
db.links.insert({"_id" : ObjectId("588237145e79b979ef153aa6"),"side":"droiteCenter","sequence":0,"image":"/images/CdN.jpg","nom":"CdN","liens":"https://www.credit-du-nord.fr/particuliers"});
db.links.insert({"_id" : ObjectId("588237145e79b979ef153aa7"),"side":"droiteCenter","sequence":1,"image":"/images/ca.jpg","nom":"Credit Agricole","liens":"https://www.atlantique-vendee-g3-enligne.credit-agricole.fr/stb/entreeBam"});
db.links.insert({"_id" : ObjectId("588237145e79b979ef153aa8"),"side":"droiteCenter","sequence":2,"nom":"Dico couleur html","liens":"http://www.code-couleur.com/dictionnaire/couleur-r.html"});
db.links.insert({"_id" : ObjectId("588237145e79b979ef153aa9"),"side":"droiteCenter","sequence":3,"nom":"Zone T","liens":"http://www.zone-telechargement.com/series/vf/"});
db.links.insert({"_id" : ObjectId("588237145e79b979ef153aaa"),"side":"droiteCenter","sequence":5,"nom":"Campus","image":"/images/campus.ico","liens":"https://campusneo.mines-nantes.fr/campus/course/index.php?categoryid=516"});
db.links.insert({"_id" : ObjectId("588237145e79b979ef153aab"),"side":"droiteCenter","sequence":6,"nom":"WikiInova","image":"","liens":"http://wiki.svc.cat-amania.com/xwiki/bin/view/Programme+INNOVA/Th%C3%A8mes/Big-Data+en+ESN/?srid=vyem0WXi"});
db.links.insert({"_id" : ObjectId("588237145e79b979ef153aac"),"side":"droiteCenter","sequence":7,"nom":"GitHub","image":"http://image.flaticon.com/icons/svg/25/25231.svg","liens":"https://github.com/kedriss"});
*/
use

///////CEDRIC////////
//$.ajax({ url:"/lien",data:newvar,type:'PUT'})
{ "_id": {	"$oid": "588bbf64734d1d20b6682aac"},
			"username": "kedriss",
			"password": "",
			"token": "3ed8be4fb8ed98f8bf9ae5e099a89bfa3d62fea8"
}



//////////ANNE////////////
{"_id":{"$oid": "588dfa65f36d2804078ae9c1"},
		"username": "anne",
		"password": "",
		"token": "7940b3cdc3f5e9f94fc2def84f16a2527b25696b"
}
db.users.insert({	"_id": new ObjectId( "588dfa65f36d2804078ae9c1"), 
					"username": "anne", 
					"password": "chobitsone", 
					"token": "7940b3cdc3f5e9f94fc2def84f16a2527b25696b" });



/////////Famille Linque////////:
{"_id":{"$oid": "588dfa65f36d2804078ae9c1"},
		"username": "mariepierre",
		"password": "",
		"token": ""
}
