//Union Types
function combine(input1: number | string, input2: number | string){
    let result;

    if(typeof input1 === 'number' && typeof input2 === 'number'){
        return `${input1 + input2}`;
    } else {
        return `${String(input1) + String(input2)}`;
    }

    return result;
}

const combineAges = combine(3,34);
console.log(combineAges)