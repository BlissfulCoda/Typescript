//Core Types
//Numbers, Strings, Booleans
function add(num1, num2, showResult, phrase) {
    if (showResult) {
        console.log(phrase + +num1 + +num2);
    }
    else {
        return num1 + num2;
    }
}
var number1 = 3;
var number2 = 12;
var printResult = true;
var resultPhrase = "Result is: ";
add(number1, number2, printResult, resultPhrase);
