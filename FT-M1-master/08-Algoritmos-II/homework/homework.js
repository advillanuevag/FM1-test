'use strict'
// No cambies los nombres de las funciones.


function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de 
  // menor a mayor el array recibido como parámetro.
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) return array;

  const pivot = array[0];
  let left = [];
  let right = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) left.push(array[i]);
    else right.push(array[i]);
  }

  left = quickSort(left);
  right = quickSort(right);

  return [...left, pivot, ...right];

}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de 
  // menor a mayor el array recibido como parámetro.
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) return array;
  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle);

  left = mergeSort(left);
  right = mergeSort(right);

  let response = [];
  let leftI = [0];
  let rightI = [0];
  while (leftI < left.length && rightI < right.length) {
    if (left[leftI] < right[rightI]) {
      response.push(left[leftI]);
      leftI++;
    } else {
      response.push(right[rightI]);
      rightI++;
    }
  }
  left = left.slice(leftI);
  right = right.slice(rightI);
  return [...response, ...left, ...right];
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};