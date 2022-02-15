
const buscarPalabra = resultado => {
    let cadena = document.getElementById("cadena").value
    let palabraBuscar = document.getElementById("palabraBuscar").value
    let y = 0;
    resultado = 0
    for(i = 0;i < cadena.length; i++) {
        if(cadena[i] == palabraBuscar[0])
            {
            for(i2 = i; i2 < i+palabraBuscar.length;i2++)
               {
                if(cadena[i2]==palabraBuscar[i2-i])
                  {
                    y++;
                  }
                if (y==palabraBuscar.length){
                    resultado++;
                }
            }
            y=0;
        }
    }
    alert(resultado)
    console.log(resultado)   
};
