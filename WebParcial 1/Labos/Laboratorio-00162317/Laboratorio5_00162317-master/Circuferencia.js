function circu(radio){
    if(radio<0){
        return -1
    }
    else{
       var respuesta = 3.14*(radio**2) 
        return respuesta
    }
}
alert(circu(x=prompt('Ingrese el radio: ')));