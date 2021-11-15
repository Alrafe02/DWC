
const productoArray = resultado => {
    resultado = 1
    let array = [1,2,3,4,5,6,7];
    for(let i = 0 ; i < array.length ; i++) {
        resultado = resultado * array[i];
    }
    alert(resultado)
    console.log(resultado)
};
