function full_Sentence() { //Concat string method
    var part_1 = "This is ";
    var part_2 = " how to use";
    var part_3 = " the Concat Method";
    var part_4 = " to connect a sentence!";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById ("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() { //slice string method
    var Sentence = "That rug really tied the room together.";
    var Section = Sentence.slice (5,8);
    document.getElementById("Slice").innerHTML = Section;
}

function upper_method() { //toUpperCase string method
    var text1 = "That is a big spider!";
    var2 = text1.toUpperCase();
    document.getElementById("Upper").innerHTML = var2;
}

function number_Method() {
    var X = 365;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() {
    var X = 14675.233464;
    document.getElementById("Precision").innerHTML = X.toPrecision (8);
}

function toFixed_method() {
    var X = 7.3947;
    X.toFixed(2);
    document.getElementById("number_toFixed").innerHTML = X.toFixed (2);
}

function valueOf_method() {
    var X = 337;
    (300 + 37).valueOf();
    document.getElementById("number_valueOf").innerHTML = X.valueOf();
}