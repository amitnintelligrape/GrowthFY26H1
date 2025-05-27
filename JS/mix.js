//Hoisting: is the javaScript default behaviour that moving decration to the top of the current scope.

console.log(a); //Output: undefined

var a = 5;
//In the above example var declaration initialized but not assogned value.

//console.log(test) //Output: Reference Error.
let test = 10

//In the above Example let is hoisted but not initialized.


//Arrow Function is a shorter syntax for writing function and it does not bind with it's own 'this'.

// Regular Function
function add(a, b){
    return a + b;
}

const addArr = (a, b) => a + b; //Arrow function shorter of above regular function
console.log(add(2, 3)); // 5
console.log(addArr(4, 5)); // 9

//Map and Set
//Map is a in built object that allow you to store key-value pair and Set is a collection of unique value.

const map = new Map();
map.set('name', 'Amit');
console.log(map.get('name')); //Amit

const set = new Set([1,2,2,3,4]);
console.log(set); //1,2,3,4

//Let, Const and Var

// Let: Block scope and can not redeclared in the same scope
// Const: Block scope and can not be reassigned.
// Var: functional scope and can be redeclared 
var x = 1
var x = 2 // can be redeclared
let y = 3
//let y = 4 can not redeclared
const z = 5
// z=7  can not be re-assigned.

//Classes and Objects: are fundamental concepts used to create and manage data structure and behavoir in an organized way.

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    message(){
        return `My Name is ${this.name} and age is ${this.age}`;
    }
}
//In the above example Person is a class with a constructer that initialize the Person name and age. It's also include a method message that return the string that decribe the Person.

const PersonSec = new Person('Amit', 45);
console.log(PersonSec.message()); //My Name is Amit and age is 45}
//'PersonSec' is an object that created from the 'Person' class and its get all the information from it and used all the data with 'message' method define in the 'Person' class.


//Funtions: are blocks of code that perform a specific task. We can define and use them in several different ways.

function Mess(name){ //Function Declaration it's also hoisted
    return `Hi, ${name}`;
}
console.log(Mess('Amit')); // Hi, Amit 

const mess1 = function(name){ // Function Expression it's not hoisted 
    return `Hi, ${name}`;
}
console.log(mess1('Avi'));

const greeting = (name) => `Hi, ${name}`; //Arrow Function.

console.log(greeting('Saurabh'));



//Array, Arrays Function and Objects.

const arr = [1,2,3,4,5,6]
const double = arr.map(num =>num * 2); // Array Function
console.log(double); //[2,4,6,8,10,12]

const evens = arr.filter(num => num % 2 === 0);  // Array Function
console.log(evens); // [2, 4, 6]

const reduce = arr.reduce((acc, num)=> acc + num, 0) // Array Function
console.log(reduce); // 21

const obj = {'name': 'Amit', age: 25}; //Object is in Key value pair
console.log(`My Name is ${obj.name} and age is ${obj.age}.`); // My Name is Amit and age is 25.