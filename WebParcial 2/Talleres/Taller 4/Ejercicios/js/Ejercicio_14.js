var monto = parseFloat(prompt("Ingrese el monto a depositar"));
var interes = parseFloat(prompt("Ingrese la taza de intereses"));
var annio = parseFloat(prompt("Ingrese los años a plazos"));

if(annio >= 50){
    console.log('Su cuenta fue cerrada');
} else if (annio < 50 && annio > 0){
    let total = monto;
    for(let x = 1; x <= annio; x++){
        if(x <= 25){
            total =+ total*(interes/100 + 1);
            console.log('Año ' + x + ': ' + total.toFixed(2));
        } else {
            console.log('Del año 26 hasta el año ' + annio + ': ' + total.toFixed(2));
            break;
        }
    }
}