var capacidad = parseInt(prompt('Ingrese la capacidad del tanque'));

var capacidadActual = parseInt(prompt('Ingrese la cantidad de agua actual'));

if(capacidadActual == capacidad){
    console.log('El tanque esta lleno');
} else if(capacidadActual > capacidad){
    console.log('El tanque se ha rebalsado');
} else if(capacidadActual < capacidad){
    let restante = capacidad - capacidadActual;
    console.log(restante);
}