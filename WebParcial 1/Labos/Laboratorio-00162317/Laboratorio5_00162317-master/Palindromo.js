function Pal(p){
    c= p.split("");
    var cont=0;
    cont2=c.length-1;
    var v= true;
    while(cont!=c.length-1 && v==true){
        if(c[cont] == c[cont2]){
            cont++;
            cont2--;
        }
        else{
            v=false;
        }
    }
    return v;
}

var x=Pal(p=prompt('Ingrese una palabra: '));

if(x==true){
    console.log("Palindromo")
}
else if(x==false){
    console.log("No palindromo")
}