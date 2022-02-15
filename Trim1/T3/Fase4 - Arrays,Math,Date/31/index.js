
const numMasAlto = resultado => {
    resultado = 0;
    let array = [4,2,3];
    for(let i = 0 ; i < array.length ; i++) {
        if(array[i]>resultado){
            resultado = array[i]
        }
    }
    alert(resultado)
    console.log(resultado)
};
