/* Ejercicio 1 */

/* let NumeroIngresado = Number(prompt(`Ingrese un numero del 1 al 100`))

for (let i = 0; i < NumeroIngresado; i++) {

  console.log(i)
       
    }  */

    /* Ejercicio 2 */
/* let IngreseNumero = Number(prompt(`Ingrese un numero del 1 al 10`))

for (let i = 0; i < 10 ; i++) {

    let multiplicar = i*IngreseNumero
    let vuelta = i

    console.log(`${vuelta} x ${IngreseNumero} = ${multiplicar}` )
}
 */
/* Ejercicio 5 */

let ingreseNumero = Number(prompt(`Ingrese un numero`))
let numeroSecreto = 15
let vueltas = 0

while(ingreseNumero !== 0){

if(ingreseNumero === 15){
    console.log(`Adivinaste!`)

}else if(ingreseNumero > 15){
    console.log(`el numero es mayor`)

} else {`el numero es menor`}

}
vueltas = ++




 
/* Ejercicio 9 */

let colores = ["verde", "rojo", "azul", "amarillo", "negro"]

for(let props of colores){
    console.log(`${props}`)
}

/* Ejercicio 10 */

function colors(colores){

    for(let props of colores){
        console.log(`${props}`)
    }
    
}
colors(colores)

/* Ejercicio 11 */

const numeros = [1,2,3,4,5]
for(const props of numeros){

    console.log(`el numero es ${props} y su doble es ${props*2}`)
} 

/* Ejercicio 12 */

let  padre = {
    nombre:  "Oscar",
    apellido: "Perez",
    altura: 1.85,
    edad: 60
}
let  madre = {
    nombre:  "Laura",
    apellido: "Perez",
    altura: 1.60,
    edad: 60
}
let  hijo1 = {
    nombre:  "Lautaro",
    apellido: "Perez",
    altura: 1.70,
    edad: 15
}
let  hijo2 = {
    nombre:  "Bruno",
    apellido: "Perez",
    altura: 1.75,
    edad: 25
}

let familia = [padre, madre, hijo1, hijo2]

function PresentacionFamiliar(){

    for (let props of familia) {
        
        console.log(`hola soy ${props.nombre} ${props.apellido} y tengo ${props.edad} años `)
        
    }
}
PresentacionFamiliar()

/* Ejercicio 13 */

let auto = {
    marca: "ford",
    modelo: "Ka",
    puertas: "3 puertas",
    color: "gris",
    año: 2013 
}
for (const key in auto) {
    console.log(key)
}

/* Ejercicio 14 */

let auto1 = {
    marca: "ford",
    modelo: "Ka",
    puertas: "3 puertas",
    color: "gris",
    año: 2013 
}
for (const key in auto1) {

    console.log(`${auto1[key]}`)
   
}

/* Ejercicio 15 */

/* let IngresarNumero = Number(prompt(`ingrese un numero`))
let sumaPar = 0
let sumaImpar = 0

while(IngresarNumero !== 0){
    if(IngresarNumero % 2 === 0 ){
     sumaPar = sumaPar + IngresarNumero
    } else {
        sumaImpar = sumaImpar + IngresarNumero
    }
IngresarNumero = Number(prompt(`ingrese un numero`))
}
console.log(`Pares: ${sumaPar} Impares: ${sumaImpar}`) */

/* Ejercicio 16 */

let numeros16 = [1,2,3,4,5,14,7,8,9,10]
let numeroMasGrande = 0;

for ( let numero of numeros16 ) {

  if (numeroMasGrande < numero)
  numeroMasGrande = numero;

}

console.log(numeroMasGrande);
