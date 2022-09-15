const prompt = require('prompt-sync')({sigint: true});

/*
divisible by 3 -> write fizz
divisible by 5 -> write buzz
divisible by both -> write fizzbuzz -->This evaluation needs to be entered before the others or it will never reach the final condition.  The first condition will be satisifed and exit the rest of the if statements.
*/

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

