// Kaleb Israel 12-4-14 Expressions Personal

//Financial Calculator
var funds = Number(prompt("Investment Calculator \nWhat are your current funds?","1000")); //prompt user for current funds. Number added because it was causing issues without
var contr = prompt("What amount will you contribute monthly?","1000"); //prompt user for monthly add
contr *= 12; //change to annual
var interestRate = prompt("What is the interest rate percentage?","12"); //prompt user for interest rate
var invTime = prompt("How many years will you contribute?","10"); //prompt user for years estimated
var result = funds * Math.pow((interestRate / 100 + 1),invTime) + contr * ((Math.pow((interestRate / 100 + 1),(Number(invTime) + 1)) - (interestRate / 100 + 1)) / (interestRate / 100)); //ridiculous equation that calculates compound interest once per year
var invMade = invTime * contr + funds;
function currencyFormat (num) { //function named currencyFormat that will return num
    return "$" + num.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","); //return '$' string + num taken to two decimal places and adding currency commas
} //end fn
console.log("You currently have " + currencyFormat(funds) + ". If you contribute " + currencyFormat(contr) + " per year at " + interestRate + "% interest rate for " + invTime + " years, you will earn " + currencyFormat(result - invMade) + " in interest after investing " + currencyFormat(invMade) + " in total. I'll see you in 10 years again when you have a whopping " + currencyFormat(result) + " in total to spend!"); //log result