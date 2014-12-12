//Conditionals Worksheet

//Temp in C to F (or F to C)
var tempType = prompt("Do you want to convert temp into Fahrenheit or into Celsius?\nSimply input the letter F or the letter C accordingly"); //prompt to convert to F or C
var temp = Number(prompt("What is the temp to convert?","32")); //prompt for temp to convert
var converted = 0; //define converted var
if(tempType == "F" || tempType == "f"){ //if tempType is F
    converted = temp * 9 / 5 + 32; //convert to F
    console.log(temp + " degrees C is " + converted + " degrees F"); //log result
} else if(tempType == "C" || tempType == "c"){ //check if C
    converted = (temp - 32) * 5 / 9; //convert to C
    console.log(temp + " degrees F is " + converted + " degrees C"); //log result
} else { //else (not F or C)
    console.log("ERROR: F or C temp scale was not selected. Refresh page"); //check for error
} //end if

//Check login
var userName = "admin"; //username is admin
var password = "password"; //password is password
var usernamePrompt = prompt("Username?"); //prompt for username
var passwordPrompt = prompt("Password?"); //prompt for password
if(usernamePrompt === userName && passwordPrompt === password){ //check username and password
    console.log("Welcome, " + userName + "!"); //log welcome message
} else if(usernamePrompt !== userName){ //check if username is incorrect
    console.log("User not found. Try again."); //log user not found message
} else { //if username is correct
    console.log("Password does not match our records"); //log incorrect password message
} //end if

