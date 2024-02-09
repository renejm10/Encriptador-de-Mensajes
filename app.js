function imagechange(mensaje){
    if (mensaje.value !=""){
        document.getElementById("idNoEncontrado").style.display="none";
        document.getElementById("encontrado").style.display="flex";
    }
    else {
        document.getElementById("encontrado").style.display="none";
        document.getElementById("idNoEncontrado").style.display="flex";
    }
}

