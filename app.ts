//Core Types
//Numbers, Strings, Booleans

function add(num1: number, num2: number, showResult: boolean, phrase: string){
  if(showResult){
    console.log(phrase + +num1 + +num2);
  } else {
    return num1 + num2;
  }
}

const number1 = 3;
const number2 = 12;
const printResult = true;
const resultPhrase = `Result is: `

add(number1, number2, printResult, resultPhrase);
