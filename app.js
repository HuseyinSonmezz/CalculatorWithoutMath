let newLine = "\r\n";
let menuText =
  "Select the operation you want to perform:" +
  newLine +
  newLine +
  "1) Addition" +
  newLine +
  "2) Subtraction" +
  newLine +
  "3) Multiplication" +
  newLine +
  "4) Division";
let operation = Number(prompt(menuText));

if (operation == 1) {
  let number1 = Number(prompt("Enter the 1st number:"));
  let number2 = Number(prompt("Enter the 2nd number:"));

  let ones = "";

  for (number1; number1 >= 1; number1--) {
    ones = ones.concat("c");
  }

  for (number2; number2 >= 1; number2--) {
    ones = ones.concat("c");
  }

  alert("Sum: ".concat(ones.length));
} else if (operation == 2) {
  let nu1 = Number(prompt("Enter the 1st number:"));
  let nu2 = Number(prompt("Enter the 2nd number:"));

  let a = "";
  let b = "";

  for (nu1; nu1 >= 1; nu1--) {
    a = a.concat("c");
  }

  for (nu2; nu2 >= 1; nu2--) {
    b = b.concat("c");
  }

  let difference = a.slice(b.length);
  alert("Difference: ".concat(difference.length));
} else if (operation == 3) {
  let num1 = Number(prompt("Enter the 1st number:"));
  let num2 = Number(prompt("Enter the 2nd number:"));

  let repeated = "";
  let result = "";

  for (num1; num1 >= 1; num1--) {
    repeated = repeated.concat("c");
  }

  for (num2; num2 >= 1; num2--) {
    result = result.concat(repeated);
  }

  alert("Product: ".concat(result.length));
} else if (operation == 4) {
  let numb1 = Number(prompt("Enter the 1st number:"));
  let numb2 = Number(prompt("Enter the 2nd number:"));

  let dividend = "";
  let divisor = "";
  let quotient = "";

  for (numb1; numb1 >= 1; numb1--) {
    dividend = dividend.concat("c");
  }

  for (numb2; numb2 >= 1; numb2--) {
    divisor = divisor.concat("c");
  }

  let chunkSize = divisor.length;
  for (let k = dividend.length; k >= chunkSize; k -= chunkSize) {
    quotient = quotient.concat("t");
  }

  alert("Quotient: ".concat(quotient.length));
}
