//Functions - Variable Scope

var width = 5; //v

function calcArea(){
    var width = 20;
    var height = 30;
    var area = width * height;
    //console.log(area);
}

console.log(width); //^ scope matches width not in function

calcArea();