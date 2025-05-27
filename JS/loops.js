//Loops helps us do the same thing again and again

for (let count = 0; count < 5; count++) {
    console.log(count);
}

console.log("*******iterate over array using for loop********")
let names = ["John", "Peter", "Jane", "Mike"];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

console.log("*******iterate over array using forEach loop********")
names.forEach(function test(n) {
    console.log(n);
});

console.log("*******iterate over array using for of loop********")
for (n of names) {
    console.log(n);
}

let student = {
    name: "Peter",
    rollNo: 567,
    age: 23,
    dept: "Phy"
};
console.log("*******iterate over an object with for in loop********")
for (key in student) {
    console.log("Key is " + key + " Value is " + student[key]);
}

//while loop in JS
console.log("*******iterate with while loop********")
let c = 0;
while (c < 5) {
    console.log(c);
    c++;
}

//do while loop in JS
console.log("*******iterate with do while loop********")
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);