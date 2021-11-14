
const mayusculas = resultado => {
    let cadena = document.getElementById("cadena").value;
    resultado = cadena.replace(/\w\S*/g, function(texto){
                    return texto.charAt(0).toUpperCase() + texto.substr(1).toLowerCase();
                });

    alert(resultado)
    console.log(resultado)
};
