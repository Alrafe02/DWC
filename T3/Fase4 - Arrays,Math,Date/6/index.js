
const masAlto = resultado => {
    const array = [1, 32, 21, 2, 44];
resultado = 0
    for(let i = 0 ; i < array.length ; i++) {
        if(array[i] > resultado) {
            resultado = array[i]
        }
    }
    alert(resultado)
    console.log(resultado)
};
