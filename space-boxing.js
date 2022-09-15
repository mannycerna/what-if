const prompt = require('prompt-sync')({sigint: true});

let earthWeight = Number(prompt("Enter your weight on earth: "));

//added validtion code from class 
let validWeight = true;

if (isNaN (earthWeight) === true) {
    console.log("Invalid weight, please enter a valid number.");
    validWeight = false;
}

if (validWeight === true) {
console.log("Please enter the number of the planet you will be traveling to using the following system. 1-Venus, 2-Mars, 3-Jupiter, 4-Saturn, 5-Uranus, 6-Neptune: ");

let planetNum = Number(prompt("Enter planet > "));

// let number = Number(prompt("Enter a number for the planet you are fighting in: "));

let planetFight = ["Venus", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

let choice = planetFight.at(planetNum - 1);

let planets = {
     "Venus"    : 0.78,
     "Mars"     : 0.39,
     "Jupiter"  : 2.65, 
     "Saturn"   : 1.17,
     "Uranus"   : 1.05,
     "Neptune"  : 1.23
};

let relGravity = Object.keys(planets).map(function(i) {
return planets[i]*earthWeight;})


if (planetNum === 1) {
    console.log(`You entered ${earthWeight} and fighting in planet ${choice}. Your weight in ${choice}    is: ${relGravity[0]} lbs.`);
} else if  (planetNum === 2) {
    console.log(`You entered ${earthWeight} and fighting in planet ${choice}.  Your weight in ${choice}  is: ${relGravity[1]} lbs.`);

} else if  (planetNum === 3) {
    console.log(`You entered ${earthWeight} and fighting in planet ${choice}.  Your weight in ${choice} is: ${relGravity[2]} lbs.`);

} else if  (planetNum === 4) {
    console.log(`You entered ${earthWeight} and fighting in planet ${choice}.  Your weight in ${choice} is: ${relGravity[3]} lbs.`);

} else if  (planetNum === 5) {
    console.log(`You entered ${earthWeight} and fighting in planet ${choice}.  Your weight in ${choice} is: ${relGravity[4]} lbs.`);

} else if  (planetNum === 6) {
    console.log(`You entered ${earthWeight} and fighting in planet ${choice}.  Your weight in ${choice} is: ${relGravity[5]} lbs.`);

}
}

//Test code below:
// let planets = new Object();

// venus   = planets[number] = 0.78;
// mars    = planets[2] = 0.39;
// jupiter = planets[3] = 2.65;
// saturn  = planets[4] = 1.17;
// uranus  = planets[5] = 1.05; 
// neptune  = planets[6] = 1.23;

// let destWeight = earthWeight * planets[number];
// console.log(`${destWeight}`);
// console.log(` ${planets[number]}`);
// if (number === 1) {
//     console.log(`You entered ${earthWeight} and destination planet ${key}`);
// }

/*  Solution from class on 8.15.2022
const prompt = require('prompt-sync') ({sigint: true});

let weight = Number(prompt("Enter your Earth weight: "));

let validWeight = true;

if (isNaN (weight) === true) {
    console.log("Invalid weight");
    validWeight = false;
}

if (validWeight === true) {
console.log("Please enter the number of the planet you will be traveling to using the following system. 1-Venus, 2-Mars, 3-Jupiter, 4-Saturn, 5-Uranus, 6-Neptune: ");

let planetNum = Number(prompt("> "));

console.log(weight);
console.log(planetNum);

if (planetNum === 1) {
    console.log("You picked Venus.")
    console.log(`Your weight is: ${weight * 0.78}`)
} else if (planetNum === 2) {
    console.log("You picked Mars.")
    console.log(`Your weight is: ${weight * 0.39}`)
} else if (planetNum === 3) {
    console.log("You picked Jupiter.")
    console.log(`Your weight is: ${weight * 2.65}`)
} else if (planetNum === 4) {
    console.log("You picked Saturn.")
    console.log(`Your weight is: ${weight * 1.17}`)
} else if (planetNum === 5) {
    console.log("You picked Uranus.")
    console.log(`Your weight is: ${weight * 1.05}`)
} else if (planetNum === 6) {
    console.log("You picked Neptune.")
    console.log(`Your weight is: ${weight * 1.23}`)
} else {
    console.log("Invalid entry!")
}
}
*/