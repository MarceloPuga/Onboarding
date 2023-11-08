/* Ejercicio 1 */


imprimirMensaje = mensaje => mensaje

/* Ejercicio 2 */

const crearMultiplicacion = (numero1, numero2) => resultado = numero1 * numero2

console.log(crearMultiplicacion(5, 4))

/*  Ejercicio 3 */

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const nuevoArray = array.map((number) => crearMultiplicacion(number, 2))

console.log(nuevoArray)

/* Ejercicio 4 */


const cervezasMasFuertes = beers.filter(beer => beer.abv).toSorted((a, b) => a.ibu + b.ibu).map(beer => beer.abv).slice(0, 10)

console.log(cervezasMasFuertes)

/* Ejercicio 5 */

const cervezasMasAmargas = beers.filter(beer => beer.ibu).toSorted((a, b) => a.ibu - b.ibu).map(beer => beer.ibu).slice(0, 10)

console.log(cervezasMasAmargas)

/* Ejercicio 6 */

function recorrerArray(beer) {

    const arrayDeCervezas = beers.find(beer => beer.name == "Avery Brown Dredge")
    return arrayDeCervezas

}

console.log(recorrerArray())

/* Ejercicio 7 */


let valorIngresado = 45

function recorridoDeArray(beers, valor) {

    const cervezas = beers.find(beer => beer.ibu == valor)
    if (cervezas) {
        return cervezas
    }
    console.log(`no existe cerveza con este ibu`)

}
console.log(recorridoDeArray(beers, valorIngresado))

/* Ejercicio 8 */

let nombreIngresado = "Fake Lager"

function rutaDeArrays(beers, nombre) {

    const nameCervezas = beers.findIndex(beer => beer.name == nombre)
    if (nameCervezas >= 0) { return nameCervezas }
    else { console.log(`esa cerveza no existe`) }

}

console.log(rutaDeArrays(beers, nombreIngresado))

/* Ejercicio 9 */


let ValorEtilicoIngresado = 6

function muchasCervezas(beers, valorEtilico) {

    const graduacionAlcoholica = beers.filter(beer => beer.abv < valorEtilico)
        .map(beer => `${beer.name}  ${beer.abv}  ${beer.ibu}`)
    if (graduacionAlcoholica) {
        return graduacionAlcoholica

    }

}

console.log(muchasCervezas(beers, ValorEtilicoIngresado))

/* Ejercicio 10 */

/* Generar una función que reciba como parámetro un array de cervezas, un nombre de propiedad y un valor booleano. Debe devolver un nuevo array con 10 cervezas ordenadas por la propiedad ingresada como segundo argumento, de manera ascendente si el tercero es true o descendente si es false. */

function listaDeBirras(beers, propiedad, ascendente ){

const birras =beers.toSorted((a,b)=> {if(ascendente)
    {  return a[propiedad] - b[propiedad]}
    else
    {return b[propiedad] - a[propiedad] }
 } )

 const cervezasOrdenadas = birras.slice(0,10)

 return cervezasOrdenadas
}

const cervezasOrdenadas = listaDeBirras(beers, "ibu", true);
console.log(cervezasOrdenadas);


/* Ejercicio 11 */

function rellenarTabla(beers, id) {
    const buscartable = document.getElementById(id)
    function crearFila(beer) {
        let fila =
        
           `<tr>
            <td>${beer.name}</td>
            <td>${beer.abv}</td>
            <td>${beer.ibu}</td>
            </tr>`

        return fila
    }
    beers.forEach(beer => {
        let fila2 = crearFila(beer)
        buscartable.innerHTML += fila2
    });
}
rellenarTabla(listaDeBirras(beers, "name", true), "tbody",)
