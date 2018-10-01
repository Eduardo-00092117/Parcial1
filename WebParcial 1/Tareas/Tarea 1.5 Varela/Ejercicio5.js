function estadoCivil(letra){
    switch (letra){
        case 's':
            console.log('Usted esta soltera/o')
            break;
        case 'c':
            console.log('Usted esta casado')
            break;
        case 'v':
            console.log('Usted esta viudo')
            break;
        case 'a':
            console.log('Usted esta acompañado')
            break;
        case 'd':
            console.log('Usted esta divorciado')
            break;
    }
}
alert(estadoCivil(x=prompt('Ingrese una letra')))