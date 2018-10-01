function mosaico(numero){
    if((numero%2)==0){
        console.log('Te dijimos que imoar, prro')
    }
    else{
        contador=' ';
        for(let i=0; i < numero ; i++){
            contador = contador + '+'
            console.log(contador);
        }
    }
}