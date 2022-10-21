let range = 2;
let point = 0;
let username = prompt(`Hello! Please enter your name: `);

let intro = prompt(`Hello ${username}! I hope your day is as bright as mine. We're about to play a guessing game. I'll generate a random number and you will try to guess the number. Feel free to try as many times as possible! Ready? Press Enter to continue: `);

guessRandomNumber(range);

function guessRandomNumber(range) {
  // generate random number between one and two
  let randomValue = Math.floor((Math.random() * range) + 1);

  // accept the input value
  let guessedValue = parseInt(prompt(`Guess any number between 1 and ${range}`));

  while (guessedValue != randomValue) {
    guessedValue = parseInt(prompt(`Number does not match. Guess another number between 1 and ${range}`));
  }

  // check if number is correct
  if (guessedValue == randomValue) {
    range += 1;
    point += 1;
    alert(`Congratulations! You guessed correctly! Your range will be increased to ${range}`);
    alert(`You have scored one point and your total point is ${point}!`);
    let cont = prompt("Do you want to continue. Enter Yes/No: ");

    while (cont != "Yes" && cont != "No") {
      cont = prompt("Do you want to continue. Enter Yes/No: ");
    }
    if (cont == 'Yes') {
      guessRandomNumber(range);
    } else if (cont == 'No') {
      alert('Thank you!');
    }
  }

}


