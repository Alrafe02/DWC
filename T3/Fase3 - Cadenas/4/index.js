const extraer = resultado => {
    let num = document.getElementById("num").value
    let cadena = document.getElementById("cadena").value
    resultado =  cadena.slice(0, num);
    alert(resultado)
    console.log(resultado)
};