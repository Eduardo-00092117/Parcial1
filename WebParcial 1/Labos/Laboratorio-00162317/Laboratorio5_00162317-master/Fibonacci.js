function fibonacci(numero)
{
    var aux1=1;
    var aux2=0;
    var aux=0;
    a=[];
    if(n==0){
        a.push(aux2);
        alert(a);
    }
    else if(n==1){
        a.push(aux2);
        a.push(aux1);
        alert(a);
    }
    else{
        a.push(aux2);
        for(let i = 0; i<numero;i++){
            aux=aux2+aux1;
            aux1=aux2;
            aux2=aux;
            a.push(aux);
        }
        alert('La serie es: '+a);
    }
}