// CommonJs,every file is a module (by default)
// Modules - Encapsulated Code (only share minimum) 
const john = 'john';

const greet = (name)=>{
    console.log(`Hello ${name}`);
}

greet('Divas');
greet(john);