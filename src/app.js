//CommonJS Module syntax NOT ES6/ES2015
//const person = require('./mymodule1'); //file uses ./   
  //require node modules without ./ require('express')


//ES2015/ES6 syntax
//import { person, sayHello } from './mymodule2';

//console.log(person.name);

//console.log(sayHello());


//import all *, as some custom named obj var mod, from module
//import * as mod from './mymodule2';

// console.log(typeof mod);
// console.log(mod.person.name);

// console.log(mod.sayHello());

//  import using default, dont need {}
import greeting from './mymodule2';

console.log(greeting);

