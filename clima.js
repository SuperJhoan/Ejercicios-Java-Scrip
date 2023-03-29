/*function clima (estaLloviendo){
    if(estaLloviendo){
        console.log("Si esta lloviendo")
    }
    else{
        console.log("No esta lloviendo")
    }
}
clima(false)

function calcular (num1,num2,num3){
    let sumar = num1 + num2;
    let resultado = sumar + num3;
    return resultado
}
console.log(calcular(2,3,4))

    let base = parseInt(prompt("Ingrese base"));
    let altura = parseInt(prompt("Ingrese altura"));
    let area 
    area = (base*altura)/2;
    document.write("El resultado del area del triangulo es: "+ area)*/

    function promedio (){
        let nota1 = parseInt(prompt("Ingrese su nota"));
        let nota2 = parseInt(prompt("Ingrese su nota"));
        let nota3 = parseInt(prompt("Ingrese su nota"));
        promedio = (nota1 + nota2 + nota3)/3
        if(promedio<3){
            console.log("No aprobó")
        }
        else{
            console.log("Si aprobó")
        }
        document.write("El promedio del estudiante es de: "+ promedio)
    }
    console.log(promedio())
    /* crea un funcion llamada calculadora
que reciba 3 parametros, un string llamado opeacion y 2 numeros llamados (num1 y num2)
el string nos debe indicar qeu tipo de operacion se llevara acabo entre num1 y num2
hacer suma, resta, divicion, multiplicacion, exponente*/


function calculadora(){
    let num1 =parseInt(prompt("ingrese el primer numero"))
    let num2 =parseInt(prompt("ingrese el segundo numero"))
    let operacion = prompt("ingrese el tipo de operacion que desea realizar (suma,resta,multiplicacion,division,exponente)")
 switch(operacion){
    case "suma":
        resultado = num1 + num2
        document.write("la suma de los numeros es: " +resultado)
    case "resta":
        resultado = num1 - num2
        document.write("la resta de los numeros es: " +resultado)
    case "multiplicacion":
        resultado = num1 * num2
        document.write("la multiplicacion de los numeros es: " +resultado)
    case "division":
        resultado = num1 / num2
        document.write("la division de los numeros es: " +resultado)
    case "exponente":
        resultado = num1 ** num2
        document.write("El exponente de los numeros es: " +resultado)
    
}            
}
console.log(calculadora())
