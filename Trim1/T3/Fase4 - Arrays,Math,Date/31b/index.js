
const eliminarDeArray = resultado => {
    let array = [4,2,3];
    let numABorrar = 2;
    let index = array.indexOf(numABorrar);
    if(index > -1){
        array.splice(index,1)
    }
    resultado = array
    alert(resultado)
    console.log(resultado)
};