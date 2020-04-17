var operandoa = 0;
var operandob = 0;
var operacion = 0;
 
function init(){
    var resultado = document.getElementById("resultado");
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");
    var oper = document.getElementById("oper");

    operandoa = Math.floor(Math.random()*7+10);
    operandob = Math.floor(Math.random()*4+1);
    operacion = oper.innerHTML;

    num1.innerHTML= operandoa;
    num2.innerHTML= operandob;
    console.log (operacion);

    equal.onclick = function (e){
    resolver ();

    }

    function aleatorios (){
    var x = Math.floor(Math.random()*10+1);
    resultado.textContent = x;
    }

    function limpiar (){
    resultado.textContent = " ";
    }

    function resolver (){
        var res = 0;
        switch (operacion){
            case "+":
                 res = Number (operandoa) + Number (operandob);
            break;
            case "-":
                 res = Number (operandoa) - Number (operandob);
            break;
            case "*":
                 res = Number (operandoa) * Number (operandob);
            break;
            case "*":
                 res = Number (operandoa) / Number (operandob);
            break;
        }
        var z= Number( prompt("Digite el resultado de la operacion:"));
        resultado.textContent = res;
        if (z==res){
            alert("¡¡Acertaste felicidades!!");

            operandoa = Math.floor(Math.random()*7+10);
            operandob = Math.floor(Math.random()*4+1);
            num1.innerHTML= operandoa;
            num2.innerHTML= operandob;
            //resultado.textContent = "";

        }
        else{
            alert("Incorrecto - El número correcto es: ");

            operandoa = Math.floor(Math.random()*7+10);
            operandob = Math.floor(Math.random()*4+1);
            num1.innerHTML= operandoa;
            num2.innerHTML= operandob;
            //resultado.textContent = "";

        }   
    }
 
}