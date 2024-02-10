let encriptado;
let desencriptado;

function imagechange(mensaje){
    if (mensaje.value !=""){
        document.getElementById("idNoEncontrado").style.display="none";
        document.getElementById("encontrado").style.display="flex";
    }
    else {
        document.getElementById("resultado").innerHTML="";
        document.getElementById("encontrado").style.display="none";
        document.getElementById("idNoEncontrado").style.display="flex";
    }
}

function encriptar(){
    let mensaje = document.getElementById("texto").value;
    console.log(mensaje);
    encriptado = mensaje.replaceAll("e","enter");
    encriptado= encriptado.replaceAll("i","imes");
    encriptado= encriptado.replaceAll("a","ai");
    encriptado= encriptado.replaceAll("o","ober");
    encriptado= encriptado.replaceAll("u","ufat");

    document.getElementById("resultado").innerHTML=encriptado;

}

function desencriptar(){
    let mensaje = document.getElementById("texto").value;

    desencriptado= mensaje.replaceAll("enter","e");
    desencriptado= desencriptado.replaceAll("imes","i");
    desencriptado= desencriptado.replaceAll("ai","a");
    desencriptado= desencriptado.replaceAll("ober","o");
    desencriptado= desencriptado.replaceAll("ufat","u");

    document.getElementById("resultado").innerHTML=desencriptado;
}

function copiar(){
    let txtCopiar = document.getElementById("resultado").innerHTML;
    console.log(txtCopiar);
    if (txtCopiar !=""){
        navigator.clipboard.writeText(txtCopiar);
    }
    
    
}