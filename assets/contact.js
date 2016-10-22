function validateForm() {
    var x = document.forms["center"]["gamer name"].value;
    if (x == null || x == "") {
        alert("Name must be filled out");
        return false;
    }
}
