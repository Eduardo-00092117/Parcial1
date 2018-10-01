/*
-Hay una capacidad total en galones de una cisterna
-Cuanta agua contiene actualmente la cisterna 
-Mostrar cuanta agua para terminar de llenarla
*/
function cisterna(num1, num2){
    if(num2>num1){
        console.log('El agua ingresada es mayor a la capacidad de la cisterna')
    }
    return console.log('El agua faltante es: '), num1-num2 
}
