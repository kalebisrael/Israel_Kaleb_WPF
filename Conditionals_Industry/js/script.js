// Kaleb Israel 12-11-14 Conditionals Industry

//Currency calculator - Can I afford the service?
var price = Number(prompt("This calculator will help you determine if you can afford a web hosting service. What is the advertised price in Euros?","0")); //Identify calculator purpose and prompt user for price
var funds = Number(prompt("What amount of US dollars do you currently have?","0")); //prompt user for funds
const ratio = 1.24; //current dollar to euro ratio
var converted = funds / ratio; //convert funds into euros
var not = (converted < price) ? " not" : ""; //determine if funds are sufficient
function currencyFormat (num) { //function named currencyFormat that will return num
    return "$" + num.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","); //return '$' string + num taken to two decimal places and given currency commas
} //end fn
var result = "The hosting service costs " + currencyFormat(price) + " Euros. You currently have " + currencyFormat(funds) + " USD which converts to " + currencyFormat(converted) + " Euros. Currently, you do" + not + " have enough funds to make the purchase."; //create result string
console.log(result); //log result