document.write (typeof 9); //typeof operator
document.write (typeof "word");

function my_function() {
    document.getElementById("Test").innerHTML = isNaN("This is a string"); //not a number NaN function
}

function my_function2() {
    document.getElementById("Test2").innerHTML = isNaN(52); 
}

document.write (3E435); //Infinity and -Infinity
document.write (-5E410);

document.write(12>22); //Boolean Logic
document.write(7>3);

console.log (3+4); //console.log method

document.write(12 + "2"); //type coercion

document.write(12<=2); //challenge Boolean false and console.log method
console.log (10-2);

document.write (12 == 10+2); //double equal sign comparison
document.write (13 == 22);

X = 5;
Y = 5;
document.write (X === Y); //triple equal sign comparison

A = "apples";
B = "oranges";
document.write (A === B); 

C = "horse";
D = 6;
document.write (C === D);

E = "twenty";
F = 20;
document.write (E === F);

document.write (5>2 && 7<10); //Boolean AND operator
document.write (4>2 && 7>8);

document.write (3<1 || 2>5); //Boolean OR operator
document.write (12<16 || 10>11);

function not_function() { //Boolean NOT operator
    document.getElementById("Not").innerHTML = ! (3>8);
}

function not_function2() { 
    document.getElementById("Not_2").innerHTML = ! (3<8);
}



