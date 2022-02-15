
const buscar = resultado => {
    let cadena = document.getElementById("cadena").value
    let cadenaBuscar = document.getElementById("cadenaBuscar").value

    subStr = cadenaBuscar.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    resultado = (cadena.match(new RegExp(subStr, "gi")) || []).length

    alert(resultado)
    console.log(resultado)   
};
