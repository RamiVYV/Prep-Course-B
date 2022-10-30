// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:
    let suma = 0;
    for (let i = 1; i <= 10; i++) {
      suma = suma + i  
    }
    return suma
    console.log(suma)
}

function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
  // return array.filter((value) => value % 2 == 0)

   let pares = [];
   
   for (let i = 0 ; i < array.length; i++){
        if (array[i] % 2 == 0){
          pares.push(array[i])
        }
   }
    return pares
   }

function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
  // return array.map((item) => Math.pow(item,2))

    let cuadrado = [];
    for (let i = 0 ; i< array.length; i++){
        cuadrado.push(array[i]**2);
    }
    return cuadrado

}

function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
  // return array.reduce((preValue, currentValue) => preValue + currentValue)

 let sumador = 0;

  for(let i= 0; i<array.length; i++){
    sumador = sumador  + array[i]
  }
  return sumador
}

function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
  numToString = num + "";
  return numToString.length

  

}
  
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
