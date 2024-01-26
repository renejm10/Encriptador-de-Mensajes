

function imagechange(mensaje){
    if (mensaje.value !=""){
        document.getElementById("noMensaje").style.display="none";
        document.getElementById("mensaje").style.display="block";
    }
    else {
        document.getElementById("noMensaje").style.display="block";
        document.getElementById("mensaje").style.display="none";
    }
}