#! /usr/bin/env node

import inquirer from "inquirer";

const answer : {sentence: string} = await inquirer.prompt([
    {
        name: "sentence",
        message: "Enter your sentence to count the words",
        type: "input",
    }
]);

const words = answer.sentence.trim().split(" ");

console.log(words);

console.log(`Your sentence words count is: ${words.length}`);