var resistencia1 = parseFloat(prompt('Ingrese la resistencia 1'));
var resistencia2 = parseFloat(prompt('Ingrese la resistencia 2'));

var resistenciaE;

resistenciaE = (resistencia1*resistencia2)/(resistencia1+resistencia2)

console.log(resistenciaE.toFixed(2));