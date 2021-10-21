
function calcular()
{
    let altura = document.getElementById("altura").value;
    let peso = document.getElementById("peso").value;
    let imc=0;
    var bajopeso = "Peso Bajo";
    var penormal = "Normal";
    var sobrepeso = "Sobrepeso";
    var obesidad = "Obesidad";

    if(peso!="" && altura!=""){
        imc = (peso / Math.pow(altura,2));

        if(imc<18.5)
        { 
            document.getElementById("imc").innerHTML = ""+imc;
            document.getElementById("tipo").innerHTML = ""+ bajopeso;
            document.getElementById("tipo").setAttribute("class",("bajopeso"));
            document.getElementById("imagenes").innerHTML='<img src="img/pesobajo.png"/>';
            if(imc<16.00)
            {
                document.getElementById("tipo2").innerHTML = ""+ "Tiene una delgadez severa";
                document.getElementById("tipo").setAttribute("class",("tipo2"));
                document.getElementById("tipo").setAttribute("class",("bajopeso"));
            }else
                if(imc => 16.00 && imc <= 16.99)
                {
                    document.getElementById("tipo2").innerHTML = ""+ "Tiene una delgadez moderada";
                    document.getElementById("tipo").setAttribute("class",("tipo2"));
                    document.getElementById("tipo").setAttribute("class",("bajopeso"));
                }else
                    if(imc>=17.00 && imc<=18.49)
                    {
                        document.getElementById("tipo2").innerHTML = ""+ "Su delgadez es aceptable";
                        document.getElementById("tipo").setAttribute("class",("tipo2"));
                        document.getElementById("tipo").setAttribute("class",("bajopeso"));
                    }
        }
        else 
            if(imc>=18.5 && imc<=24.9)
            { 
                document.getElementById("imc").innerHTML = ""+imc;
                document.getElementById("tipo").innerHTML = ""+penormal;
                document.getElementById("tipo").setAttribute("class",("penormal"));
                document.getElementById("imagenes").innerHTML='<img src="img/pesoNormal.png"/>';
            }
        else 
            if(imc>=25 && imc<=29.9)
            { 
                document.getElementById("imc").innerHTML = ""+imc;
                document.getElementById("tipo").innerHTML = ""+sobrepeso;
                document.getElementById("tipo").setAttribute("class",("sobrepeso")); 
                document.getElementById("imagenes").innerHTML='<img src="img/sobrepeso.png" />';
                document.getElementById("tipo2").innerHTML = ""+ "Riesgo de Obesidad";
                document.getElementById("tipo").setAttribute("class",("tipo2"));
            }
        else 
            if(imc>30)
            { 
                document.getElementById("imc").innerHTML = ""+imc;
                document.getElementById("tipo").innerHTML = ""+obesidad;
                document.getElementById("tipo").setAttribute("class",("obesidad")); 
                document.getElementById("imagenes").innerHTML='<img src="img/obesidad.png" />';
                
                if(imc>=30.00 && imc <= 34.99)
            {
                document.getElementById("tipo2").innerHTML = ""+ "Obesidad tipo 1";
                document.getElementById("tipo").setAttribute("class",("tipo2"));
                document.getElementById("tipo").setAttribute("class",("obesidad"));
            }else
                if(imc>=35.00 && imc <= 39.99)
                {
                    document.getElementById("tipo2").innerHTML = ""+ "Obesidad tipo 2";
                    document.getElementById("tipo").setAttribute("class",("tipo2"));
                    document.getElementById("tipo").setAttribute("class",("obesidad"));
                }else
                    if(imc>=40)
                    {
                        document.getElementById("tipo2").innerHTML = ""+ "Obesidad tipo 3";
                        document.getElementById("tipo").setAttribute("class",("tipo2"));
                        document.getElementById("tipo").setAttribute("class",("obesidad"));
                    }
            }

    }else{
        alert("Porfavor, rellene todos los campos.")
    }

}


function limpiar()
{
    document.getElementById("altura").value = "";
    document.getElementById("peso").value = "";
    document.getElementById("imc").innerHTML = "";
    document.getElementById("tipo").innerHTML = "";
    document.getElementById("imagenes").innerHTML="";
    document.getElementById("tipo2").innerHTML = "";
}