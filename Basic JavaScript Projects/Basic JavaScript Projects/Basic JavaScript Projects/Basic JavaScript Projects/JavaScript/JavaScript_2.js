function validateForm() {
    var X = document.forms["myForm"]["firstname"].value;
    if (X == "") {
        alert("Name must be filled out");
        return false;
    }
}