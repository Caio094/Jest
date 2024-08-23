// calculadora.test.js
const calculadora = require('../src/calculadora');

test('soma de 10 e 5 deve retornar 15', () => {
  expect(calculadora(10, 5, 'soma')).toBe(15);
});

test('subtração de 10 e 5 deve retornar 5', () => {
  expect(calculadora(10, 5, 'subtracao')).toBe(5);
});

test('multiplicação de 10 e 5 deve retornar 50', () => {
  expect(calculadora(10, 5, 'multiplicacao')).toBe(50);
});

test('divisão de 10 por 5 deve retornar 2', () => {
  expect(calculadora(10, 5, 'divisao')).toBe(2);
});

test('divisão por zero deve retornar erro', () => {
  expect(calculadora(10, 0, 'divisao')).toBe('Erro: Divisão por zero');
});
