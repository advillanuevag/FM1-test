'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var data = num.split("");
  data = data.reverse();
  var resultado = 0;
  for (let i = 0; i < data.length; i++) {
    var factor = 2 ** i;
    resultado = resultado + factor * data[i];
  }

  return resultado;

}

function DecimalABinario(num) {
  // tu codigo aca
  var result = "";
  while (num > 0) {
    result = (num % 2) + result;
    num = Math.floor(num / 2);
  }
  //console.log(result);
  return result;

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}