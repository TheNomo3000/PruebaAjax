/*
TODAS SON IGUALES, .getJSON termina haciendo un .ajax
Explicaicon en la documentacion oficial
 */

// MANERA 1;
function visualizar() {
    $.getJSON("libros.json",function (data) {
        $('#content').html('');//limpiamos lo anterior
        cargarDatos(data);
    })
}

//MANERA 2
/*
function visualizar() {
    $.ajax({
        dataType : 'json',
        url: 'libros.json',
        success: function (data) {
            cargarDatos(data);
        }
    })
}
*/


//CAGAMOS LA DATA!
function cargarDatos(data) {
    //recorremos la data con 2 foreach
    $.each(data, function (key, datavalue) {
        $.each(datavalue,function (key,value) {
            $('#content').append("<div>"+value.Autor+"|"+value.Titulo+"</div>");
        })
    });
}
