// ePalindromo.js
function ePalindromo(str) {
    const limpo = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return limpo === limpo.split('').reverse().join('');
  }
  
  module.exports = ePalindromo;
  