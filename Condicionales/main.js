/* ejercicio 1 */

let num1 = 5;
let num2 = 6;

if (num1 > num2) {
  console.log(num1);
} else {
  console.log(num2);
}

/* ejercicio 2 */

let num3 = 4;
let num4 = 4;

if (num3 > num4) {
  console.log(num3);
} else if (num3 < num4) {
  console.log(num4);
} else {
  console.log(`los numeros son iguales`);
}

/* ejercicio 3 */

let num5 = 4;
let num6 = 5;

if (num5 == num6) {
  console.log(`las variables son iguales`);
} else {
  console.log(`los numeros son diferentes`);
}

/* Ejercicio 4 */

let fecha1 = "2018-9-2";
let fecha2 = "2023-5-7";
if (fecha1 > fecha2) {
  console.log(`la fecha ${fecha1} es mayor que la fecha ${fecha2}`);
} else if (fecha1 == fecha2) {
  console.log(`las fechas son iguales`);
} else {
  console.log(`${fecha2} es mayor`);
}
/* Ejercicio 5 */

let fecha3 = "2018-10-07";
let fecha4 = "2018-2-17";

if (fecha3 < fecha4) {
  console.log(`la fecha3 es mayor que fecha4`);
} else {
  console.log(`fecha4 es mayor que fecha3`);
}
/* Ejercicio 6 */

let dato1 = 5;
let dato2 = 7;
let dato3 = 9;

if (dato1 > dato2) {
} else if (dato2 > dato3) {
} else {
  console.log(`numero 9 es mayor`);
}

/* Ejercio 7 */
/* let color = prompt(`Elija su color`)
switch(color) {
    case "rojo":
    alert("El color de la pasion")
    break
    case "azul":
        alert("El color del mar")
        break
    case "verde":
        alert("El color de la naturaleza")
        break
} 
 */
/* Ejercicio 8 */

/* let numero = prompt(`Ingrese una operacion`);
let numero1 = 5;
let numero2 = 10;
let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicacion = numero1 * numero2;
let division = numero1 / numero2;
switch (numero) {
  case "suma":
    alert(suma);
    break;
  case "resta":
    alert(resta);
    break;
  case "multiplicacion":
    alert(multiplicacion);
    break;
  case "division":
    alert(division);
    break;
} */

/* Ejercicio 9 */

let persona1 = {
  nombre: "Marcelo",
  edad: 36,
  altura: 1.88,
};
let persona2 = {
  nombre: "Cintia",
  edad: 33,
  altura: 1.55,
};

if (persona1.altura > persona2.altura && persona1.edad < persona2.edad) {
  console.log(
    `${persona1.nombre} es mas alto que y tiene mas edad que ${persona2.nombre} `
  );
} else if (persona1.altura < persona2.altura && persona1.edad < persona2.edad) {
  console.log(
    `${persona1.nombre} es mas alto que y tiene mas edad que ${persona2.nombre} `
  );
} else if (persona1.altura < persona2.altura && persona1.edad < persona2.edad) {
  console.log(
    `${persona1.nombre} es mas alto que y tiene mas edad que ${persona2.nombre} `
  );
} else {
  console.log(
    `Entonces ${persona1.nombre} es mas alto que y tiene mas edad que ${persona2.nombre} `
  );
}

/* Ejercicio 10 */

/* nombre = prompt(`Ingresa tu nombre`);
let edad = prompt(`ingresa tu edad`);
let altura = prompt(`ingresa tu altura en cm`);
let vision = prompt(`ingresa tu vision`);

if(edad<"18"){
 console.log( `no tienes la edad suficiente`)
}
else if(altura < "150"){
console.log(`no tienes la altura suficiente`)
}
else if( "8" > vision && vision > "10"){

console.log(`no tienes el rango de vision correspondiente`)
}
else{ 
    console.log(`${nombre} esta capacitado para conducir`)
} */

/* Ejercicio 11 */

/* let edad = Number(prompt("Ingrese su edad")); */


/* if (edad <= 12) {
  alert(`eres un infante`)
}
else if (edad >= 13 && edad <= 18) {
  alert(`eres un adolescente`)
}
else if (edad >= 19 && edad <= 45) {
  alert(`eres un mayor joven`)
}
else if (edad < 100){
  alert(`eres un anciano`)
}
else {
  alert(`en realidad tiene mas de 100?`)
} */

/* Ejercicio 12 */

/* let ingresarNumero = Number(prompt(`Ingrese numero del 1 al 3`))
let numerodeseado = Number(prompt(`ingrese un numero que desee`))
if (ingresarNumero < 1 || ingresarNumero > 3) {
  alert(`valor no permitido`)
} else if (ingresarNumero == 1) {
  alert(`el numero ingresado es ${ingresarNumero * numerodeseado}`)
} else if(ingresarNumero == 2){
  alert(`el doble del numero ingresado es ${ingresarNumero*numerodeseado}`)
}else if(ingresarNumero == 3){
  alert(`el doble del numero ingresado es ${ingresarNumero*numerodeseado}`)
} */


/* Ejercicio 13 */

/* let nombreCliente = prompt(`ingrese su nombre`)
let pase = prompt(`ingrese si su pase es VIP o NORMAL`)
let entrada = prompt(`Posee entrada SI o NO `)

if (nombreCliente == "Marcelo" || pase == "VIP") {
  alert(`Bienvenido ${nombreCliente}`)
} else if (entrada == "SI") 
{
  let entradaDos = prompt(`desea utilizar entrada "SI" o "NO"`)
  if (entradaDos == "SI") {
    alert(`bienvenido ${nombreCliente}`)
  } else {
    alert(`no puede ingresar`)
  }
} else {
  alert(`no puede ingresar`)
}
let  comprarEntrada = prompt(`quiere comprar una entrada? "SI" o "NO"`)
if(comprarEntrada == "SI"){
 let dinero = prompt (`Cuanto dinero disponible tiene?`)
 if(dinero>1000){
  alert(`Buenvenido ${nombreCliente} puede ingresar`)
 } else {
  `no se puede realizar la comprar`
 }

} else{ alert(`No puede ingresar, hasta luego`)} */

/* Ejercicio 14 */

let numeroIngresado = Number(prompt(`Ingrese un numero que desee entre el 1 y el 10`))
let numeroIncognito = 7


if (numeroIngresado > numeroIncognito) {
  alert(`el numero es mayor, vuelve a intentarlo`)
  let numeroIngresado = Number(prompt(`Ingrese un numero que desee entre el 1 y el 10`))
  if (numeroIngresado < numeroIncognito) {
    alert(`el numero es menor, vuelve a intentarlo`)
    let numeroIngresado = Number(prompt(`Ingrese un numero que desee entre el 1 y el 10`))
    if (numeroIncognito === numeroIngresado) {
      alert(`adivinaste`)
    } 
  }else if(numeroIngresado > numeroIncognito || numeroIngresado < numeroIncognito){
    alert(`no tienes mas intentos`)
}

}


