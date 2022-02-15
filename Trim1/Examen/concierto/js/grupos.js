var festivales = {
    "Festival":"Navar-Pop",
    "Ciudad":"Ablitas",
    "Anno":2018,
    "Grupos":[
    {
    "nombre":"Love of lesbian",
    "compañia":"Warner Music",
    "discos":[
    "Microscopic Movies",
    "Is it Fiction?",
    "Ungravity",
    "Maniobras de escapismo",
    "Cuentos chinos para niños del Japón",
    "1999",
    "La noche eterna. Los días no vividos",
    "El poeta Halley"
    ]
    },
    {
    "nombre":"Izal",
    "compañia":"Autoeditado",
    "discos":[
    "Teletransporte",
    "Magia y efectos especiales",
    "Agujeros de gusano",
    "Copacabana",
    "VIVO",
    "Autoterapia"
    ]
    },
    {
    "nombre":"Miss Caffeina",
    "compañia":"Warner Music",
    "discos":[
    "Imposibilidad del fenómeno",
    "De polve y flores",
    "Detroit"
    ]
    } ]
   }



   //Funcion que se ejecuta al abrir el html
   function init() {



    //Resumen ej: He creado los elementos en js para que sea dinámico, ya que si se añaden más grupos 
    //o discos se añadirán solos al estar en bucles


    //Creación etiquetas section y article
    let section = document.createElement("section");
    let article = document.createElement("article");



    //Datos del festival
    let festival = document.createTextNode("Festival: " + festivales.Festival);
    let ciudad = document.createTextNode("Ciudad: " + festivales.Ciudad);
    let año = document.createTextNode("Año: " + festivales.Anno);

    //Añadir datos a la etiqueta section
    section.appendChild(festival);
    section.appendChild(document.createElement("br"));
    section.appendChild(ciudad);
    section.appendChild(document.createElement("br"));
    section.appendChild(año);

//Bucle para recorrer todos los grupos
    for(let i = 0 ; i < festivales.Grupos.length ; i++){


        //Creación etiqueta h2 con el nombre del grupo
        let h2 = document.createElement("h2");
        let h2texto = document.createTextNode(festivales.Grupos[i].nombre)
        h2.appendChild(h2texto)

        let nombre = document.createTextNode("Compañía: " + festivales.Grupos[i].compañia)
        let discografia = document.createTextNode("Discografía")


        //Creación de la lista desordenada
        let ul = document.createElement("ul");
        //bucle para recorrer los discos
        for (let e = 0 ; e < festivales.Grupos[i].discos.length ; e++) {
            //Creación de los li, introduciendo cada disco 
            let li = document.createElement("li");
            let liTexto = document.createTextNode(festivales.Grupos[i].discos[e]);
            li.appendChild(liTexto);
            ul.appendChild(li);
        }
        //Añadir todas las etiquetas creadas
        article.appendChild(h2);
        article.appendChild(nombre);
        article.appendChild(document.createElement("br"));
        article.appendChild(discografia);
        article.appendChild(ul);

    }
    //Añadir la etiqueta article a section, y section a el body del html
    section.appendChild(article)
    document.body.appendChild(section);
  
}
//ejecutar la funcion al abrir el archivo html
window.onload = init;