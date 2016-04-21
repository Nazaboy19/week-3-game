
// Generate a random letter.
letter = Math.round((Math.random() * 100))%100  + 1;


counter = 9;
do
	{
	counter++;

	
	document.write("Guess #"+counter+" was "+guess+"");

	if (guess == letter) {
		document.write("You guessed it!");
		}
	else  {
		if (guess < letter)  {
			document.write("Too small, guess again.");
			}
		else  {
			document.write("Guess again.");
			}
		}

		
	} while (counter <9 && guess != letter);

if (guess != letter) {
		document.write("I won " + number+"");
		}