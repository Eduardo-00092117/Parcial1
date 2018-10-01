
var discriminante = (a, b, c) => {
    let valor;
    valor = (b**2)-(4*a*c)
    return valor;
}

let a = parseFloat(prompt('Ingrese el valor de a'));
let b = parseFloat(prompt('Ingrese el valor de b'));
let c = parseFloat(prompt('Ingrese el valor de c'));

var operacion;

if(discriminante(a, b, c) == 0){
    operacion = -b/(2*a);
    console.log('Solo tiene una raiz y es ' + operacion);
} else if(discriminante(a, b, c) < 0){
    console.log('No tiene raiz!!!');
} else if(discriminante(a, b, c) > 0){
    operacion = ((-b+discriminante(a, b, c))/2*a);
    console.log('La primera raiz es ' + operacion);
    operacion = ((-b-discriminante(a, b, c))/2*a);
    console.log('La segunda raiz es ' + operacion);
}