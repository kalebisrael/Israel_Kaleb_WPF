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
console.log("Sparky got " + wholeSlices + " slices of pizza."); //log result

//Shopping Bill
var weeklyTotals = [90,71,83,52,106]; //declare and define weekly totals
var totalSpent = 0; //declare and define totalSpent var with Int of 0 (to be calculated with fn below)
weeklyTotals.forEach(function (element) { //for each element in the array, run function
    totalSpent += element; //add element to totalSpent var
}); //end fn
var averageSpent = totalSpent / weeklyTotals.length; //calculate average spent (total spent / amount of weeks)
console.log("You have spent a total of $" + totalSpent + " on groceries over " + weeklyTotals.length + " weeks. That is an average of $" + averageSpent + " per week."); //log result

//Discount
var descr = prompt("Calculate discount \nWhat is the item of interest?"); //prompt user for item info
var original = prompt("What is the original price?"); //prompt user for original price
var discountPercent = prompt("What is the discount percentage?"); //prompt user for discount percent
var salesTax = prompt("What is the current sales tax percentage?"); //prompt user for current sales tax percent
var priceNoTax = original * (1 - discountPercent/100); //calculate price without tax
var priceTaxed = priceNoTax * (1 - salesTax/100); //calculate price with tax
console.log("Your " + descr + " was originally $" + original + ", but after a " + discountPercent + "% discount, it is now $" + priceNoTax + " without tax, and $" + priceTaxed + " with tax."); //log result