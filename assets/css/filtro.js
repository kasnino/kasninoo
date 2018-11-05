/*Escribe una función en JavaScript llamada filter que reciba 
un arreglo de números como parámetro y retorne un nuevo 
arreglo con los números mayores a 10.

Ejemplos:

filter([3, 12, 45, 7]); // retorna [12, 45]
filter([3, 5]);         // retorna []*/

var num;
var vector = [];
var cadena = [];
function filter (num){
 cadena = num.split(",");
  console.log(cadena.length);
for(i=0; i<cadena.length; i++)
    {
       if (cadena[i] > 10)
         {
           vector[i] = cadena[i];
           console.log("[" + vector[i] + "]");
          
         }
         
    }

}

filter('54,87,5,87,10,54');