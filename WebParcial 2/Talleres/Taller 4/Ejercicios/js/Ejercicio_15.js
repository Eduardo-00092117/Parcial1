var fibonacci  = function (n){
    var arreglo = [];
    for(let x=1; x <= n; x++){
        if(x == 1){
            arreglo.push(0);
        } else if(x == 2){
            arreglo.push(1);
        } else{
            arreglo.push(arreglo[x-2] + arreglo[x-3]);
        }
    }
    return arreglo;
}

console.log('Serie: ' + fibonacci(prompt('Indique la posicion en la serie de fibonacci')).join("-"));