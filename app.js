//Core Types
//Numbers, Strings, Booleans
function add(num1, num2, showResult) {
    if (showResult) {
        console.log(num1 + num2);
    }
    else {
        return num1 + num2;
    }
}
var number1 = 3;
var number2 = 12;
var printResult = true;
var result = add(number1, number2, printResult);
console.log(result);
