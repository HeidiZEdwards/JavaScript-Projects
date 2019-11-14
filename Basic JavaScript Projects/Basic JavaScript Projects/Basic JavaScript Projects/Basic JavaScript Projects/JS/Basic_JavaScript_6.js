function Ride_Function() {
    var Height, Can_ride;
    Height=document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Voter_function() {
    var Age, Can_vote;
    Age=document.getElementById("Age").value;
    Can_Vote = (Age < 18) ? "You are not old enough":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_Vote + " to vote.";
}

function Vehicle (Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack=new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily=new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik=new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction () {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function Person (Name, Age, Height, Weight) {
    this.Person_Name = Name;
    this.Person_Age = Age;
    this.Person_Height = Height;
    this.Person_Weight = Weight;
}
var Steve=new Person("Steve", 45, "five feet ten inches", 170);
var Dorothy=new Person("Dorothy", 62, "five feet three inches", 130);
var Mary=new Person("Mary", 5, "four feet one inch", 65);
function newFunction () {
    document.getElementById("New_and_This").innerHTML = "This person is " + Steve.Person_Name + " he is " + Steve.Person_Age + " his height is " + Steve.Person_Height + " and his weight is " + Steve.Person_Weight;
}

function count_function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}