var number = pickNumber (); //creates a random number 

var guessTextBox = document.getElementById("guess"); //creates variable for the text field

var button = guessForm.getElementsByTagName("button"); //creates variable for the submit button

var messagesList = document.getElementById("messages") //creates variable for unordered list

guessForm.addEventListener("submit",function(event) { //starts function on submit
	event.preventDefault(); // stops the default action (which would be sending data to server)
	var guess = parseInt(guessTextBox.value); //turns entered number from string to integer
	var messageItem = document.createElement("li"); //creates a new list item
	var messageText; //instead of alert

	if (guess == number) {
		messageText = "You got it!";
	} else if (guess > number) {
		messageText = guess + ": too high!";
	} else {
		messageText = guess + ":too low!";
	}

	messageItem.innerHTML = messageText; 
	messagesList.appendChild(messageItem); //prints out message in <ul>
});

function pickNumber() { //creates random number
	var d = new Date();
	return d.getMilliseconds() % 10 + 1;
}




