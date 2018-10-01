var peli1 = parseFloat(prompt('Ingrese el precio de la pelicula 1'));
var peli2 = parseFloat(prompt('Ingrese el precio de la pelicula 2'));
var peli3 = parseFloat(prompt('Ingrese el precio de la pelicula 3'));

var total;

if(peli1 >= peli2 && peli1 >= peli3){
    total = peli2+peli3;
} else if(peli2 >= peli1 && peli2 >= peli3){
    total = peli1+peli3;
} else if(peli3 >= peli2 && peli3 >= peli1){
    total = peli2+peli1;
}

console.log('La promocion queda en ' + total);