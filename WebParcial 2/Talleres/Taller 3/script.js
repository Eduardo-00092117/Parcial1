/*
function triangulo(n) {
    var prueba = "";
    if(n == null){
        n = 5
    }

    for(var x = 0; x < n; x++){
        prueba += "*"
        console.log(prueba)
    }   
}

triangulo()
*/

function rombo(n) {
    var prueba = "";
    if(n == null){
        n = 5
    }

    for(var x = 0; x < n; x++){
        prueba = "*".repeat(x)
        console.log(prueba)
    }   

    for(var x = n; x > 0; x--){
        prueba = "*".repeat(x);
        console.log(prueba)
    }   
}

rombo(5)
