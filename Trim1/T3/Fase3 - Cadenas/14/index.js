
const insertar = resultado => {
    let cadena = document.getElementById("cadena").value;
    let cadenaInsertar = document.getElementById("cadenaInsertar").value
    let posicion = document.getElementById("posicion").value;
    if(posicion == undefined) {
        posicion = 0;
    };
    if(cadenaInsertar == undefined) {
        cadenaInsertar = "";
    }
    resultado = cadena.slice(0, posicion) + cadenaInsertar + cadena.slice(posicion)
    alert(resultado)
    console.log(resultado)
};
