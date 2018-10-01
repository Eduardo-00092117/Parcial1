function circulo(radio){
    if(radio<1){
        return -1;
    }
    else{
        return  (radio**2)*3.14;
    }
}
alert(circulo(x=prompt('Ingrese el radio: ')))