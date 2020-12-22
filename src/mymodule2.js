//ES6 syntax
export const person = {
    name: 'joe',
    age: 25
}

export function sayHello() {
    return `Hello ${person.name}`;
}


const greeting = 'Hello world';

// if use default then dont have to use {} when importing
export default greeting;