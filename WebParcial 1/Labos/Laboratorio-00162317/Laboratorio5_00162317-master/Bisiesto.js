function bisiesto(n){
    if((n%4==0) && (!(n%100==0) || (n%400==0))){
        console.log("ES BISIESTO")
    }
    else{
        console.log("NO ES BISIESTO")
    }
}