// Kaleb Israel 12-4-14 Expressions Wacky

//Dragon Farmer calculator
var num = prompt("Dragon Egg Calculator \nHow many Dragons do you have now?", "1"); //prompt user to enter dragon quantity
var age = prompt("What is the average age of your Dragons? (Years)", "120"); //prompt user for age input
var time = prompt("How long will you farm? (Years)", "10"); //prompt user for years of investment
var efficiency = 3.5 - (3.5 * age / 1000); //The youngest dragon will lay 3.5 per year, the older they get (up to 1000) the less they lay
console.log(efficiency); //log result