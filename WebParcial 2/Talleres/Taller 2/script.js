/*
var b = prompt('Ingrese una palabra');
var c = b.length-1;
var bandera = true;

for(var a = 0; a < b.length; a++){
    if(b[c] != b[a]){
        bandera = false;
        break;
    }
    --c;
}

if(bandera == false){
    console.log("No es palindromo");
} else{
    console.log("Es palindromo");
}*/

/*
var a = prompt("Ingrese una palabra");
var palabra = "";

for(var i = 0; i < a.length; i++){
    if(i % 2 == 0 & i != 0){
        palabra += "2"; 
    }
    palabra += a[i];
}

console.log(palabra);
*/

/*
var arrayNumbers = [10, 8, 9, 5, 3, 78, 23]

Array.prototype.sortNumbers = function(){
    return this.sort(
        function(a,b){
            return a - b
        }
    );
}

console.log(arrayNumbers.sortNumbers())
*/

