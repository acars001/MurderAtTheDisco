
		//stackoverflow - making on onlick to change text in java
		function card1() {
			document.getElementById("answer").innerHTML = "Incorrect!";
		}
			
		function card2() {
			document.getElementById("answer").innerHTML = "Correct!";
			
			document.getElementById("change").innerHTML = "Next riddle";
			
			/* if (document.getElementById("riddle2").opacity < 1) {
				document.getElementById("riddle2").opacity = 100;
			} */
			
		}
			
		function card3() {
			document.getElementById("answer").innerHTML = "Incorrect!";
		}
		
		function card4() {
			document.getElementById("answer").innerHTML = "Incorrect!";
		}
			
		function card5() {
			document.getElementById("answer").innerHTML = "Incorrect!";
			
		}
			
		function card6() {
			document.getElementById("answer").innerHTML = "Correct!";
			document.getElementById("change").innerHTML = "Next riddle";
			
		}
		
		function card7() {
			document.getElementById("answer").innerHTML = "Incorrect!";
		}
			
		function card8() {
			document.getElementById("answer").innerHTML = "Incorrect!";
			
		}
			
		function card9() {
			document.getElementById("answer").innerHTML = "Correct!";
			document.getElementById("change").innerHTML = "Next riddle";
			
			
		}
		
/* for minigame 2 */

        // Generate a Random Number
		const n = parseInt(Math.floor(Math.random() * 5 )+ 1);
		let nUser;
		
		function guessing() {
 
		// Number guessed by user    
            nUser = parseInt(document.getElementById("guessField").value);
 
            if (nUser == n) {
                document.getElementById("output").innerHTML = "Well done you guessed the correct number";
				
            }
 
            /* If guessed number is greater than actual number*/
            else if (nUser > n) {
                document.getElementById("output").innerHTML = "Please try a smaller number";
            }
            else {
                document.getElementById("output").innerHTML ="Please try a bigger number";
            }
		}
 
        /* document.getElementById("submitguess").onclick = guessing();  */
		
		
		function steph() {
			var checkBox = document.getElementById("sus1");
			
			if (checkBox.checked == true) {
				document.getElementById("result").innerHTML = "Sorry! That's incorrect";
			}
		}
		
		function zach() {
			var checkBox = document.getElementById("sus2");
			
			if (checkBox.checked == true) {
				document.getElementById("result").innerHTML = "Sorry! That's incorrect";
			}
		}
		
		function henry() {
			var checkBox = document.getElementById("sus3");
			
			if (checkBox.checked == true) {
				document.getElementById("result").innerHTML = "Good Work! That's correct";
			}
		}
		
		function ross() {
			var checkBox = document.getElementById("sus4");
			
			if (checkBox.checked == true) {
				document.getElementById("result").innerHTML = "Sorry! That's incorrect";
			}
		}
