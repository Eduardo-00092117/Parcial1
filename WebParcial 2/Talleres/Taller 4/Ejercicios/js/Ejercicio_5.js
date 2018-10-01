var estadoCivil = prompt('Ingrese su estado civil actual (s, c, v, a, d)');

switch (estadoCivil) {
    case 's':
        console.log('Usted está soltero(a)');
        break;
    case 'c':
        console.log('Usted está casado(a)');
        break;
    case 'v':
        console.log('Usted está viudo(a)');
        break;
    case 'a':
        console.log('Usted está acompañado(a)');
        break;
    case 'd':
        console.log('Usted está divorciado(a)');
        break;
}