
const buscarMes = resultado => {
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];
let fechaRecibida = document.getElementById("fecha").value
const fecha = new Date(fechaRecibida);
resultado =  meses[fecha.getMonth()];
    alert(resultado)
    console.log(resultado)
};
