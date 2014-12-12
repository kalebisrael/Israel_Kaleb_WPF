// Kaleb Israel 12-11-14 Conditionals Wacky

//Calculates strength depending on spinach intake
var spinach = Number(prompt("This calculates your strength level based on spinach intake\nHow many ounces of spinach do you consume daily?","0"));
const popeye = 16; //popeye, consumes 16 ounces per day
if(spinach === 16){ //if consumption === popeye
    console.log("You eat as much as Popeye! You're strong!"); //log result
} else if(spinach > popeye) { //else if >
    console.log("You eat more than Popeye! Wow that's insane!"); //log result
} else { //else <
    console.log("You're just a baby! Popeye eats " + popeye + " ounces of spinach a day!"); //log result
} //end if