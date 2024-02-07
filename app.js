
let encriptado;
let desencriptado;

function imagechange(mensaje){
    if (mensaje.value !=""){
        document.getElementById("noMensaje").style.display="none";
        document.getElementById("mensaje").style.display="block";
    }
    else {
        document.getElementById("mensaje_encriptado").innerHTML=""
        document.getElementById("noMensaje").style.display="block";
        document.getElementById("mensaje").style.display="none";
    }
}

function encriptar(){
    let mensaje = document.getElementById("texto").value;
    encriptado= mensaje.replaceAll("e","enter");
    encriptado= encriptado.replaceAll("i","imes");
    encriptado= encriptado.replaceAll("a","ai");
    encriptado= encriptado.replaceAll("o","ober");
    encriptado= encriptado.replaceAll("u","ufat");
    console.log(encriptado);
    document.getElementById("mensaje_encriptado").innerHTML=encriptado;
}

function desencriptar(){
    let mensaje = document.getElementById("texto").value;
    encriptado= mensaje.replaceAll("enter","e");
    encriptado= encriptado.replaceAll("imes","i");
    encriptado= encriptado.replaceAll("ai","a");
    encriptado= encriptado.replaceAll("ober","o");
    encriptado= encriptado.replaceAll("ufat","u");
    console.log(encriptado);
    document.getElementById("mensaje_encriptado").innerHTML=encriptado;
}

function copiar(){
    navigator.clipboard.writeText(encriptado);
    console.log("copiado" + encriptado);
}