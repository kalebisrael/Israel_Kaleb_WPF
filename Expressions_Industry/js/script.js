// Kaleb Israel 12-4-14 Expressions Industry

//Upload time calculator
var fileSize = prompt("Upload time calculator \nWhat is the file size? (KB)","0"); //prompt user for file size
var upSpeed = prompt("What is your upload speed? (Mbps)","0"); //prompt user for upload speed
var overhead = prompt("Overhead (%)","10"); //prompt user for overhead
const kbToMb = 1024; //declare and define conversion value of KB to MB
const mbToMB = 0.125; //declare and define conversion value of Mb to MB
var seconds = fileSize / kbToMb / upSpeed * mbToMB; //seconds calculated before overhead
seconds += seconds * overhead / 50 / 2; //seconds after overhead
var minutes = Math.floor(seconds / 60); //declare and calculate minutes
seconds %= 60; //update seconds
var result = "With " + overhead + "% overhead, your " + fileSize + "KB file will take "; //start result str
if (minutes > 0){ //if minutes are > 0
    result += minutes + " minutes and "; //add minutes to str
} //end if
result += seconds.toFixed(2) + " seconds to upload"; //end result str
console.log(result); //log result