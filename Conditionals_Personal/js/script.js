// Kaleb Israel 12-11-14 Conditionals Personal

//Flower calculator
var funds = Number(prompt("This calculator will tell you how many bouquets you can create on your budget determined by a specified amount of flowers per bouquet\nWhat are your current funds? (US Dollars)","0")); //prompt for funds
var perBouquet = Number(prompt("How many flowers will you use per bouquet?","0")); //prompt for per bouquet amount
const costPer = 0.7; //set bulk cost per flower
var flowers = Math.floor(funds / costPer); //determine flowers
var bouquets = Math.floor(flowers / perBouquet); //determine bouquets
function currencyFormat (num) { //function named currencyFormat that will return num
    return "$" + num.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","); //return '$' string + num taken to two decimal places and adding currency commas
} //end fn
var result = "You currently have " + currencyFormat(funds) + " which will allow you to purchase " + flowers + " flowers at the bulk price of $0.70 per flower. Using " + perBouquet + " flowers per bouquet, you can make " + bouquets + " complete bouquets."; //result string
console.log(result); //log result