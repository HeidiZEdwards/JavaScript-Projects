function myFirstFunction () {
    var str = "Press any key!";
    var result = str.fontcolor("green");
    document.getElementById("Green_Text").innerHTML = result;
}

function myFunction () {    
    var sentence = "I am learning";
    sentence += " about JavaScript.";
    document.getElementById("Concatenate").innerHTML = sentence;
}