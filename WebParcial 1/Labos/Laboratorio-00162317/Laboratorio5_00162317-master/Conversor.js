function conver(n){
    var m=n;
    a=[];
    while(m!=1){
        a.push(m%2);
        m=Math.floor(m/2);
    }
    a.push(m);
    a=a.reverse();
    a=a.join("");
    return a;
}

/*console.log(conver(n=prompt('Ingrese un numero: ')));*/
alert(conver(n=prompt('Ingrese un numero: ')));