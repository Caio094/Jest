// ePalindromo.test.js
const ePalindromo = require('../src/ePalindromo');

test('verifica se "arara" é um palíndromo', () => {
  expect(ePalindromo('arara')).toBe(true);
});

test('verifica se "casa" não é um palíndromo', () => {
  expect(ePalindromo('casa')).toBe(false);
});

test('verifica se string vazia é um palíndromo', () => {
  expect(ePalindromo('')).toBe(true);
});
