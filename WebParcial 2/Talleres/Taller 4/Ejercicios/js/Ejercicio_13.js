var serie = function (n) {
    var arreglo = [];
    while(n > 1){
        arreglo.push(n);
        if(n%2 == 0){
            n = n/2;
        } else{
            n = (n*3) + 1;
        }
    }
    arreglo.push(1);
    return arreglo;
}

console.log('Conjetura de Collatz: ' + serie(prompt('Ingrese un numero para la conjetura')).join(" - "));