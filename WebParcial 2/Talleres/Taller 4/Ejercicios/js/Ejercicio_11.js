var numero = prompt('Ingrese un numero');

if(parseInt(numero) > 9){
    console.log('El primer numero es ' + numero[0]);
    console.log('El ultimo numero es ' + numero[numero.length-1]);
} else{
    console.log('Ingrese un numero mayor a 9!!!');
}