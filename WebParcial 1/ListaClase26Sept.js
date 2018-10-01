var lista = [];
function remember(palabra){
    lista.push(palabra);
}
function rememberUrgent(palabra){
    lista.unshift(palabra);/*Add new items to the beginning of an array*/
}
function getPalabra(){
    console.log(lista.shift());/*elimina el primer elemento del array y devuelve dicho elemento. 
    Este método modifica la longitud del array.*/
}
for(let e of lista){
    console.log(e);
}
/*Equivalente a: */
for(let i=0;i<array.length;i++){
    console.log(array[i]);
}
/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
var journal = [
    {events:["A","B","C"],accidente:true} ,
    {events:["C","D"],accidente:false}
];
function getEvents(journal){
    var events=[];
    for(let day of journal){
        for(let event of day.events){
            if(!events.includes(event)){
                events.push(event);
            }
        }
    }
    return events;
}
/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
[1,2,1].indexOf(1);/*  retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente.*/
[1,2,1].lastOf(1);
[1,2,1].slice(1,2);/**TE hace un nuevo arreglo a partir de la tal posicion y retorna la cantidad de datos que le pongo */
[1,2,1].slice(2);
[1,2,1].concat([2,4,2]);/*Une otro arraylist*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
function eliminar(array,index){
    var n =(array.slice(0,index)).concat(array.slice(index+1));
    return n;
}
"209317".padStart(8,"0");/*Agrega los ceros obligatorios*/

funcion maximo(... numbers){/*Sirve*/
    let max= -Infinity;
    for(let number of numbers){
        if(number>max){
            max=number;
        }
        return max;
    }

}
