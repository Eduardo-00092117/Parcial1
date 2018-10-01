function elevador(peso1,peso2,peso3,peso4,peso5){
    capacidad = 500;
    resultado= (peso1+peso2+peso3+peso4+peso5)*0.453592;
    if(resultado>capacidad){
        console.log('Este elevador no va aguantar we');
    }
    else{
        console.log('vamolo pui');
    }
}