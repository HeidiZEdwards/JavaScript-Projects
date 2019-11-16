function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 5) {
    Digit += "<br>" + X;
    X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function length_property() {
    var str = "Count the number of characters in this string!";
    var n = str.length;
    document.getElementById("string_Length").innerHTML = n;
}

var Instruments = ["Drums", "Guitar", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments [Y] + "<br>" ;
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() {
    var Dog_Picture = [];
    Dog_Picture [0] = "sleeping";
    Dog_Picture [1] = "running";
    Dog_Picture [2] = "playing";
    Dog_Picture [3] = "bark-bark-barking";
    document.getElementById("Array").innerHTML = "In this picture, the dog is " + Dog_Picture[3] + ".";
}

function constant_function() {
    const Vehicle = {make: "Subaru", model: " Forester", color: "red"};
    Vehicle.color = "green";
    Vehicle.price = "$25,000"
    document.getElementById ("Constant").innerHTML = "The cost of the " + Vehicle.make + Vehicle.model + " was " + Vehicle.price;
}

function function_Let() {
    var X = 43;
    document.write(X);
    {
        let X = 76;
        document.write("<br>" + X);
    }
    document.write("<br>" + X);
}

function dinnerObject() {
let Dinner = {
    vegetable: " Salad",
    starch: " Baked Potato ",
    protein: " Chicken",
    description : function () {
        return "For dinner tonight, we have " + this.vegetable + "," + this.starch + "and" + this.protein;
    }
};
document.getElementById("Dinner_Object").innerHTML = Dinner.description();
}





