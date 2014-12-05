// Kaleb Israel 12-4-14 Expressions Worksheet

//Dog Years
const dogYearMultiplier = 7; //declare and define constant dog year multiplier amount
var sparkyAge = prompt("Calculate dog years \nWhat is Sparky's current age? (human years)"); //prompt user to enter sparky's current age
var humanAgeResult = dogYearMultiplier * sparkyAge; //calculate human years
console.log("Sparky is " + sparkyAge + " human years old which is " + humanAgeResult + " in dog years."); //log result

//Slice of Pie
const slicesPerPizza = 8; //declare and define constant amount of slices per pizza
var people = prompt("Calculate slices of pizza per person \nHow many people are there?"); //prompt user to enter amount of people at party
var pizzas = prompt("How many pizzas were ordered?"); //prompt user to enter amount of pizzas ordered
var slicesTotal = pizzas * slicesPerPizza; //calculate total slices
var slicePerPerson = slicesTotal / people; //calculate slices per person
console.log("Each person ate " + slicePerPerson + " slices of pizza at the party."); //log result

//Part II
var wholeSlices = slicesTotal % people; //calculate left overs
console.log("Sparky got " + wholeSlices + "slices of pizza."); //log result