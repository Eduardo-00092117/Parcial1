/*var todolist = [];

function remember (task){
    todolist.push(task);
}

function rememberUrgent(task){
    todolist.unshift(task);
}

function getTask(){
    console.log(todolist.shift);
}

["a", "b"].unshift("c");

["c", "a", "b"].shift();

["a", "b"];*/

/*
for(let e of array){
    console.log();
}

for(let i = 0; i < array.lenght; i++){
    console.log(array[i]);
}*/

/*
let dia2 = [
    {
        actividades: ['Hacer ejercicio', 'Levantarse'],
        accident: false
    },
    {
        actividades: ['Hacer ejercicio', 'Levantarse'],
        accident: false
    },
    {
        actividades: ['Hacer ejercicio', 'Levantarse'],
        accident: false
    }
];

function getActividades(dia2){
    var arreglo = [];

    for(let e of dia2){
        for(let x of e.actividades){
            if(!arreglo.includes(x)){
                arreglo.push(x);
            }
        }
    }

    return arreglo;
}

console.log(getActividades(dia2).join(" - "));
*/

/*
[1, 2, 3].indexOf(1);

[1, 2, 3].lastOf(1);

[1, 2, 3, 4].slice(2, 3);

[1, 2, 3].concat([4, 5, 6]);*/

/*
function eliminarDato(array, n){
    return array.slice(0, n).concat(array.slice(n+1));
}

console.log(eliminarDato([1, 2, 3, 4, 5], 2).join(" - ")); */


console.log("209317".padStart(8, "0"));

function max(...Number){
    let max = Infinity;
    for(let number of Number){
        if(number > max){
            max = number;
        }
    }
    return max;
}

console.log(Math.max(1, 12));


/*
let a = [1, 2, 3, 4];

let b = [5, 6, 7, ...a, 8];

console.log(b);
*/


/*
function phi([n00, n01, n10, n11]){
    return n00*n11;
}

console.log(phi([1, 2, 3, 4]));
*/