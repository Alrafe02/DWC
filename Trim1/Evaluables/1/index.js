var nombre = document.getElementById("nombre");
var correo = document.getElementById("correo");
var contraseña = document.getElementById("contraseña");
var contraseña2 = document.getElementById("contraseña2");
var resultado = document.getElementById("resultado");
var validar = document.getElementById("validar");
var boton = document.getElementById("boton");




var num1 = Math.floor(Math.random() * (100 - 1)) + 1;
var num2 = Math.floor(Math.random() * (100 - 1)) + 1;
var solucion = parseInt(num1) + parseInt(num2);

var nums = document.getElementById("nums");
nums.innerHTML = num1 + " + " + num2 + " =" ;


function terminos() {
    if(validar.checked){
        boton.disabled=false;
    }else{
        boton.disabled=true;
    }
}



function validarNombre(){
    var nombreColor = document.getElementById("nombre");
    if(nombreColor.value=="") {
        nombreColor.classList.remove("bien")
        return nombreColor.classList.add("mal")
    } else{
        nombreColor.classList.remove("mal")
        return nombreColor.classList.add("bien")
    }
}
function validarCorreo(){
    var correo = document.getElementById("correo");
    if(!correo.value=="" &&  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(correo.value)) {
        correo.classList.remove("mal")
        return correo.classList.add("bien")
    } else{
        correo.classList.remove("bien")
        return correo.classList.add("mal")
    }
}
function validarContraseña(){
    var contraseña = document.getElementById("contraseña");

    //Contraseña entre 6 y 16 caracteres
    var min = 6;
    var max = 16;

    //Minimo un número
    var regularExpression  = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if(!contraseña.value=="" &&  (contraseña.value.length > min && contraseña.value.length < max) && regularExpression.test(contraseña.value)) {
        contraseña.classList.remove("mal")
        return contraseña.classList.add("bien")
    } else{
        contraseña.classList.remove("bien")
        return contraseña.classList.add("mal")
    }
}
function validarContraseña2(){
    var contraseña2 = document.getElementById("contraseña2");
    var contraseña = document.getElementById("contraseña");

    if(!contraseña2.value=="" && contraseña.value == contraseña2.value) {
        contraseña2.classList.remove("mal")
        return contraseña2.classList.add("bien")
    } else {
        contraseña2.classList.remove("bien")
        return contraseña2.classList.add("mal")
    }
}
function validarCaptcha(){
    var resultado = document.getElementById("resultado");
    if(resultado.value=="" && resultado.value != solucion) {
        resultado.classList.remove("bien")
        return resultado.classList.add("mal")
    } else{
        resultado.classList.remove("mal")
        return resultado.classList.add("bien")
    }
}


function enviarFormulario() {
    console.log("Enviando Formulario...");

    var mensajesError = [];

    if(nombre.value === null || nombre.value === ""){
        mensajesError.push("No has ingresado tu nombre")
    }
    if(correo.value === null || correo.value === ""){
        mensajesError.push("No has ingresado tu correo electrónico")
    }
    if(contraseña.value === null || contraseña.value === ""){
        mensajesError.push("No has ingresado tu contraseña")
    }
    if(contraseña2.value === null || contraseña2.value === ""){
        mensajesError.push("No has ingresado la verificacion de la contraseña")
    }



    if(contraseña.value != contraseña2.value){
        mensajesError.push("Las contraseñas no coinciden")
    }
    if(resultado.value != solucion){
        mensajesError.push("Captcha incorrecto")
    }


if(mensajesError.length == 0 ) {
    alert("Formulario enviado correctamente");
}
    var error = document.getElementById("error");
    error.style.color = "red";
    error.innerHTML = mensajesError.join(", ")
    
    return false;

}