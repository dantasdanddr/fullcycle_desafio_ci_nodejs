const calculadora = require('../app');

describe('Calculadora', () => {
  describe('Somar', () => {
    it('deve somar dois números positivos', () => {
      const resultado = calculadora.somar(2, 3);
      expect(resultado).toBe(5);
    });

    it('deve somar dois números negativos', () => {
      const resultado = calculadora.somar(-2, -3);
      expect(resultado).toBe(-5);
    });

    it('deve somar um número positivo e um negativo', () => {
      const resultado = calculadora.somar(2, -3);
      expect(resultado).toBe(-1);
    });
  });

  describe('Subtrair', () => {
    it('deve subtrair dois números positivos', () => {
      const resultado = calculadora.subtrair(3, 2);
      expect(resultado).toBe(1);
    });

    it('deve subtrair dois números negativos', () => {
      const resultado = calculadora.subtrair(-3, -2);
      expect(resultado).toBe(-1);
    });

    it('deve subtrair um número positivo e um negativo', () => {
      const resultado = calculadora.subtrair(3, -2);
      expect(resultado).toBe(5);
    });
  });
  
  describe('Multiplicar', () => {
    it('deve multiplicar dois números positivos', () => {
      const resultado = calculadora.multiplicar(2, 3);
      expect(resultado).toBe(6);
    });

    it('deve multiplicar dois números negativos', () => {
      const resultado = calculadora.multiplicar(-2, -3);
      expect(resultado).toBe(6);
    });

    it('deve multiplicar um número positivo e um negativo', () => {
      const resultado = calculadora.multiplicar(2, -3);
      expect(resultado).toBe(-6);
    });
  });

  describe('Dividir', () => {
    it('deve dividir dois números positivos', () => {
      const resultado = calculadora.dividir(6, 3);
      expect(resultado).toBe(2);
    });

    it('deve dividir dois números negativos', () => {
      const resultado = calculadora.dividir(-6, -3);
      expect(resultado).toBe(2);
    });

    it('deve dividir um número positivo e um negativo', () => {
      const resultado = calculadora.dividir(6, -3);
      expect(resultado).toBe(-2);
    });
  });  
});
