
function consultar(){
    let fecha1 = document.getElementById("fecha1").value
    let fecha2 = document.getElementById("fecha2").value
    let fecha11 = new Date(fecha1);
    let fecha22 = new Date(fecha2);
    let fecha111 = Date.parse(fecha11)
    let fecha222 = Date.parse(fecha22)
    console.log("dentro funcion");



    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'datos.json', true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
    



        if(this.readyState == 4 && this.status == 200) {
            
            let datos = JSON.parse(this.responseText);
            //console.log(datos);
            let res = document.querySelector("#res");
            res.innerHTML = "";
    
    
            for(let item of datos) {
                let fecha = new Date(item.dia)
                let fechareal = Date.parse(fecha)
                console.log(fechareal)
                console.log(fecha111)
               if(fechareal >= fecha111 && fechareal <= fecha222 && item.viento <= 10 && item.temperatura >= 20 && item.luz == "soleado"){
                    res.innerHTML += `
                    <tr>
                        <td>${item.dia}</td>
                        <td>${item.ciudad}</td>
                        <td>${item.viento}km/h</td>
                        <td>${item.temperatura}</td>
                        <td>${item.luz}</td>
                    </tr>
                    `
                }



            }
        }
    
    }
    
}

