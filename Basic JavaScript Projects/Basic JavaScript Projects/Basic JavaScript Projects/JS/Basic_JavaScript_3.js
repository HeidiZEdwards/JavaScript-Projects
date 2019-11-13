function myFunction() {
    var str = "Have a fantastic day!";
    var result = str.fontcolor ("red");
    document.getElementById ("red_text").innerHTML = result;
}

function additionFunction() {
    var addition = 7 + 8;
    document.getElementById ("Math").innerHTML = "7 + 8 =" + addition;
}

function subtractionFunction() {
    var subtraction = 9 - 2;
    document.getElementById ("Math").innerHTML = "9 - 2 =" + subtraction;
}

function multiplicationFunction() {
    var multiplication = 2 * 10;
    document.getElementById ("Math").innerHTML = "2 X 10 =" + multiplication;
}

function divisionFunction() {
    var division = 24 / 8;
    document.getElementById ("Math").innerHTML = " 24 / 8 =" + division;
}

function more_math() {
    var simple_math = (2 + 3) * 5 / 3 - 1;
    document.getElementById ("Math").innerHTML = "2 plus 1, multiplied by 5, divided by 3, subtracted by 1 equals" + simple_math;
}

function modulusOperator() {
    var modulus = 31 % 2;
    document.getElementById ("Math").innerHTML = "When you divide 31 by 2 you have a remainder of: " + modulus;
}

function negationOperator () {
    var X = 12;
    document.getElementById ("Math").innerHTML = -X;
}

function increment () {
    var X = 8;
    X ++;
    document.write (X);
}

function decrement () {
    var X = 12;
    X --;
    document.write (X);
}

window.alert (Math.random() * 100);