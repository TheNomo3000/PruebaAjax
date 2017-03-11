//Manera 1

function visualizar() {
    //Solo es necesario la url y el success
    $.ajax({
        url : "CargarDatos.php",
        success:function (data) {
            $('#content').html(data);
        }
    })
}

//Manera 2
/*
function visualizar() {
    $('#content').load('CargarDatos.php');
}
*/