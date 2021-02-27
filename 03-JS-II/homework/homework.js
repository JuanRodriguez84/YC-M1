// No cambies los nombres de las funciones.

función obtenerMayor ( x ,  y ) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
}

función mayoriaDeEdad ( edad )  {
  // Determinar si la persona según su edad puede ingresar un evento.
  // Si tiene 18 años ó más, devolver -> "Permitido"
  // Si es menor, devolver -> "No permitido"
}
  
 conexión de función ( estado )  {
  // Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  // Cuando el estado es igual a 1, el usuario está "Online"
  // Cuando el estado es igual a 2, el usuario está "Away"
  // De lo contrario, presumimos que el usuario está "Offline"
  // Devolver el estado de conexión de usuario en cada uno de los casos.
}

función saludo ( idioma )  {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "¡Hola!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve" Hola! "
  // Tu código:
}

 colores de función ( color ) {
  // La función recibe un color. Devolver el hilo correspondiente:
  // En caso que el color recibido sea "blue", devuleve -> "This is blue"
  // En caso que el color recibido sea "red", devuleve -> "This is red"
  // En caso que el color recibido sea "green", devuleve -> "This is green"
  // En caso que el color recibido sea "orange", devuleve -> "This is orange"
  // Caso predeterminado: devuelve -> "Color no encontrado"
  // Usar el enunciado Switch.
}

function  esDiezOCinco ( numero )  {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
}

function  estaEnRango ( numero )  {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
}

function  esEntero ( numero )  {
  // Devuelve "true" si "numero" es un entero (int / integer)
  // Ejemplo: 0.8 -> falso
  // Ejemplo: 1 -> verdadero
  // Ejemplo: -10 -> verdadero
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
}

function  fizzBuzz ( numero )  {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
}

función  operadoresLogicos ( num1 ,  num2 ,  num3 )  {
  // La función recibe tres números distintos. 
  // Si num1 es mayor a num2 ya num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  // Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  // Si num3 es más grande que num1 y num2, aumenta su valor en 1 y retornar el nuevo valor.
  // 0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  // Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
}

function  esPrimo ( numero )  {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son seleccionados números primos
}

function  esVerdadero ( valor ) {
  // Escribe una función que recibió un valor booleano y retorne "Soy verdadero" 
  // si su valor es true y “Soy falso” si su valor es false.
  // Escribe tu código aquí

}

function  tablaDelSeis ( ) {
  // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  // La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Escribe tu código aquí   
  
}

function  tieneTresDigitos ( numero ) {
  // Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna falso.
  // Escribe tu código aquí
  
}

function  doWhile ( numero )  {
  // Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  // Retornar el valor final.
  // Usar el bucle do ... while.
}


// No modificar nada debajo de esta línea
// --------------------------------

módulo . exportaciones  =  {
  obtenerMayor ,
  mayoriaDeEdad ,
  conexión ,
  saludo ,
  colores ,
  esDiezOCinco ,
  estaEnRango ,
  esEntero ,
  fizzBuzz ,
  operadoresLogicos ,
  primo ,
  esVerdadero ,
  tablaDelSeis ,
  tieneTresDigitos ,
  hacer mientras
} ;