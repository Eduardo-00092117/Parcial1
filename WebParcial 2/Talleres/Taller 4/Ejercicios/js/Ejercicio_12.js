function rombo(n){
    for(var x = 0; x < n; x++){
        console.log(' '.repeat(n-x) + '_'.repeat(x*2) + ' '.repeat(n-x));
    }
    for(x = n-1; x >= 0; x--){
        console.log(' '.repeat(n-x) + '_'.repeat(x*2) + ' '.repeat(n-x));
    }
}

rombo(prompt('Ingrese el tamaño del rombo'));