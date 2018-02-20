/**
 * Created by kedri on 12/02/2018.
 */

$("#Addone").click(function(){

    $(document.createElement('input'))
        .attr('type',"date")
        .attr('class','form-control')
        .attr('name','date')
        .attr("id", 'date' + $('input[name$="date"]').length).appendTo('#listdate');
})


$('#CreerEvenement').click(function () {
    var nom = $("#nom").val();
    var description = $("#description").val();
    if (nom && description) {

        var date_nbpersonne = {};
        var t_date_nbpersonne = [];
        var survey = {nom: nom, description: description, dates: []};

        var t_dates =[];
        var i=0;
        while($('#date'+i).val()){
           // console.log($('#date'+i).val());
            t_dates.push($('#date'+i).val());
            i++;
        }
        survey.dates = t_dates;
        survey._id = $('#_id').val();
        console.log(t_dates);

        $.ajax({
            url: "/survey",
            data: survey,
            type: 'PUT',
            success:function(){
                window.location.replace("/events");

            }
        })
    }else{
        if ( !nom )
            $("#nom").focus();
        else
            $("#description").focus();
    }



})