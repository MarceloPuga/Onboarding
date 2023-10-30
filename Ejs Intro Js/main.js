
let miNombre = "marcelo"
let miApellido = "Puga"
const miEdad = 36
let miMascota = "Lupita"
let edadMascota = 5
let nombreCompleto = miNombre + " " + miApellido
let textoPresentacion = `Hola mi nombre y apellido es ${miNombre} ${miApellido} tengo ${miEdad} y tengo una mascota llamada ${miMascota} de ${edadMascota} años de edad`
let alumno = {
    edad : 20,
    altura  : "1.6m",
    peso : "80kg", 
    nacionalidad : "Argentina",
    modalidad: "Quimica"
}
let mascota = {
    edad: 5,
    color: "pimienta",
    peso: "10kg",
    raza: "shnauzer",
    origen: null
}

console.log (miNombre, miApellido, miEdad)
console.log (miMascota, edadMascota)
console.log (nombreCompleto)
console.log ( textoPresentacion)
console.log (miEdad - edadMascota)
console.log (miEdad + edadMascota)
console.log (miEdad * edadMascota)
console.log (miEdad / edadMascota)
console.table(alumno)
console.log (alumno.altura)
console.log (alumno.edad)
console.log (alumno.modalidad)
console.log (alumno.nacionalidad)
console.log (alumno.peso)
console.table(mascota)
console.log(mascota.edad)
console.log(mascota.color)
console.log(mascota.peso)
console.log(mascota.raza)
console.log(mascota.origen)

const frutas = ["banans", "manzanas", "peras", "frutillas", "mandarinas"]
console.log(frutas)
console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])
console.log(frutas[3])
console.log(frutas[4])


/* let edadIngresada = prompt("ingrese edad")
console.log(edadIngresada)
let soyMayorDeEdad = edadIngresada >= 18
soyMayorDeEdad = "soy mayor de edad " + edadIngresada  
console.log(soyMayorDeEdad) */

const numeros = ["1","2","3","4","5"]
console.log(numeros)

console.log(numeros[0])
console.log(numeros[1])
console.log(numeros[2])
console.log(numeros[3])
console.log(numeros[4])

let padre = {

    edad: "60",
    altura: "1.70m",
    nacionalidad: "Argentina"

}
let  madre = {

    edad: "55",
    altura: "1.60m",
    nacionalidad: "Argentina"
    
}
let hijo1 = {

    edad: "15",
    altura: "1.50m",
    nacionalidad: "Argentina"
    
}
let hijo2 = {

    edad: "10",
    altura: "1.30m",
    nacionalidad: "Argentina"
    
}
let hijo3 = {

    edad: "5",
    altura: "1.00m",
    nacionalidad: "Argentina"
    
}

const familia = [padre, madre, hijo1, hijo2, hijo3]
console.log(familia)

console.log(familia[0])
console.log(familia[1])
console.log(familia[2])
console.log(familia[3])
console.log(familia[4])

let textAleatorio = `mi hijo de ${hijo3.edad} años de edad se comio 4 ${frutas[1]}, ${numeros[4]} dias seguidos `

console.log(textAleatorio)

/* let primerEdad = prompt("Ingresa tu edad")
let segundaEdad = prompt("Ingresa edad del compañero")
let edadesIguales = "Mi edad es igual a la de mi compañero" + " " + (primerEdad == segundaEdad)
let soyMayor = "Soy mayor que mi compañero" + " " + (primerEdad>segundaEdad)
let soyMenor =  "Soy menor que mi compañero" + " " + (primerEdad<segundaEdad)
console.log(edadesIguales)
console.log(soyMayor)
console.log(soyMenor) */

/* let edad = prompt("ingrese su edad")
let altura = prompt("ingrese su altura en cm")
let puedeSubir = edad > 6 && altura >= "120"
console.log("puede subir a la atraccion:" + puedeSubir) */

let pase = prompt("Ingrese que tipo de pase tiene: vip, normal o limitado")
let saldo = Number(prompt("Ingrese su saldo disponible de 0 a 5000:"))
console.log(pase)
console.log(saldo)
let  puedePasar
puedePasar = pase == "vip" || saldo >= 1000
console.log("puede pasar" + " " + puedePasar)
