#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 16 + 1);
const answer = await inquirer.prompt([
    { name: "guessedNumber", type: "number", message: "Guess any number from 1-15" },
]);
//conditional statements
if (answer.guessedNumber === randomNumber) {
    console.log("You guessed the right number.You won");
}
else {
    console.log("You guessed the wrong number.You lose");
}
