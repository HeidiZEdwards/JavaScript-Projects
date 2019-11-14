var X = 10; //global function
function Add_numbers_1 () {
    document.write(15 + X + "<br>");
}
function Add_numbers_2 () {
    document.write (X + 200);
}
Add_numbers_1 ();
Add_numbers_2 ();

function Add_numbers_1 () { //local function
    var X = 10;
    document.write (15 + X + "<br>");
}
function Add_numbers_2 () {
    document.write (X + 200);
}
Add_numbers_1 ();
Add_numbers_2 ();

function Add_numbers_1 () { //debug
    var X = 10;
    console.log (15 + X);
}
function Add_numbers_2 () {
    console.log (X + 200);
}
Add_numbers_1 ();
Add_numbers_2 ();

function get_Date() { //IF condional statement
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function get_Date_1() {
    if (new Date().getHours() < 18) {
        document.getElementById("new_greeting").innerHTML = "How are you this evening?";
    }
}

function Cheers_function() { //assignment with p and input elements
    var Age, can_enter;
    Age = document.getElementById("Age").value;
    can_enter = (Age > 20) ? "You are old enough":"Sorry, you are not old enough";
    document.getElementById ("HappyHour").innerHTML = can_enter + " to enter this site.";
}

function driver_function() { //if and else statements
    Age = document.getElementById("Age").value;
    if (Age > 15) {
        Drive = "You are old enough to drive.";
    }
    else {
        Drive = "You are not old enough to drive.";
    }
    document.getElementById("Driver").innerHTML = Drive;
}

function Age_function() {
    Age= document.getElementById ("Age").value;
    if (Age > 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote.";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}