
const ocultarCorreo = resultado => {
    let correo = document.getElementById("correo").value
    let correoDividido = correo.split("@");
    let correoIzq = correoDividido[0];
    let parteAQuitar = correoIzq.length / 2;
    correoIzq = correoIzq.substring(0, (correoIzq.length - parteAQuitar));
    let correoDer = correoDividido[1];
    resultado = correoIzq + "...@" + correoDer;
    
    alert(resultado)
    console.log(resultado)
};
