//Form validation1 checkFunction is used to check if the member login details is valid.
function checkFunction() {
	//Add this error message in html.
	document.getElementById("errorMessage").innerHTML = "The name or password is invalid! Please try again.";
}

//Check if all the forms have been filled.
function submitFunction() {
	//Set varibles for those input boxes.
	var firstnameInputvalue = document.getElementById("firstName").value;
	var lastnameInputvalue = document.getElementById("lastName").value;
	var emailInputvalue = document.getElementById("emailInput").value;
	//If they are not blanck, then call the following function.
	if (firstnameInputvalue != "" && lastnameInputvalue != "" && emailInputvalue != ""  ) {
		//Send a message to user which application is complete.
		alert("Congratulations! Your applicaion is complete")
		} else {
		document.getElementById("submitMessage").innerHTML = "The form is not complete.";//If form is not complete, send this message.
		}
}

//Check if the passwords are identical.
function checkPass() {
	//Set variables for password box and a message in html.
	var passwordInputvalue = document.getElementById("passwordInput").value;
	var passwordCheckvalue = document.getElementById("passwordCheck").value;
	var message = document.getElementById("confirmMessage")
	//if the first password is same with the second and they are not blank, send "Passwords Match" to user.
	if (passwordInputvalue == passwordCheckvalue && passwordInputvalue != "" && passwordCheckvalue != "" ) {
		message.innerHTML = "Passwords Match!";
	} else if (passwordInputvalue != passwordCheckvalue && passwordInputvalue != "" && passwordCheckvalue != "" ) {
		message.innerHTML = "The passwords do not match!"; //If not matched, send this message to user.
	}
}
