const prompt = require('prompt-sync')({sigint: true});

let earthWeight = Number(prompt("Enter your weight on earth: "));

let number = Number(prompt("Enter a number for the planet you are fighting in: "));

let planetFight = ["venus", "mars", "jupiter", "saturn", "uranus", "neptune"];

let choice = planetFight.at(number - 1);

let planets = {
     "venus"    : 0.78,
     "mars"     : 0.39,
     "jupiter"  : 2.65, 
     "saturn"   : 1.17,
     "uranus"   : 1.05,
     "neptune"  : 1.23
};

let relGravity = Object.keys(planets).map(function(i) {
return planets[i]*earthWeight;})


if (number === 1) {
    console.log(`You entered ${earthWeight} and fighting in planet ${choice}. Your weight in ${choice}    is:, ${relGravity[0]} lbs.`);
} else if  (number === 2) {
    console.log(`You entered ${earthWeight} and fighting in planet ${choice}.  Your weight in ${choice}  is:, ${relGravity[1]} lbs.`);

} else if  (number === 3) {
    console.log(`You entered ${earthWeight} and fighting in planet ${choice}.  Your weight in ${choice} is:, ${relGravity[2]} lbs.`);

} else if  (number === 4) {
    console.log(`You entered ${earthWeight} and fighting in planet ${choice}.  Your weight in ${choice} is:, ${relGravity[3]} lbs.`);

} else if  (number === 5) {
    console.log(`You entered ${earthWeight} and fighting in planet ${choice}.  Your weight in ${choice} is:, ${relGravity[4]} lbs.`);

} else if  (number === 6) {
    console.log(`You entered ${earthWeight} and fighting in planet ${choice}.  Your weight in ${choice} is:, ${relGravity[5]} lbs.`);

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