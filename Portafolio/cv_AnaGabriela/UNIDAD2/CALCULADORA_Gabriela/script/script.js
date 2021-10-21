var operandoa;
var operandoab;
var operacion;

function init(){
    var resultado=document.getElementById("resultado");
    var reset=document.getElementById("reset");
    var suma=document.getElementById("suma");
    var resta=document.getElementById("resta");
    var multiplicacion=document.getElementById("multiplicacion");
    var division=document.getElementById("division");
    var igual=document.getElementById("igual");
    var uno=document.getElementById("uno");
    var dos=document.getElementById("dos");
    var tres=document.getElementById("tres");
    var cuatro=document.getElementById("cuatro");
    var cinco=document.getElementById("cinco");
    var seis=document.getElementById("seis");
    var siete=document.getElementById("siete");
    var ocho=document.getElementById("ocho");
    var nueve=document.getElementById("nueve");
    var cero=document.getElementById("cero");

    //Eventos
    uno.onclick= function(e){
        resultado.textContent = resultado.textContent+"1"
    }
    dos.onclick= function(e){
        resultado.textContent = resultado.textContent+"2"
    }
    tres.onclick= function(e){
        resultado.textContent = resultado.textContent+"3"
    }
    cuatro.onclick= function(e){
        resultado.textContent = resultado.textContent+"4"
    }
    cinco.onclick= function(e){
        resultado.textContent = resultado.textContent+"5"
    }
    seis.onclick= function(e){
        resultado.textContent = resultado.textContent+"6"
    }
    siete.onclick= function(e){
        resultado.textContent = resultado.textContent+"7"
    }
    ocho.onclick= function(e){
        resultado.textContent = resultado.textContent+"8"
    }
    nueve.onclick= function(e){
        resultado.textContent = resultado.textContent+"9"
    }
    cero.onclick= function(e){
        resultado.textContent = resultado.textContent+"0"
    }

    reset.onclick= function(e){
        resetear();
    }

    suma.onclick= function(e){
        operandoa=resultado.textContent;
        operacion="+";
        limpiar();
    }
    resta.onclick= function(e){
        operandoa=resultado.textContent;
        operacion="-";
        limpiar();
    }
    multiplicacion.onclick= function(e){
        operandoa=resultado.textContent;
        operacion="*";
        limpiar();
    }
    division.onclick= function(e){
        operandoa=resultado.textContent;
        operacion="/";
        limpiar();
    }
    igual.onclick= function(e){
        operandoab=resultado.textContent;
        resolver();
    }
}

function limpiar(){
    resultado.textContent="";
}

function resetear(){
    resultado.textContent="";
    operandoa=0;
    operandoab=0;
    operacion="";
}

function resolver(){
    var res=0;
    switch(operacion){
        case "+":
            res = parseFloat(operandoa)+ parseFloat(operandoab);
            break;
        case "-":
            res = parseFloat(operandoa)- parseFloat(operandoab);
            break;
        case "*":
            res = parseFloat(operandoa)* parseFloat(operandoab);
            break;
        case "/":
            res = parseFloat(operandoa)/ parseFloat(operandoab);
            break;
    }
    resetear();
    resultado.textContent=res;
}
// Accedemos al botón
var control = document.querySelectorAll('button');

// evento para el input radio del "si"
document.getElementById('on').addEventListener('click', function(e) {
  control[0].disabled = false;
  control[1].disabled = false;
  control[2].disabled = false;
  control[3].disabled = false;
  control[4].disabled = false;
  control[5].disabled = false;
  control[6].disabled = false;
  control[7].disabled = false;
  control[8].disabled = false;
  control[9].disabled = false;
  control[10].disabled = false;
  control[11].disabled = false;
  control[12].disabled = false;
  control[13].disabled = false;
  control[14].disabled = false;
  control[15].disabled = false;
});

// evento para el input radio del "no"
document.getElementById('off').addEventListener('click', function(e) {
  control[0].disabled = true;
  control[1].disabled = true;
  control[2].disabled = true;
  control[3].disabled = true;
  control[4].disabled = true;
  control[5].disabled = true;
  control[6].disabled = true;
  control[7].disabled = true;
  control[8].disabled = true;
  control[9].disabled = true;
  control[10].disabled = true;
  control[11].disabled = true;
  control[12].disabled = true;
  control[13].disabled = true;
  control[14].disabled = true;
  control[15].disabled = true;
});