const prompt = require('prompt-sync')({sigint: true});

let num = Number(prompt("Please enter a number between 1 - 7: "));

let day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

let result = day.at(num - 1);

if (num === 1) {
    console.log(`Your input is ${num} so the day of the week is ${result}`);

} else if (num === 2) {
    console.log(`Your input is ${num} so the day of the week is ${result}`);

} else if (num === 3) {
    console.log(`Your input is ${num} so the day of the week is ${result}`);

} else if (num === 4) {
    console.log(`Your input is ${num} so the day of the week is ${result}`);

}  else if (num === 5) {
    console.log(`Your input is ${num} so the day of the week is ${result}`);

} else if (num === 6) {
    console.log(`Your input is ${num} so the day of the week is ${result}`);

} else if (num === 7) {
    console.log(`Your input is ${num} so the day of the week is ${result}`);

} else {
    console.log("Error, number must be between 1 - 7!");
}

