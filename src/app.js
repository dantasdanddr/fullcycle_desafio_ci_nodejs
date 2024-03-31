function somar(a, b) {
    return a + b;
  }
  
  function subtrair(a, b) {
    return a - b;
  }
  
  function multiplicar(a, b) {
    return a * b;
  }
  
  function dividir(numerador, denominador) {
    if (denominador === 0) {
      throw new Error('Divisão por zero!');
    }
    return numerador / denominador;
  }
  
  module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir,
  };
  