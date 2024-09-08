// Additon
function add(num1, num2) {
  return num1 + num2;
}
// Subtraction
function subtract(num1, num2) {
  return num1 - num2;
}
// Multiplication
function multiply(num1, num2) {
  return num1 * num2;
}
// Division
function divide(num1, num2) {
  return num1 / num2;
}
// Modulus
function modul(num1, num2) {
  return num1 % num2;
}

// Calculate
function calculator(a, b, operation) {
  if (operation === "add") {
    return add(a, b);
  } else if (operation === "subtract") {
    return subtract(a, b);
  } else if (operation === "multiply") {
    return multiply(a, b);
  } else if (operation === "divide") {
    return divide(a, b);
  } else if (operation === "modul") {
    return modul(a, b);
  } else {
    ("Something wrong");
  }
}
const calcu = calculator(2, 12, "modul");
console.log(calcu);
