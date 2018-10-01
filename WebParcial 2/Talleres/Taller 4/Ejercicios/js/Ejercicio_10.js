var valorFactura = (n) => {
    let total;
    if(n > 0 && n <= 50){
        total = n*0.50;
    } else if(n > 50 && n <= 100){
        total = n*0.75;
    } else if(n > 100 && n <= 150){
        total = n*1.25;
    } else if(n > 150){
        total = n*1.50;
    }
    return total*1.20;
}

var valor = prompt('Ingrese las unidades consumidas');

if(valor < 0){
    console.log('No se puede ingresar valores negativos');
} else {
    console.log('El valor de la factura es ' + valorFactura(valor).toFixed(2));
}