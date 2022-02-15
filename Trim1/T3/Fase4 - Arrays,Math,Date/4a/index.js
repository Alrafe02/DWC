
const recorrerArray = resultado => {
    resultado = 0
    let array = [1,2,3,4,5,6,7,8,9,10,11];
    for(let i = 0 ; i < array.length ; i++) {
        resultado = parseInt(resultado) + parseInt(array[i]);
    }
    alert(resultado)
    console.log(resultado)
};
