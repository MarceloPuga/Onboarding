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
/* ejercicio 3 */

/* let numero = 7
let numeroIngresados = Number(prompt(`Ingresa un numero campeon`))
let intentos = 1
while (numeroIngresados !== 0) {
    numeroIngresados = Number(prompt(`Ingresa un numero campeon`))
    if (numero === numeroIngresados) {
        console.log(`Ganaste!!`)
        break;
    } else if (numero > numeroIngresados) {
        console.log(`El numero es menor, estuviste cerca!`)
    } else {
        console.log(`El numero es mayor, estuviste cerca!`)
    };
}
intentos = ++intentos
console.log(`La cantida de intentos realizados es: ${intentos}`) */

/* Ejercicio 4 */

let numeroSumar1 = Number(prompt("Ingrese Numero"))
let totalNumeros1 = []
let numeroAux1 = 0
do {
    totalNumeros1.push(numeroSumar1)
    numeroSumar1 = Number(prompt("Ingrese Numero"))
    numeroAux1 = numeroAux1 + numeroSumar1
    console.log(`La suma de los numeros es ${numeroAux1}`)
} while (numeroSumar1 !== 0)

console.log(totalNumeros1)
console.log(numeroAux1)
console.log(totalNumeros1)

/* Ejercicio 5 */

/* let ingreseNumero = Number(prompt(`Ingrese un numero`))
let numeroSecreto = 15
let vueltas = 1

while (ingreseNumero !== 0) {
   
    if (ingreseNumero === numeroSecreto) {
        console.log(`Adivinaste!`)
        break;
    } else if (ingreseNumero > numeroSecreto) {
        console.log(`el numero es mayor`)

    } else{ console.log(`el numero es menor`) }
    
    ingreseNumero = Number(prompt(`Ingrese un numero`))
}

vueltas = vueltas++
 */
/* Ejercicio 6 */

/* let numeroIngresado = Number(prompt(`Ingrese un numero`))

for ( i= 0; i <= numeroIngresado; i++) {

    if (numeroIngresado % i === 0) {
        console.log(i);
    }
} */

/* Ejercicio 7 */

function sonarCampana() {

    for (let i = 0; i < 5; i++) {
        console.log("Ding Dong")
    }
    return "Ding Dong"
}
sonarCampana()

/* Ejercicio 8 */

const fechaLimite = "1987-10-7"
const fechas = ["1984-5-7","1990-3-2","1973-15-7","2024-10-8","2011-4-7"]

for (const fechaLimite of fechas) {

   if( fechaLimite <= fechas) {
    console.log(`fecha menor a ${fechaLimite}`)
   }else {
    console.log(`la fecha es mayor o igual a ${fechaLimite}`)
   }

    }


/* Ejercicio 9 */

let colores = ["verde", "rojo", "azul", "amarillo", "negro"]

for (let props of colores) {
    console.log(`${props}`)
}

/* Ejercicio 10 */

function colors(colores) {

    for (let props of colores) {
        console.log(`${props}`)
    }

}
colors(colores)

/* Ejercicio 11 */

const numeros = [1, 2, 3, 4, 5]
for (const props of numeros) {

    console.log(`el numero es ${props} y su doble es ${props * 2}`)
}

/* Ejercicio 12 */

let padre = {
    nombre: "Oscar",
    apellido: "Perez",
    altura: 1.85,
    edad: 60
}
let madre = {
    nombre: "Laura",
    apellido: "Perez",
    altura: 1.60,
    edad: 60
}
let hijo1 = {
    nombre: "Lautaro",
    apellido: "Perez",
    altura: 1.70,
    edad: 15
}
let hijo2 = {
    nombre: "Bruno",
    apellido: "Perez",
    altura: 1.75,
    edad: 25
}

let familia = [padre, madre, hijo1, hijo2]

function PresentacionFamiliar() {

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

let numeros16 = [1, 2, 3, 4, 5, 14, 7, 8, 9, 10]
let numeroMasGrande = 0;

for (let numero of numeros16) {

    if (numeroMasGrande < numero)
        numeroMasGrande = numero;

}

console.log(numeroMasGrande);
