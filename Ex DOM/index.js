const titulo = document.getElementById("titulo");

let naranja = document.querySelectorAll(`.orange`);
for (const iterator of naranja) {
    iterator.classList = "bg-orange-500";
}

const contenedor = document.getElementById(`.contenedor`);

const tituloPrincipal =  "Frutas";
titulo.innerHTML = tituloPrincipal;

const paragraph = document.querySelector(`.pfooter`);

const paragraph1 = "MindHub © Marcelo Puga Cohort";
paragraph.innerHTML = paragraph1;

const divContenedor = document.getElementById("div-contenedor");


function crearArticle(frutas) { 

return  `<article class="w-[250px] h-50  flex flex-col space-x-4 text-center  border-2 border-black items-center rounded-md"> 
<img class="h-[250px] w-[150px] object-contain p-10px " src="${frutas.foto}" alt="">
<h2 class="font-bold">${frutas.nombre}</h2>
<p class= "text-black w-[200px] text-justify mt-10 text-sm font-semibold" >${frutas.descripcion}</p>
</article>`
                       
}
function articleDeFrutas(frutas, contenedor){

    let auxdiv = " "
    for (const fruta of frutas) {
        const article = crearArticle(fruta)
        auxdiv += article
    }
    contenedor.innerHTML += auxdiv
    
}

articleDeFrutas( frutas,divContenedor);




/* Ejercicio 9 */


function crearListaDeFrutasDulces(frutas) {

    const lista = document.createElement("ul");


    const frutasDulces = frutas.filter(fruta => fruta.esDulce);


    frutasDulces.forEach(fruta => {
        const elementoLi = document.createElement("li");
        elementoLi.textContent = fruta.nombre; 
        lista.appendChild(elementoLi); 
    });
    return lista;
}



const listaDeFrutasDulces = crearListaDeFrutasDulces(frutas);

listaDeFrutasDulces.className ="mb-3 list-disc"

const contenedorLista = document.getElementById("contenedorLista");
contenedorLista.appendChild(listaDeFrutasDulces);

 mostrarFrutas(frutas);

 



    




