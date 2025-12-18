// math.js

/**
 * Adds two numbers together
 */
function add(a, b) {
  let number1 = a;
  let number2 = b;
  return number1 + number2;
}

/**
 * Subtracts the second number from the first
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Multiplies two numbers
 */
function multiply(a, b) {
  return a * b; // Agregando comentario para ayudar a Jacob :)
}

/**
 * Divides the first number by the second
 * Returns null if dividing by zero
 */
function divide(a, b) {
  if (b === 0) {
    return null;
  }
  return a / b;
}

function power(base, exponent) {
  return base ** exponent;
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  power
};
