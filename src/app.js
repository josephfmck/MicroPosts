//CommonJS Module syntax NOT ES6/ES2015
//const person = require('./mymodule1'); //file uses ./   
  //require node modules without ./ require('express')


//ES2015/ES6 syntax
import { person, sayHello } from './mymodule2';


console.log(person.name);

console.log(sayHello());

