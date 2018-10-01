function consumoEnergia(unidades){
    respuesta=0;
    if(unidades<50){
        respuesta = (unidades * 0.50)*0.2;
    }
    else if ((unidades>50) || (unidades<100)){
        respuesta=(unidades*0.75)*0.2;
    }
    else if ((unidades>100) || (unidades<150)){
        respuesta = (unidades*1.25)*0.2;
    }
    else if(unidades>150){
        respuesta = (unidades*1.50)*0.2;
    }
    return respuesta;
}