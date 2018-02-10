use userLinks; 
db.gaucheCenter.remove({});
db.gaucheCenter.insert({"_id" : ObjectId("588237135e79b979ef153aa0"),"sequence":0,"nom":"Facebook","image":"/images/FB.png","liens":"http://www.facebook.com"});
db.gaucheCenter.insert({"_id" : ObjectId("588237135e79b979ef153aa1"),"sequence":1,"nom":"Drive","image":"/images/Drive.png","liens":"https://drive.google.com/drive/my-drive"});
db.gaucheCenter.insert({"_id" : ObjectId("588237135e79b979ef153aa2"),"sequence":2,"nom":"Hotmail","image":"/images/Hotmail.png","liens":"http://www.hotmail.com"});
db.gaucheCenter.insert({"_id" : ObjectId("588237135e79b979ef153aa3"),"sequence":3,"nom":"Gmail","image":"/images/gmail.png","liens":"https://mail.google.com/mail"});
db.gaucheCenter.insert({"_id" : ObjectId("588237135e79b979ef153aa4"),"sequence":4,"nom":"Youtube","image":"/images/YT.png","liens":"http://www.youtube.com/?gl=FR&hl=fr"});
db.gaucheCenter.insert({"_id" : ObjectId("588237135e79b979ef153aa5"),"sequence":6,"nom":"Slack","image":"/images/slack.png","liens":"https://fil2017.slack.com/messages/general/details/"});

db.droiteCenter.remove({});
db.droiteCenter.insert({"_id" : ObjectId("588237145e79b979ef153aa6"),"sequence":0,"image":"/images/CdN.jpg","nom":"CdN","liens":"https://www.credit-du-nord.fr/particuliers"});
db.droiteCenter.insert({"_id" : ObjectId("588237145e79b979ef153aa7"),"sequence":1,"image":"/images/ca.jpg","nom":"Credit Agricole","liens":"https://www.atlantique-vendee-g3-enligne.credit-agricole.fr/stb/entreeBam"});
db.droiteCenter.insert({"_id" : ObjectId("588237145e79b979ef153aa8"),"sequence":2,"nom":"Dico couleur html","liens":"http://www.code-couleur.com/dictionnaire/couleur-r.html"});
db.droiteCenter.insert({"_id" : ObjectId("588237145e79b979ef153aa9"),"sequence":3,"nom":"Zone T","liens":"http://www.zone-telechargement.com/series/vf/"});
db.droiteCenter.insert({"_id" : ObjectId("588237145e79b979ef153aaa"),"sequence":5,"nom":"Campus","image":"/images/campus.ico","liens":"https://campusneo.mines-nantes.fr/campus/course/index.php?categoryid=516"});
db.droiteCenter.insert({"_id" : ObjectId("588237145e79b979ef153aab"),"sequence":6,"nom":"WikiInova","image":"","liens":"http://wiki.svc.cat-amania.com/xwiki/bin/view/Programme+INNOVA/Th%C3%A8mes/Big-Data+en+ESN/?srid=vyem0WXi"});
db.droiteCenter.insert({"_id" : ObjectId("588237145e79b979ef153aac"),"sequence":7,"nom":"GitHub","image":"http://image.flaticon.com/icons/svg/25/25231.svg","liens":"https://github.com/kedriss"});


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
			"password": "percheman80",
			"token": "3ed8be4fb8ed98f8bf9ae5e099a89bfa3d62fea8"
}
$.ajax({ url:"/lien",type:'PUT',data:{side:'gaucheCenter',"sequence":0,"token": "3ed8be4fb8ed98f8bf9ae5e099a89bfa3d62fea8","nom":"Facebook","image":"/images/FB.png","liens":"http://www.facebook.com"}});
$.ajax({ url:"/lien",type:'PUT',data:{side:'gaucheCenter',"sequence":1,"token": "3ed8be4fb8ed98f8bf9ae5e099a89bfa3d62fea8","nom":"Drive","image":"/images/Drive.png","liens":"https://drive.google.com/drive/my-drive"}});
$.ajax({ url:"/lien",type:'PUT',data:{side:'gaucheCenter',"sequence":2,"token": "3ed8be4fb8ed98f8bf9ae5e099a89bfa3d62fea8","nom":"Hotmail","image":"/images/Hotmail.png","liens":"http://www.hotmail.com"}});
$.ajax({ url:"/lien",type:'PUT',data:{side:'gaucheCenter',"sequence":3,"token": "3ed8be4fb8ed98f8bf9ae5e099a89bfa3d62fea8","nom":"Gmail","image":"/images/gmail.png","liens":"https://mail.google.com/mail"}});
$.ajax({ url:"/lien",type:'PUT',data:{side:'gaucheCenter',"sequence":4,"token": "3ed8be4fb8ed98f8bf9ae5e099a89bfa3d62fea8","nom":"Youtube","image":"/images/YT.png","liens":"http://www.youtube.com/?gl=FR&hl=fr"}});
$.ajax({ url:"/lien",type:'PUT',data:{side:'gaucheCenter',"sequence":6,"token": "3ed8be4fb8ed98f8bf9ae5e099a89bfa3d62fea8","nom":"Slack","image":"/images/slack.png","liens":"https://fil2017.slack.com/messages/general/details/"}});

$.ajax({ url:"/lien",type:'PUT',data:{side:'droiteCenter',"sequence":0,"token": "3ed8be4fb8ed98f8bf9ae5e099a89bfa3d62fea8","image":"/images/CdN.jpg","nom":"CdN","liens":"https://www.credit-du-nord.fr/particuliers"}});
$.ajax({ url:"/lien",type:'PUT',data:{side:'droiteCenter',"sequence":1,"token": "3ed8be4fb8ed98f8bf9ae5e099a89bfa3d62fea8","image":"/images/ca.jpg","nom":"Credit Agricole","liens":"https://www.atlantique-vendee-g3-enligne.credit-agricole.fr/stb/entreeBam"}});
$.ajax({ url:"/lien",type:'PUT',data:{side:'droiteCenter',"sequence":2,"token": "3ed8be4fb8ed98f8bf9ae5e099a89bfa3d62fea8","nom":"Dico couleur html","liens":"http://www.code-couleur.com/dictionnaire/couleur-r.html"}});
$.ajax({ url:"/lien",type:'PUT',data:{side:'droiteCenter',"sequence":3,"token": "3ed8be4fb8ed98f8bf9ae5e099a89bfa3d62fea8","nom":"Zone T","liens":"http://www.zone-telechargement.com/series/vf/"}});
$.ajax({ url:"/lien",type:'PUT',data:{side:'droiteCenter',"sequence":5,"token": "3ed8be4fb8ed98f8bf9ae5e099a89bfa3d62fea8","nom":"Campus","image":"/images/campus.ico","liens":"https://campusneo.mines-nantes.fr/campus/course/index.php?categoryid=516"}});
$.ajax({ url:"/lien",type:'PUT',data:{side:'droiteCenter',"sequence":6,"token": "3ed8be4fb8ed98f8bf9ae5e099a89bfa3d62fea8","nom":"WikiInova","image":"","liens":"http://wiki.svc.cat-amania.com/xwiki/bin/view/Programme+INNOVA/Th%C3%A8mes/Big-Data+en+ESN/?srid=vyem0WXi"}});
$.ajax({ url:"/lien",type:'PUT',data:{side:'droiteCenter',"sequence":7,"token": "3ed8be4fb8ed98f8bf9ae5e099a89bfa3d62fea8","nom":"GitHub","image":"http://image.flaticon.com/icons/svg/25/25231.svg","liens":"https://github.com/kedriss"}});



//////////ANNE////////////
{"_id":{"$oid": "588dfa65f36d2804078ae9c1"},
		"username": "anne",
		"password": "chobitsone",
		"token": "7940b3cdc3f5e9f94fc2def84f16a2527b25696b"
}
db.users.insert({	"_id": new ObjectId( "588dfa65f36d2804078ae9c1"), 
					"username": "anne", 
					"password": "chobitsone", 
					"token": "7940b3cdc3f5e9f94fc2def84f16a2527b25696b" });
$.ajax({ url:"/lien",type:'PUT',data:{side:'gaucheCenter',"sequence":0,"token":"7940b3cdc3f5e9f94fc2def84f16a2527b25696b",liens:"http://www.facebook.com", "image":"/images/FB.GIF",nom:'Facebook'}});
$.ajax({ url:"/lien",type:'PUT',data:{side:'gaucheCenter',"sequence":1,"token":"7940b3cdc3f5e9f94fc2def84f16a2527b25696b",liens:"http://www.hotmail.com", "image":"/images/Hotmail.jpg",nom:'Hotmail'}});

$.ajax({ url:"/lien",type:'PUT',data:{side:'droiteCenter',"sequence":1,"token":"7940b3cdc3f5e9f94fc2def84f16a2527b25696b",liens:"http://fr.vente-privee.com/vp4/Login/Portal.ashx", "image":"/images/VP.PNG",nom:'Ventes Privées'}});
$.ajax({ url:"/lien",type:'PUT',data:{side:'droiteCenter',"sequence":2,"token":"7940b3cdc3f5e9f94fc2def84f16a2527b25696b",liens:"http://bleuciel.edf.com/abonnement-et-contrat/les-prix/les-prix-de-l-electricite/option-ejp/l-observatoire-2584.html", "image":"/images/VP.PNG",nom:'EJP'}});
$.ajax({ url:"/lien",type:'PUT',data:{side:'droiteCenter',"sequence":3,"token":"7940b3cdc3f5e9f94fc2def84f16a2527b25696b",liens:"http://www.allocine.fr/seance/salle_gen_csalle=P1545.html", "image":"/images/ALLOCINE.PNG",nom:'Cinéma'}});
$.ajax({ url:"/lien",type:'PUT',data:{side:'droiteCenter',"sequence":4,"token":"7940b3cdc3f5e9f94fc2def84f16a2527b25696b",liens:"http://www.zone-telechargement.com/", "image":"/images/VP.PNG",nom:'Zone téléchargement'}});
$.ajax({ url:"/lien",type:'PUT',data:{side:'droiteCenter',"sequence":5,"token":"7940b3cdc3f5e9f94fc2def84f16a2527b25696b",liens:"http://www.cdiscountphoto.com/", "image":"/images/VP.PNG",nom:'Cdiscount photo'}});
  
		



/////////Famille Linque////////:
{"_id":{"$oid": "588dfa65f36d2804078ae9c1"},
		"username": "mariepierre",
		"password": "irkutoo",
		"token": "936B8F0034B3B80C93C27D70F3998FA23865BE4389F6584D1A1D56DABB2B29E2"
}

$.ajax({ url:"/lien",type:'PUT',data:{side:'gaucheCenter',"sequence":0,"token":"936B8F0034B3B80C93C27D70F3998FA23865BE4389F6584D1A1D56DABB2B29E2",liens:"http://www.ebay.fr",nom:'Ebay'}});
$.ajax({ url:"/lien",type:'PUT',data:{side:'gaucheCenter',"sequence":1,"token":"936B8F0034B3B80C93C27D70F3998FA23865BE4389F6584D1A1D56DABB2B29E2",liens:"http://www.leboncoin.fr",nom:'Le Bon Coin'}});
$.ajax({ url:"/lien",type:'PUT',data:{side:'gaucheCenter',"sequence":2,"token":"936B8F0034B3B80C93C27D70F3998FA23865BE4389F6584D1A1D56DABB2B29E2",liens:"https://www.credit-du-nord.fr/particuliers",nom:'Le Bon Coin'}});
                                                                                
$.ajax({ url:"/lien",type:'PUT',data:{side:'droiteCenter',"sequence":1,"token":"936B8F0034B3B80C93C27D70F3998FA23865BE4389F6584D1A1D56DABB2B29E2",liens:"http://www.canalblog.com/directory/Cuisine%20et%20Gastronomie/",nom:'Petit plats'}});
$.ajax({ url:"/lien",type:'PUT',data:{side:'droiteCenter',"sequence":2,"token":"936B8F0034B3B80C93C27D70F3998FA23865BE4389F6584D1A1D56DABB2B29E2",liens:"http://www.promod.com/", nom:'Promod'}});
$.ajax({ url:"/lien",type:'PUT',data:{side:'droiteCenter',"sequence":3,"token":"936B8F0034B3B80C93C27D70F3998FA23865BE4389F6584D1A1D56DABB2B29E2",liens:"http://www.cop-copine.com/",nom:'Cop Salope'}});
$.ajax({ url:"/lien",type:'PUT',data:{side:'droiteCenter',"sequence":4,"token":"936B8F0034B3B80C93C27D70F3998FA23865BE4389F6584D1A1D56DABB2B29E2",liens:"http://www.esprit.fr/", nom:'Esprit'}});
$.ajax({ url:"/lien",type:'PUT',data:{side:'droiteCenter',"sequence":5,"token":"936B8F0034B3B80C93C27D70F3998FA23865BE4389F6584D1A1D56DABB2B29E2",liens:"http://www.aristosoie.org/", nom:'Aristosoie'}});
$.ajax({ url:"/lien",type:'PUT',data:{side:'droiteCenter',"sequence":6,"token":"936B8F0034B3B80C93C27D70F3998FA23865BE4389F6584D1A1D56DABB2B29E2",liens:"http://www.maty.com/", nom:'Maty'}});
$.ajax({ url:"/lien",type:'PUT',data:{side:'droiteCenter',"sequence":7,"token":"936B8F0034B3B80C93C27D70F3998FA23865BE4389F6584D1A1D56DABB2B29E2",liens:"http://www.perlesandco.com/?cPath=50_183",nom:"Perles'n Co"}});
$.ajax({ url:"/lien",type:'PUT',data:{side:'droiteCenter',"sequence":8,"token":"936B8F0034B3B80C93C27D70F3998FA23865BE4389F6584D1A1D56DABB2B29E2",liens:"http://www.lesbijouxdeclementine.com/boutique/liste_produits.cfm?code_lg=lg_fr&type=21", nom:'B-Clémentine'}});
  		