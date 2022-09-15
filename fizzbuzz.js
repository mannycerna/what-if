const prompt = require('prompt-sync')({sigint: true});

let number = Number(prompt("Enter a number: "));

if (number % 3 === 0 && number % 5 == 0) {
    console.log("fizzbuzz");
} else if (number % 3 === 0) {
    console.log("fizz");
} else if (number % 5 === 0) {
    console.log("buzz");
} else {
    console.log(number);
}