function suma() {  
    let main=document.getElementsByTagName("main")[0];

    let aviso=document.createElement("p");
    aviso.textContent="Selección: Suma";

    main.appendChild(aviso);

    let cajaUno = document.createElement("input");
    cajaUno.id="Valor1";
    cajaUno.placeholder="Teclea el numero";

    let cajaDos = document.createElement("input");
    cajaDos.id="Valor2";
    cajaDos.placeholder="Teclea el numero";
    
    main.appendChild(cajaUno);
    main.appendChild(cajaDos);

    let botonResultado = document.createElement("button");
    botonResultado.textContent="RESULTADO"
    main.appendChild(botonResultado);

    botonResultado.onclick=function(){
        let x,y,suma,text;  
        x = document.getElementById("Valor1").value;  
        y = document.getElementById("Valor2").value;  
        if (isNaN(x) || isNaN(y)) {  
            text = "Es necesarios introducir dos números válidos";  
        }else{  
            //si no ponemos parseFloat concatenaría x con y  
            suma=parseFloat(x)+parseFloat(y);  
            text=suma;  
        }  

        document.getElementById("sumando").innerHTML = text; 
    };  
    limpiar();
} 



function resta() {  
    let main=document.getElementsByTagName("main")[0];

    let aviso=document.createElement("p");
    aviso.textContent="Selección: Resta";

    let cajaUno = document.createElement("input");
    cajaUno.id="Valor1";
    cajaUno.placeholder="Teclea el numero";

    let cajaDos = document.createElement("input");
    cajaDos.id="Valor2";
    cajaDos.placeholder="Teclea el numero";
    
    main.appendChild(cajaUno);
    main.appendChild(cajaDos);

    let botonResultado = document.createElement("button");
    botonResultado.textContent="RESULTADO"
    main.appendChild(botonResultado);

    botonResultado.onclick=function(){
        let x,y,suma,text;  
        x = document.getElementById("Valor1").value;  
        y = document.getElementById("Valor2").value;  
        if (isNaN(x) || isNaN(y)) {  
            text = "Introducir dos números válidos";  
        }else{  
            //si no ponemos parseFloat concatenaría x con y  
            suma=parseFloat(x)-parseFloat(y);  
            text=suma;  
        }  

        document.getElementById("sumando").innerHTML = text; 
        limpiar();
    };  
    
} 



function multiplicacion() {  
    let main=document.getElementsByTagName("main")[0];

    let aviso=document.createElement("p");
    aviso.textContent="Selección: Multiplicación";

    let cajaUno = document.createElement("input");
    cajaUno.id="valor1";
    cajaUno.placeholder="Teclea el numero";

    let cajaDos = document.createElement("input");
    cajaDos.id="valor2";
    cajaDos.placeholder="Teclea el numero";
    
    main.appendChild(cajaUno);
    main.appendChild(cajaDos);

    let botonResultado = document.createElement("button");
    botonResultado.textContent="RESULTADO"
    main.appendChild(botonResultado);

    botonResultado.onclick=function(){
        let x,y,suma;
        let text;  
        let cero=0;
        x = document.getElementById("valor1").value;  
        y = document.getElementById("valor2").value;  
        if (x==cero || y==cero) {  
            text = "Intente de nuevo";  
        }else{  
            suma=parseFloat(x)*parseFloat(y);  
            text=suma;  
        }  

        document.getElementById("sumando").innerHTML = text; 
    };  
}



function division() {  
    let main=document.getElementsByTagName("main")[0];

    let aviso=document.createElement("p");
    aviso.textContent="Selección: División";

    let cajaUno = document.createElement("input");
    cajaUno.id="Valor1";
    cajaUno.placeholder="Teclea el numero";

    let cajaDos = document.createElement("input");
    cajaDos.id="Valor2";
    cajaDos.placeholder="Teclea el numero";
    
    main.appendChild(cajaUno);
    main.appendChild(cajaDos);

    let botonResultado = document.createElement("button");
    botonResultado.textContent="RESULTADO"
    main.appendChild(botonResultado);

    botonResultado.onclick=function(){
        let x,y,suma,text;  
        x = document.getElementById("Valor1").value;  
        y = document.getElementById("Valor2").value;  
        if (isNaN(x) || isNaN(y)) {  
            text = "Introducir dos valores válidos";  
        }else{  
            //si no ponemos parseFloat concatenaría x con y  
            suma=parseFloat(x)/parseFloat(y);  
            text=suma;  
        }  

        document.getElementById("sumando").innerHTML = text; 
    };  
}



function promedio() {  
    let main=document.getElementsByTagName("main")[0];

    let aviso=document.createElement("p");
    aviso.textContent="Selección: Promedio";

    let caja = document.createElement("input");
    caja.id="num";
    caja.placeholder="Calificaciones a evaluar";
    main.appendChild(caja);

    let botonCalcular = document.createElement("button");
    botonCalcular.textContent="CALCULAR"
    main.appendChild(botonCalcular);

    botonCalcular.onclick=function(){
        let suma=0;
        let a=0;
        let arreglo=document.getElementById("num").value;

        while(a<arreglo){
            let calificaciones=parseFloat(prompt("Inserta la calificación: "));
            suma=suma+calificaciones;
            a++;
        }

        let promedio = suma / arreglo;
        document.getElementById("sumando").innerHTML = promedio;
    }; 
}
function potencia(n, p) {
    return Math.pow(n, p);
}
let entrar = 1;
let opcion, n, p, n1, n2;

function desV(n) {
    let main=document.getElementsByTagName("main")[0];

    let aviso=document.createElement("p");
    aviso.textContent="Selección: Desviacion";
 
    let suma = 0, promedio = 0, varianza = 0, cuadrados = 0, num;
    
    n = prompt('Ingrese la cantidad de la muestra para calcular la desviación estándar: ');
    while (n<=1){
            if (isNumber(n)) {
                alert('La desviación estándar de la muestra con tamaño ' + n + ' es de = ' + desV(parseInt(n)));
            } else {
                alert('Ha ingresado un valor incorrecto!');
            }
        }
        
    for (let i = 1; i <= n; i++) {
        num = parseFloat(prompt('Ingrese el número: '))
        suma += num;
        cuadrados += potencia(num, 2);
    }
    promedio = suma / n;
    varianza = (cuadrados / (n - 1)) - ((n * potencia(promedio, 2)) / (n - 1));
    document.getElementById("sumando").innerHTML = varianza;
}

function limpiar(){
    resultado.textContent="";
}
