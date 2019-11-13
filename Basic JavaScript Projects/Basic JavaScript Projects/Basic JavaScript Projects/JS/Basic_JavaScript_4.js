function my_dictionary () {
    var Food = {
        Kind: "Carrot",
        Color: "Orange",
        Type: "Vegetable",
    };
    delete Food.Kind;
    document.getElementById ("Dictionary").innerHTML = Food.Kind;
}