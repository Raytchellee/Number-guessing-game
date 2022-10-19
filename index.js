let range = 2;
let point = 0;
function guessRandomNumber(range) {
  // generate random number between one and two
  let randomValue = Math.floor((Math.random() * range) + 1);

  // accept the input value
  let guessedValue = parseInt(prompt(`Guess any number between one and ${range}`));

  while (guessedValue != randomValue) {
    guessedValue = parseInt(prompt(`Number does not match. Guess another number between one and ${range}`));
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

guessRandomNumber(range);
