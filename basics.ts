//Core Types
//Numbers, Strings, Booleans
//Explicitly assign the core types 

function add(num1: number, num2: number, showResult: boolean, phrase: string){
  let result = num1 + num2;
  if(showResult){
    console.log(`${phrase}${result}`)
  } else {
    return result;
  }
}

const number1 = 3;
const number2 = 12;
const printResult = true;
const resultPhrase = `Result is: `

add(number1, number2, printResult, resultPhrase);
