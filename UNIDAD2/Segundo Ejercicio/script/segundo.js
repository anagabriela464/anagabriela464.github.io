let array = [600, 470, 170, 430, 300];
var suma = 0;
var val1 = 600;
var val2 = 318;
var val3 = 170;
var val4 = 358;
var val5 = 300;

for(let i of array){
    suma += i;
}

let resta1 = 394 - val1;
let resta2 = 394 - val2;
let resta3 = 394 - val3;
let resta4 = 394 - val4;
let resta5 = 394 - val5;

let cuadrado = (Math.pow(resta1,2)) + (Math.pow(resta2,2)) + (Math.pow(resta3,2)) + (Math.pow(resta4,2)) + (Math.pow(resta5,2));

let division = cuadrado / 5;

let raiz = parseInt(Math.sqrt(division)) + " " + "mm";

console.log(raiz);


