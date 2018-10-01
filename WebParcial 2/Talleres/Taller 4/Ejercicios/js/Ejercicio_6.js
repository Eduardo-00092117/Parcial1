var radio = prompt('Escriba el radio de la circunferencia');

if(radio <= 0){
    console.log('ERROR: No puede ingresar radios negativos o iguales a cero!!!');
} else{
    let area = Math.PI*(radio**2);
    console.log('El area del circulo es ' + area);
}