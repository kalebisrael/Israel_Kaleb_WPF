//Functions Industry - Kaleb Israel 12/18/14

//Website estimate

var started = prompt("WEBSITE COST CALCULATOR\nDoes the client have an existing website? ('Y' or 'N')"); //prompt user about existing website
while(started!="y" && started!="Y" && started!="n" && started!="N"){ //check input for y,Y,n,N
    started = prompt("Please only answer with 'Y' (for yes) or 'N' (for no)"); //prompt again with message
} //end while

var pageNum = prompt("How many pages do they desire?"); //prompt for number of pages
while(pageNum==="" || isNaN(pageNum)){ //check input for blank or NaN
    if(pageNum===""){ //if blank
        pageNum=prompt("Please do not leave blank"); //prompt with specific error message about leaving blank
    }else{ //else if NaN
        pageNum=prompt("Please only insert numbers"); //error message about NaN
    } //end else
} //end while

var content = prompt("Is the client providing their own page content?"); //prompt for content creation
while(content!="y" && content!="Y" && content!="n" && content!="N"){ //check input for y,Y,n,N
    content = prompt("Please only answer with 'Y' (for yes) or 'N' (for no)"); //prompt again with message
} //end while

var hourly = prompt("What is your hourly charge? (USD)"); //prompt for hourly charge
while(hourly==="" || isNaN(hourly)){ //check input for blank or NaN
    if(hourly===""){ //if blank
        hourly=prompt("Please do not leave blank"); //prompt with specific error message about leaving blank
    }else{ //else if NaN
        hourly=prompt("Please only insert numbers"); //error message about NaN
    } //end else
} //end while

var calcu = function(strt,pNum,cnt){ //calculator function
    var result = 0; //define result var (used  as hours to calc cost)
    if(strt=="N" || strt=="n"){ //check if website is started, if 'N' or 'n' (not started)
        result += 1; //add 1 to result
    } //end if
    result += Number(pNum); //add pageNum to result
    if(cnt=="N" || cnt=="n"){ //check if content is provided, if 'N' or 'n' (not provided)
        result += 1; //add 1 to result
    } //end if
    return result; //return result
}

var value = calcu(started,pageNum,content); //call function and return result as var 'value'
value *= hourly; //multiply hours by hourly to calculate end value

console.log("If you charge $" + hourly + " per hour, you should give the client a total estimate of $" + value); //log result