function visualizar(){
    if(window.XMLHttpRequest){
        xmlhttp = new XMLHttpRequest();
    }else{
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function(){
        if (this.readyState = 4 && this.status == 200){
            document.getElementById('content').innerHTML = this.responseText;
        }
    };
    xmlhttp.open("GET","CargarDatos.php",true);
    xmlhttp.send();
}