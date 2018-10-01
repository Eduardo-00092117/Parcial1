var capacidadElevador = parseFloat(prompt('Ingrese la capacidad del elevador (kg)'));

var pesoPersonas = 0;

for(let x = 0; x < 5; x++){
    pesoPersonas = pesoPersonas + parseFloat(prompt('Ingrese el peso de las personas (lb)'));
}

pesoPersonas = pesoPersonas*0.453592;

if(capacidadElevador >= pesoPersonas){
    console.log('No excede la capacidad maxima!!!!');
} else{
    console.log('Excede la capacidad maxima');
}