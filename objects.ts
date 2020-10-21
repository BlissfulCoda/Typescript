const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
}= {
    name: 'Tim',
    age: 30,
    hobbies: ['Skating', 'Linguistics'],
    role: [2, 'teacher']
}

person.role[0] = 100000;
person.role[1] = 'Caller';


for(let hobby of person.hobbies){
    console.log(`${hobby.toUpperCase()} is ONE of my favourite hobbies`);
}