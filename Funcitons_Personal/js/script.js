//Functions Personal - Kaleb Israel 12/18/14

//Calculate amount of time it will take to save up enough money

var amountNeeded = prompt("What amount of money would you like to save up?"); //prompt for save amount desired

while(amountNeeded==="" || isNaN(amountNeeded)){ //check input for blank or NaN
    if(amountNeeded===""){ //if blank
        amountNeeded=prompt("Please do not leave blank"); //prompt with specific error message about leaving blank
    }else{ //else if NaN
        amountNeeded=prompt("Please only insert numbers"); //error message about NaN
    } //end else
} //end while

var amountNow = prompt("What are your current funds?"); //prompt for current funds

while(amountNow==="" || isNaN(amountNow)){ //check input for blank or NaN
    if(amountNow===""){ //if blank
        amountNow=prompt("Please do not leave blank"); //prompt with specific error message about leaving blank
    }else{ //else if NaN
        amountNow=prompt("Please only insert numbers"); //error message about NaN
    } //end else
} //end while

var amountAdded = prompt("How much money can you contribute each month?"); //prompt for monthly contribution

while(amountAdded==="" || isNaN(amountAdded)){ //check input for blank or NaN
    if(amountAdded===""){ //if blank
        amountAdded=prompt("Please do not leave blank"); //prompt with specific error message about leaving blank
    }else{ //else if NaN
        amountAdded=prompt("Please only insert numbers"); //error message about NaN
    } //end else
} //end while

var calcu = function(need,now,add){ //calculator function
    var mon = (need - now) / add; //calculate months
    return mon; //return value
} //end fn

var months = calcu(amountNeeded,amountNow,amountAdded); //create var to hold calculated months

if(months=="Infinity"){ //check for infinity
    console.log("Sorry to break it to ya, you'll never reach your goal with that sort of contribution"); //log sorry message
}else if(isNaN(months) || months <= 0){ //check for errors
    console.log("You don't want to save any more than you have now?"); //log error message
}else{ //if no errors
    var sOrNot = (months == 1) ? " month" : " months"; //check if result is 1
    console.log("You would like to have $" + amountNeeded + ". You currently have $" + amountNow + ". If you add $" + amountAdded + " per month, you will reach your goal in " + months + sOrNot); //log result
} //end else