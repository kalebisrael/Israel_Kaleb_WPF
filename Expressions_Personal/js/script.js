// Kaleb Israel 12-4-14 Expressions Personal

//Financial Calculator
var currentFunds = prompt("Investment Calculator \nWhat are your current funds?","1000"); //prompt user for current funds
var contr = prompt("What amount will you contribute monthly?","1000"); //prompt user for monthly add
contr *= 12; //change to annual
var interestRate = prompt("What is the interest rate percentage?","12"); //prompt user for interest rate
interestRate = interestRate / 100 + 1; //change to decimal +1
var invTime = prompt("How many years will you contribute?","10"); //prompt user for years estimated
var result = currentFunds * Math.pow(interestRate,invTime) + contr * ((Math.pow(interestRate,(Number(invTime) + 1)) - interestRate) / (interestRate - 1)); //ridiculous equation that calculates compound interest once per year
function currencyFormat (num) { //function named currencyFormat that will return num
    return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") //return '$' string + num taken to two decimal places and given currency commas
} //end fn
console.log(currencyFormat(result)); //log result