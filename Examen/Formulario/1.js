
//Recolección de todos los ids necesarios
var inicioSesion = document.getElementById("inicioSesion");
var contraseña = document.getElementById("contraseña");
var contraseña2 = document.getElementById("contraseña2");
var indicio = document.getElementById("indicio");
var detalles = document.getElementById("detalles");
var boton = document.getElementById("boton");
var msg = document.getElementById("msgContraseña");


//Validar la contraseña mientras que se escribe, si no está bien escrita se pondrá el borde rojo y escribirá un mensaje
function validarContraseña(){
    var contraseña = document.getElementById("contraseña");

    //Contraseña mas de 6 caracteres
    var min = 6;

    //Minimo un número y primera contraseña
    var regularExpression  = /^(?=.*[0-9])[A-Z][a-zA-Z0-9!@#$%^&*]{6,100}$/;
    if(!contraseña.value=="" &&  (contraseña.value.length > min) && regularExpression.test(contraseña.value)) {
        msg.innerHTML = " ";
        contraseña.classList.remove("mal")
        return contraseña.classList.add("bien")

    } else{
        msg.innerHTML = "La contraseña debe empezar por una letra mayúscula, tener un mínimo de 6 caracteres y contener, al menos, un dígito"
        contraseña.classList.remove("bien")
        return contraseña.classList.add("mal")
    }
}
//Validar la segunda contraseña mientras que se escribe, si no coincide se pondrá el borde rojo
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




//Función al ejecutar el botón 
function enviarFormulario() {
    console.log("Enviando Formulario...");

    var mensajesError = [];

    if(contraseña.value === null || contraseña.value === ""){
        mensajesError.push("No has ingresado tu contraseña")
        contraseña.focus()
    }
    if(contraseña2.value === null || contraseña2.value === ""){
        mensajesError.push("No has ingresado la verificacion de la contraseña")
    }
    if(contraseña.value != contraseña2.value){
        mensajesError.push("Las contraseñas no coinciden")
        contraseña.focus()
    }

    if(indicio.value != ""){
        let arr = indicio.value.split(" "); 
        for(var i = 0; i < arr.length; i++){
            if(arr[i] == contraseña.value){
                indicio.focus()
                mensajesError.push("El indicio de contraseña no puede contener la contraseña")
                
            }
        }
    }
    
//Mensaje de error 
if(mensajesError.length == 0 ) {
    alert("Formulario enviado correctamente");
}
    var error = document.getElementById("error");
    error.style.color = "red";
    error.innerHTML = mensajesError.join(", ")
    
    return false;

}