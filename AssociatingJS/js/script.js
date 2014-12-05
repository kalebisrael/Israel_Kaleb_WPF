// Expressions - Casting

var stringVar = "6";
var result = 7 + Number(stringVar);
console.log(result);

var areaCode = 541;
var firstPart = 727;
var secPart = 2324;
//(541)727-2324
var phoneNo = "(" + String(areaCode) + ")" + String(firstPart) + "-" + String(secPart);
console.log(phoneNo);