
const diferenciaDias = resultado => {
    let fechaRecibida1 = document.getElementById("fecha1").value
    let fechaRecibida2 = document.getElementById("fecha2").value
    const fecha1 = new Date(fechaRecibida1);
    const fecha2 = new Date(fechaRecibida2);

    resultado = fecha2.getDate() - fecha1.getDate();

    alert(resultado)
    console.log(resultado)

    //No se por qué pero si pongo el dia 1 del mes, lo recibe como si fuese 
    //el último dia del mes anterior a las 00:00, entonces no me da el resultado
    //Solo funciona si se pone a partir del dia 2
};
