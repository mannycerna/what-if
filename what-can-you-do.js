const prompt = require('prompt-sync')({sigint: true});

let enterAge = Number(prompt("Please enter your age: "));

console.log(enterAge);

if (enterAge < 16) {
    console.log("You can't drive.");

} else if (enterAge <=17) {
    console.log("You can drive but not vote.");

} else if (enterAge <= 24) {
    console.log("You can vote but not rent a car.");

} else  {
    console.log("You can do pretty much anything.");
}