
/* Ejercicio 1 */

const contenedor = document.getElementById("contenedor")
const btn = document.getElementById("button")


/* let backgroundColor = [`red`,`blue`, `yellow`, `orange`] 
let indiceColor = 0
btn.addEventListener("click", () =>{
    contenedor.style.backgroundColor = backgroundColor[indiceColor]
    indiceColor = (indiceColor + 1 ) % backgroundColor.length;

}) 
       */

let backgroundColor = [`red`,`blue`, `yellow`, `orange`] 
let indiceColor = 0
btn.addEventListener("click", () => {

    ++indiceColor
   contenedor.style.backgroundColor = backgroundColor[indiceColor -1 ]
   contenedor.textContent = backgroundColor[indiceColor -1 ]
    indiceColor = (indiceColor) % backgroundColor.length
})

/* Ejercicio 2 */


const textContenedor = document.getElementById("textContenedor")
const textInput = document.getElementById("textInput")
const resetBtn = document.getElementById("resetBtn")


textInput.addEventListener("keyup", () => {

let textIngresado = textInput.value
textContenedor.innerHTML = textIngresado

})
resetBtn.addEventListener("click",() => {

    textContenedor.innerHTML = ""
    
})

 /* Ejercicio 3 */

const estatura = document.getElementById("estatura")
const peso = document.getElementById("peso")
const indiceCorporal = document.getElementById("indiceCorporal") 
const calcular = document.getElementById("calcular")

calcular.addEventListener("click", () => {

let resultado = Number(peso.value)/ (Number(estatura.value)**2)
indiceCorporal.value = resultado 
})