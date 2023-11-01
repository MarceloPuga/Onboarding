/* Ejercicio 1 */

function multiplicar() {
    let multiplicar = 100 * 20
    console.log(multiplicar);
}
multiplicar()



/* Ejercicio 2 */

function sumar() {
    let sumar = 100 + 20
    console.log(sumar);
}
sumar()

/* Ejercicio 3 */

function sumar2(number1, number2) {
    number1 = 100
    number2 = 20
    let sumar = number1 + number2
    console.log(sumar);
}
sumar2()

/* Ejercicio 4 */

function sumar3(number3, number4) {
    let suma = number3 + number4
    console.log(suma)
}
sumar3(200, 20)

/* Ejercicio 5 */

function multiplicacion(numero1) {
    let multi = numero1 * 5
    return multi
}
multiplicacion(10)


/* Ejercicio 6 */

const restar = function (numero1) {
    let resta = numero1 - 5
    return resta

}
restar(10)

console.log(restar(10))

/* Ejercicio 7 */


const restar1 = number3 => number3 - 5

restar1(10)

console.log(restar1(10))

/* Ejercicio 8 */

function saludar(nombre) {
    return `Hola mi nombre es ${nombre}`
}

saludar("Marcelo")
console.log(saludar("Marcelo"))

/* Ejercicio 9 */

const multiplique = function (num1, num2) {
    return num1 * num2
}

console.log(multiplique(5, 7))

/* Ejercicio 10 */

function area(base, altura) {
    return base * altura
}
area(3, 5)
console.log(area(3, 5))

function perimetro(base, altura, hipotenusa) {
    return base + altura + hipotenusa
}
perimetro(3, 5, 8)
console.log(perimetro(3, 5, 8))

/* Ejercicio 11 */


let descuento1 = 0.1
let descuento2 = 0.2
const totalCompra = (precio, cantidad) => {
let precioDes = true
    if (cantidad >= 10 && cantidad <= 19) {

        precioDes = precio * descuento1

    } else if (cantidad >= 20) {
        precioDes = precio * descuento2
    }

    let productoConDescuento = precio - precioDes
    let total = cantidad * productoConDescuento

    return total

}

console.log(totalCompra(200, 20))

/* Ejercicio 12 */

function esMayorDeEdad(edad) {
    EdadDeLaPersona = 0
    if (edad >= 18) {
        EdadDeLaPersona = `es mayor de edad`
    } else if (edad >= 1 && edad <= 17) {
        EdadDeLaPersona = `Eres menor de edad`
    }
    return EdadDeLaPersona
}

console.log(esMayorDeEdad(18))

/* Ejercicio 13 */


function Ingresos(IngresoAnual) {

    if (IngresoAnual <= 10000) {
        descuento = IngresoAnual * 0.1
        Total = IngresoAnual - descuento
    }
    else if (IngresoAnual >= 10001 && IngresoAnual <= 20000) {
        descuento = IngresoAnual * 0.15
        Total = IngresoAnual - descuento
    } else {
        descuento = IngresoAnual * 0.2
        Total = IngresoAnual - descuento
    }
    return Total
}

console.log(Ingresos(25000))

/* Ejercicio 14 */

function diasDeLaSemana(dias) {

    switch (dias) {
        case 1:
            return (`Es dia laboral`)
        case 2:
            return (`Es dia laboral`)
        case 3:
            return (`Es dia laboral`)
        case 4:
            return (`Es dia laboral`)
        case 5:
            return (`Es dia laboral`)         
        case 6:
             return (`Es feriado`)

        case 7:
            return (`Es feriado`)
    }

   
}
console.log(diasDeLaSemana(7))