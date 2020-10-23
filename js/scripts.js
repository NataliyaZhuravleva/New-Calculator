// Business logic:

const add = function(number1, number2) {
  return number1 + number2;
};

const subtract = function(number1, number2) {
  return number1 - number2;
};

const multiply = function(number1, number2) {
  return number1 * number2;
};

const divide = function(number1, number2) {
  return number1 / number2;
};

// Everything below this line is user interface logic:

$(document).ready(function() {
  $("form#calculator").submit(function() {
    event.preventDefault();
    const number1 = parseInt($("#input1").val());
    const number2 = parseInt($("#input2").val());
    const operator = $("input:radio[name=operator]:checked").val();
    console.log("1st number: " + number1);  // for debugging
    console.log("2nd number: " + number2);  // for debugging
    console.log("operator: " + operator);  // for debugging
    const result = add(number1, number2);
    $("#output").text(result);
  });
});
//const result1 = add(number1, number2);
//const result2 = subtract(number1, number2);
//const result3 = multiply(number1, number2);
//const result4 = divide(number1,number2)
//alert(result1, result2, result3, result4);
//alert(result4);
