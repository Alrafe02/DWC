
const masFrecuente = resultado => {
    const array = ["array1", "array2", "array3", "array4", "array5", "array1", "array1", "array2", "array1"];
    resultado = ""
    contador = 0;
    vecesEscritas = 1;
    for(let i = 0 ; i < array.length ; i++) {
        for(let e = i; e<array.length; e++){    
            if(array[i] == array[e]) {
                contador++
            }
            if(vecesEscritas < contador) {
                vecesEscritas = contador
                resultado = array[i]
            }
        }
        contador = 0
    }
    alert(resultado)
    console.log(resultado)
};
