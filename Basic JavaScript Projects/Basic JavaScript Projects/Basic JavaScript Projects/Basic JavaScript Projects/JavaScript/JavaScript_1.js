function countdown() { //timer function
    var seconds = document.getElementById("seconds").value;
    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        setTimeout (tick, 1000);
        if (seconds == -1) {
            alert("Time's up!");
        }
    }
    tick();
}

//Switch statement
function Animal_function() {
    var Animal_Output;
    var Animal = document.getElementById("Animal_input").value;
    var Animal_string= " is a great animal!";
    switch(Animal) {
        case "Whale":
            Animal_Output = "Whale" + Animal_string;
            break;
        case "Lion":
            Animal_Output = "Lion" + Animal_string;
            break;
        case "Bear":
            Animal_Output = "Bear" + Animal_string;
            break;
        case "Elephant":
            Animal_Output = "Elephant" + Animal_string;
            break;
        case "Snake":
            Animal_Output = "Snake" + Animal_string;
            break;
        case "Dog":
            Animal_Output = "Dog" + Animal_string;
            break;
        case "Cat":
            Animal_Output = "Cat" + Animal_string;
            break;
        case "Frog":
            Animal_Output = "Frog" + Animal_string;
            break;
            default:
                Animal_Output = "Please enter an animal name exactly as it is written on the above list.";
    }
    document.getElementById("Output").innerHTML = Animal_Output;
}

//GetElementByClassName function
function className_function() {
    var X = document.getElementsByClassName ("Click");
    X [0].innerHTML = "The text has changed!";
}

