----------------------------------------------------------Ejercicio1
--Manera 1
CREATE OR REPLACE FUNCTION convertidor(numero in int)
RETURN float
IS
    resultado float;
BEGIN
    resultado:=numero*1.16;
    DBMS_OUTPUT.PUT_LINE('Resultado: '||resultado);
    return resultado;--Siempre debe retonar algo
END;
--Manera 2
CREATE OR REPLACE FUNCTION convertidorDos(numero in int)
RETURN FLOAT
IS
BEGIN
    DBMS_OUTPUT.PUT_LINE('Resultado:  ' || numero*1.16);
    return numero*1.16;--Siempre debe retornar algo
END;
--Llamando manera 1
SELECT convertidorDos(1) FROM dual;
----------------------------------------------------------Ejercicio2
CREATE OR REPLACE FUNCTION temperatura(numero in int)
RETURN FLOAT
IS
    resultado FLOAT;
BEGIN
    resultado:= ((1.8)*numero) + 32;
    return resultado;
END;
--Llamando manera 2
DECLARE
    numero INT := 2;
    resultado FLOAT := temperatura(numero);
BEGIN
    DBMS_OUTPUT.PUT_LINE('Conversion: ' || resultado);
END;
----------------------------------------------------------Ejercicio3
--Manera 1
CREATE OR REPLACE FUNCTION cisterna(numero in int, numeroDos in int)
RETURN INT
IS
    resultado INT;
BEGIN
    IF(numeroDos<numero) THEN
        DBMS_OUTPUT.PUT_LINE('El agua ingresada es mayor que el tamaño de la cisterna');
    END IF;
    resultado := numeroDos - numero;
    return resultado;
END;
--Llamando
SELECT cisterna(5,6) FROM dual;
--Manera 2
DECLARE
    agua INT := 9;
    cisternas INT:=5;
    resultado INT;
    numeroDosMayor EXCEPTION;
BEGIN
    IF(cisternas<agua) THEN
        RAISE numeroDosMayor;
    END IF;
    resultado := cisternas - agua;
    DBMS_OUTPUT.PUT_LINE(resultado);
EXCEPTION
    WHEN numeroDosMayor THEN
        DBMS_OUTPUT.PUT_LINE('ERROR. El agua ingresada es mayor que el tamaño de la cisterna');
END;
----------------------------------------------------------Ejercicio4
CREATE OR REPLACE FUNCTION elevador(peso1 IN INT, peso2 IN INT, peso3 IN INT, peso4 IN INT, peso5 IN INT)
RETURN FLOAT
IS
    capacidad INT;
    resultado FLOAT;
BEGIN
    capacidad:=500;
    resultado:=(peso1+peso2+peso3+peso4+peso5)*0.453592;
    IF(resultado>capacidad) THEN
        DBMS_OUTPUT.PUT_LINE('Este elevador no va aguantar we');
    END IF;
    DBMS_OUTPUT.PUT_LINE('Vamonos');
    return resultado;
END;
--Llamando
SELECT elevador(160,100,150,120,110) FROM DUAL;
----------------------------------------------------------Ejercicio5
CREATE OR REPLACE FUNCTION estadoCivil( letra in char)
RETURN VARCHAR2
IS
    resultado varchar2(80);
BEGIN
    IF(letra='s') THEN
        resultado:='Usted esta soltero';
    ELSIF(letra='c') THEN
        resultado:='Usted esta casado';
    ELSIF(letra='v') THEN
        resultado:='Usted esta viudo';
    ELSIF(letra='a') THEN
        resultado:='Usted esta acompañado';
    ELSIF(letra='d') THEN
        resultado:='Usted esta divorciado';
    ELSE
        resultado:='Esa letra no existe para este programa';
    END IF;
    RETURN resultado;
END;
--Llamando
SELECT estadoCivil('d') FROM dual;
----------------------------------------------------------Ejercicio6
CREATE OR REPLACE FUNCTION circulo(radio IN INT)
RETURN FLOAT
IS
    resultado FLOAT;
BEGIN 
    resultado:= (3.14)*((radio)**2);
    return resultado;
END;
--Llamando
DECLARE
    radio INT := 2;
    resultado FLOAT := circulo(radio);
BEGIN
    DBMS_OUTPUT.PUT_LINE('El radio es: ' || resultado);
END;
----------------------------------------------------------Ejercicio7
DECLARE
    peli1 FLOAT;
    peli2 FLOAT;
    peli3 FLOAT;
    total FLOAT;
BEGIN
    peli1 := &peli1;
    peli2 := &peli2;
    peli3 := &peli3;
    
    IF peli1 >= peli2 and peli1 >= peli3 THEN
        total := peli2 + peli3;
    ELSIF peli2 >= peli3 and peli2 >= peli1 THEN
        total := peli1 + peli3;
    ELSIF peli3 >= peli2 and peli3 >= peli1 THEN
        total := peli2 + peli1;
    END IF;
    
    DBMS_OUTPUT.PUT_LINE('El total a pagar es $' || total);
END;

----------------------------------------------------------Ejercicio8
CREATE OR REPLACE FUNCTION cuadratica(valorA IN INT,valorB IN INT,valorC IN INT)
RETURN VARCHAR2
IS
    palabra VARCHAR2(80);
    discriminante FLOAT;
    x1 float;
    x2 float;
    discri_menor_que_0 EXCEPTION;
    discri_igual_que_0 EXCEPTION;
    discri_mayor_que_0 EXCEPTION;
BEGIN
    discriminante:=((valorB*valorB)-(4*(valorA*valorC)));
    IF(discriminante<0) THEN
        RAISE discri_menor_que_0;
    ELSIF(discriminante=0) THEN
        RAISE discri_igual_que_0;
    ELSIF(discriminante>0) THEN
        RAISE discri_mayor_que_0;
    END IF;
EXCEPTION
    WHEN discri_menor_que_0 THEN
        palabra:='La ecuacion no tiene soluciones reales';
    WHEN discri_igual_que_0 THEN
        palabra:='La ecuacion tiene una sola raiz real';
        x1:=(-valorB)/(2*valorA);
    WHEN discri_mayor_que_0 THEN
        palabra:='La ecuacion tiene dos raizes reales';
        x1:=(-valorB)+(sqrt(discriminante/(2*valorA)));
        x2:=(-valorB)-(sqrt(discriminante/(2*valorA)));
RETURN palabra;
END;
--Llamando
SELECT cuadratica(32,79,9) FROM dual;
----------------------------------------------------------Ejercicio9
CREATE OR REPLACE FUNCTION resistencia(re1 IN INT, re2 IN INT)
RETURN FLOAT
IS
    resultado FLOAT;
BEGIN
    resultado:=((re1*re2)/(re1+re2));
    return round(resultado,3);
END;
--Llamando
DECLARE
    resistenciaUno INT:=62;
    resitenciaDos INT:=3;
    resultado FLOAT:= resistencia(resistenciaUno,resitenciaDos);
BEGIN
    DBMS_OUTPUT.PUT_LINE('La resistencia total es: '||resultado);
END;
----------------------------------------------------------Ejercicio10
CREATE OR REPLACE FUNCTION energiaConsumida(unidades IN INT)
RETURN FLOAT
IS
    respuesta FLOAT;
BEGIN
    IF(unidades<50) THEN
        respuesta := (unidades*0.50);
    ELSIF((unidades>50) or (unidades < 100)) THEN
        respuesta:=(unidades*0.75)*0.2;
    ELSIF((unidades>100)or (unidades<150)) THEN
        respuesta:=(unidades*1.25);
    ELSIF((unidades>150)) THEN
        respuesta:=(unidades*1.25);
    END IF;
    RETURN respuesta*0.2;
END;    
--Llamando
SELECT energiaConsumida(40) FROM DUAL;
----------------------------------------------------------Ejercicio11
DECLARE
    numero INT;
    validacion EXCEPTION;
BEGIN
    numero := &numero;
    IF numero <= 9 THEN
        RAISE validacion;
    ELSE
        DBMS_OUTPUT.PUT_LINE('El primer digito es ' || substr(CAST(numero AS VARCHAR), 1,1) || ', y el ultimo es ' || substr(CAST(numero AS VARCHAR), length(CAST(numero AS VARCHAR))));
    END IF;
EXCEPTION
    WHEN validacion THEN DBMS_OUTPUT.PUT_LINE('Debe ser mayor a 9');
END;

----------------------------------------------------------Ejercicio2.0
DECLARE
    numero INT;
    validacion EXCEPTION;
    palabra VARCHAR2(100) := '__';
    cruz VARCHAR(100) := '';
    inicio VARCHAR(100);
BEGIN
    numero := &numero;
    IF MOD(numero, 2) = 0 or numero <= 1 THEN
        RAISE validacion;
    ELSE
        inicio := RPAD(' ',(numero*2)+1,'+');
        DBMS_OUTPUT.PUT_LINE(inicio);
        FOR x IN 1..numero-1 LOOP
            FOR y IN 1..numero-x LOOP
                cruz := cruz || '+';
            END LOOP;
            DBMS_OUTPUT.PUT_LINE(cruz || palabra || cruz);
            palabra := palabra || '__';
            cruz := '';
        END LOOP;
        FOR x IN REVERSE 1..numero-1 LOOP
            FOR y IN 1..numero-x LOOP
                cruz := cruz || '+';
            END LOOP;
            palabra := SUBSTR(palabra, 1, ((x)*2));
            DBMS_OUTPUT.PUT_LINE(cruz || palabra || cruz);
            cruz := '';
        END LOOP;
        DBMS_OUTPUT.PUT_LINE(SUBSTR(inicio, 2, (numero*2)+1));
    END IF;
EXCEPTION
    WHEN validacion THEN DBMS_OUTPUT.PUT_LINE('Debe ser un numero impar o mayor a 1');
END;
----------------------------------------------------------Ejercicio2.2
--Bloque anonimo
DECLARE
    numero INT:=6;
BEGIN
     WHILE (numero!=1) LOOP
        IF(MOD(numero,2)=0) THEN
            numero:= (numero/2);
        ELSE
            numero:=((3*numero)+1);
        END IF;
        IF(numero=1) THEN--Condicion de paro
           DBMS_OUTPUT.PUT_LINE(1);
        END IF;
    DBMS_OUTPUT.PUT_LINE(numero);
    END LOOP;
END;
----------------------------------------------------------Ejericio2.3
--Bloque anonimo
DECLARE
    capFinal float;
    inicial float:=3000;
    interes float:=10;
    periodo float:=5;
BEGIN
    FOR iterador IN 1..periodo LOOP
        capFinal:= inicial*((1+interes)**iterador);
        
        periodo:=periodo-1;
        DBMS_OUTPUT.PUT_LINE('Año '|| iterador||': '|| to_char(capFinal, 'fm9999999990.00'));
    END LOOP;
END;
----------------------------------------------------------Ejercicio2.4
DECLARE
    num1 INT:=0;
    num2 INT:=1;
    num3 INT;
    vars INT:=9;
BEGIN 
    DBMS_OUTPUT.PUT_LINE(num1);
    DBMS_OUTPUT.PUT_LINE(num2);
    FOR iterador IN 2..vars LOOP
        num3:=num1+num2;
        num1:=num2;
        num2:=num3;
        DBMS_OUTPUT.PUT_LINE(num3);
    END LOOP;
END;
