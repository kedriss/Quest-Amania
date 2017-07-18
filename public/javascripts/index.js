////// DRAP N DROP/////////////
var token;

var checktoken= function(){
    return new Promise( function(resolve,reject){
        if(token)
            resolve(token)
        else{ // show connection
            showConnection();
            reject(new Error("pas de token"));
        }
});
}

function showConnection() {
    $("#connection").modal();
}
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    $('#trash').show(100);
    ev.dataTransfer.setData("text", ev.target.id);

}

function drop(ev, id) {
    ev.preventDefault();

    var data = ev.dataTransfer.getData("text");
    if(id){ //from gauche ou droite
        var removed =remove(data);
        if(removed)donnees[id].infos.push(removed);
        else{
            removed =cancelDeletion(id);
            if(removed) donnees[id].infos.push(removed);
        }
        $('#'+id).append(document.getElementById(data));
    }
    else {
        ev.target.appendChild(document.getElementById(data));
        if(ev.target.id =="trash"){
            remove(data,id);
        }
    }
    updateLink();
    $('#trash').hide(500);
}
/////////// FIN DRAG N DROP////////////


function remove(nom,skipIt){
    let objet;
    var infos =[];
    donnees.gaucheCenter.infos.forEach(function(variable){
        if (variable.nom == nom){
            objet=variable;
        }
        else{
            infos.push(variable);
        }
    })
    donnees.gaucheCenter.infos = infos;
    infos = [];
    if(!objet){donnees.droiteCenter.infos.forEach(function(variable){
        if (variable.nom == nom){
            objet=variable;
        }
        else{
            infos.push(variable);
        }
    })
        donnees.droiteCenter.infos = infos;

    }

    if(objet && !skipIt)_deleted.push(objet);
    return objet;
}
$(function() {

    token = getCookie('token');// recuperation du potentiel token enregistré en cookie
    $('#trash').hide();

    $('#aModifier').change(function () {
        var nom = $('#aModifier').val();
        if (nom) {
            var info = nom.split(';');
            $.ajax("/lien/" + info[0] + "/" + info[1]).then(function (link, err) {
                $("#nom").val(link.nom);
                $("#liens").val(link.liens);
                $("#image").val(link.image);
                $("#sequence").val(link.sequence);
                $("#cote").val(info[0]);

            });
        } else {
            $("#nom").val('');
            $("#liens").val('');
            $("#image").val('');
            $("#sequence").val('');
        }

    })

    $('#Appliquer').click(function () {
        checktoken().then(function (token) {
            var tomodify = $("#aModifier").val();
            var _id;
            if (tomodify) _id = tomodify.split(";")[1];
            var nom = $("#nom").val();
            var liens = $("#liens").val();
            var image = $("#image").val();
            var cote = $("#cote").val();
            var order = $("#sequence").val() ? $("#sequence").val() : 0;
            if (nom) {
                if (_id) {// modification
                    var newvar = {_id: _id, sequence: order, nom: nom, image: image, liens: liens, side: cote,token:token};
                } else {// creation
                    var newvar = {sequence: order, nom: nom, image: image, liens: liens, side: cote,token:token};
                }
                $.ajax({
                    url: "/lien",
                    data: newvar,
                    type: 'PUT',
                    success:function(){ location.reload();}
                })


            }
        });
    })

    $('#Supprimer').click(function () {
        var tomodify = $("#aModifier").val();
        var _id;
        var side;
        checktoken().then(function(token){
        if (tomodify) {
            _id = tomodify.split(";")[1];
            side = tomodify.split(";")[0];


            var params = {_id: _id, cote: side, token:token};
            $.ajax({
                url: "/lien",
                data: params,
                type: 'DELETE',
                success:function(){ location.reload();}
            })


        }
        });
    })
$('#deconnexion').click(function(){
    setCookie('token',null,0);
    location.reload();
})
$('#connectionButton').click(function(){
    var username = $('#username').val();
    var pwd=$('#password').val();
    var params = {username: username, password: pwd};

    $.ajax({
        url: "/auth",
        data: params,
        type: 'POST',
        success:function(data){
            token = data.token;
            setCookie('token',token,1);
            if(token){
                $('#connection').modal('toggle');
            }
        }
    })
})

    }

);