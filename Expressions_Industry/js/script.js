// Kaleb Israel 12-4-14 Expressions Industry

//Upload time calculator
var fileSize = prompt("Upload time calculator \nWhat is the file size? (KB)","0"); //prompt user for file size
var upSpeed = prompt("What is your upload speed? (Mbps)","0"); //prompt user for upload speed
var overhead = prompt("Overhead (%)","10"); //prompt user for overhead
overhead = overhead / 50 / 2;
const kbToMb = 1024; //declare and define conversion value of KB to MB
const mbToMB = 0.125; //declare and define conversion value of Mb to MB
var seconds = fileSize * kbToMb / upSpeed * mbToMB; //seconds calculated before overhead
seconds += seconds * overhead; //seconds after overhead
console.log(seconds); //log result