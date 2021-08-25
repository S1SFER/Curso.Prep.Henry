// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'casa';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 5;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  return str;
}

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  var sumatoria = x+y;
  return sumatoria;
}
suma(3,4);
function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  var restar = x-y;
  return restar;
}
resta(9,5);
function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  var por = x*y;
  return por;
}
multiplica(3,4);

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  var division = x/y;
  return division;
}
divide(15,3);
function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  if (x==y){
  return true;
  }return false;
}
sonIguales(3,3);
function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  if(str1.length==str2.length){
    return true;
  }return false;
}
tienenMismaLongitud('casa','cama');
function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num<90){
    return true;
  }return false;
}
menosQueNoventa(45);

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num>50){
    return true;
  }return false;
}
mayorQueCincuenta(48);
function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  var a = x%y;
  return a;
}var resto = obtenerResto(25,4)
console.log(resto);

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num%2==0){
    return true;
  }return false;  
}
esPar(5);
function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num%2!==0){
    return true;
  }return false;
}
esImpar(4);
function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  var a = num**2;
  return a;
}
elevarAlCuadrado(2);
function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  var a = num**3;
  return a;
}
elevarAlCubo(3);
function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  var a = num**exponent;
  return a;
}
elevar(5,2)
function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  var a = Math.round(num);
  return a;
}
redondearNumero(6.7);
function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
 var a = Math.ceil(num);
 return a;
}
redondearHaciaArriba(6.3);
function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  return Math.random(0,10);
}

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  if(numero>0){
    return 'Es positivo';
  }else if(numero<0){
    return 'Es negativo';
  }return false;
}

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  return str + '!';
}
agregarSimboloExclamacion('Hola');
function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  var a = nombre+ ' ' + apellido; 
  return a;
}
combinarNombres('Elias','Ladino');
function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  return 'Hola '+ nombre + '!';
}
obtenerSaludo('Elias');
function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  var a = alto*ancho;
  return a;
}
obtenerAreaRectangulo(10,5)

function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  return lado*4;
}
retornarPerimetro(15);

function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  return (base*altura)/2;
}
areaDelTriangulo(10,15)

function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  var a = 1.20;
  return euro * a;
}
deEuroAdolar(5);

function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí}
  var a = ['a','e','i','o','u']
  if (letra==a[0]){
    return 'Es vocal'
  }else if (letra==a[1]){
    return 'Es vocal'
  }else if (letra==a[2]){
    return 'Es vocal'
  }else if (letra==a[3]){
    return 'Es vocal'
  }else if (letra==a[4]){
    return 'Es vocal'
  }else if (letra!==a[0]){
    return 'Dato incorrecto';
  }else if (letra!==a[1]){
    return 'Dato incorrecto';
  }else if (letra!==a[2]){
    return 'Dato incorrecto';
  }else if (letra!==a[3]){
    return 'Dato incorrecto';
  }else if (letra!==a[4]){
    return 'Dato incorrecto';
  }else if(letra.length>1){
    return 'Dato incorrecto';
  }
}
esVocal('u');


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
