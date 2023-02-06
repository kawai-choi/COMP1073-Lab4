	// STEP 1: Open the Lab 4 HTML page in a browser tab and open up the console.

	// STEP 2a: Build an HTML element of your choice inside the HTML file for this lab to display the value of the variable i (the counter inside the loop below) as it counts down from 10 to 0.
    
    // STEP 2b: create a constant to refer to the HTML element that you just created using querySelector().
    const counter= document.querySelector('p');
	const page = document.querySelector('html');
    // The below for loop counts down every second from 10 to 0, using the setTimeout() function.
	for (let i = 10; i >= 0; i --) {
		setTimeout(function() {
			// STEP 4: Build a switch statement to change the background color of the page to yellow (from 8-5), to orange (from 4-1), and finally to red (at 0).
			

			switch(i){
				case 8:
				case 7:
				case 6:
				case 5:
					page.style.backgroundColor = "yellow";
					counter.style.color = "green";
					counter.style.fontSize = "75px";
				break;

				case 4:
				case 3:
				case 2:
				case 1: 
					page.style.backgroundColor = "orange";
					counter.style.color = "brown";
					counter.style.textIndent="50px"
					counter.style.fontSize = "125px";
				break;

				case 0:
					page.style.backgroundColor = "red";
					counter.style.color = "gray";
					counter.style.textIndent="250px"
					counter.style.fontSize = "200px";
			}

            // STEP 3: Add a condition with an IF statement that checks if the variable i is equal to zero - and if it is, output "Blastoff" to the HTML element you created above, otherwise just output the value of i.
			if (i === 0) {
				counter.textContent = "Blast off";
			}
			else 
				counter.textContent = i;


        }, 10000 - (1000 * i))
	};
    // STEP 5: Add some other feature to this page to make it more interactive or interesting!
