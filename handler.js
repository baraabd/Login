var username = "Bara"
var password = "123"


function validateForm() {
    var usernameInput = document.getElementById("username").value
    var passwordInput = document.getElementById("password").value

    if (usernameInput == username && passwordInput == password) {
        alert("Du har loggat in!")
    }
}

/** This function updates the h1 in our html to the inputs value when its changed */
function inputChange(element) {
    var header = document.getElementById("textToShow")
    header.innerText = element.value
}