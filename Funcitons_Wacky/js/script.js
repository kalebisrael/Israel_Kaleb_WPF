//Functions Wacky - Kaleb Israel 12/18/14

//Millionaire likelihood calculator

var funds = prompt("Will you have a million dollars by the end of the day? Let's find out!\nWhat are your current funds?"); //prompt user for current funds
while(funds==="" || isNaN(funds)){ //check input for blank or NaN
    if(funds===""){ //if blank
        funds=prompt("Please do not leave blank"); //prompt with specific error message about leaving blank
    }else{ //else if NaN
        funds=prompt("Please only insert numbers"); //error message about NaN
    } //end else
} //end while

var robber = prompt("Will you successfully rob a bank today?"); //robbing a bank today?
while(robber!="y" && robber!="Y" && robber!="n" && robber!="N"){ //check input for y,Y,n,N
    robber = prompt("Please only answer with 'Y' (for yes) or 'N' (for no)"); //prompt again with message
} //end while

var attractive = prompt("Are you really really ridiculously good looking?"); //attractive?
while(attractive!="y" && attractive!="Y" && attractive!="n" && attractive!="N"){ //check input for y,Y,n,N
    attractive = prompt("Please only answer with 'Y' (for yes) or 'N' (for no)"); //prompt again with message
} //end while

var adding = prompt("Will you earn or be adding enough money to add to your current funds of $" + funds + " to add up to at least one million dollars?"); //adding enough money?
while(adding!="y" && adding!="Y" && adding!="n" && adding!="N"){ //check input for y,Y,n,N
    adding = prompt("Please only answer with 'Y' (for yes) or 'N' (for no)"); //prompt again with message
} //end while

var result = function(fnd,rbr,atr,add){ //function to return result
    var strResult; //var to hold result string
    if(fnd >= 1000000 || rbr=="Y" || rbr=="y" || add=="Y" || add=="y"){ //check if result will be true
        strResult = "Great! You'll be a millionaire soon enough!"; //put result message into strResult message
        return strResult; //return strResult
    }else if(atr=="Y" || atr=="y"){
        strResult = "You won't be a millionaire but, at least you're really really ridiculously good looking!";//put result message into strResult message
        return strResult; //return strResult
    }else{
        strResult = "You won't be a millionaire today kiddo!";//put result message into strResult message
        return strResult; //return strResult
    }
}

console.log(result(funds,robber,attractive,adding)); //log result