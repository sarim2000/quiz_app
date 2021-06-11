var readline = require("readline-sync");
const data = require("./questions.json");

// console.log(data.questions[2]);
var name = readline.question("What is your name? ");

console.log(
	`-------------------------\nWelcome to my quiz, ${name}.\nBest of luck\n-------------------------`
);

let score = 0;
let highestScore = 12;
let scorer = "Sarim";

for (let i = 0; i < data.questions.length; i++) {
	console.log(data.questions[i].question);
	for (let j = 0; j < 4; j++) {
		console.log(`${j + 1}. ${data.questions[i].answers[j]}\n`);
	}
	let ans = readline.question("Your answer? Give index: ");
	console.log(ans);
	let lc = data.questions[i].correctIndex;
	console.log(lc);
	if (Number(ans) === lc) {
		score++;
		console.log("Correct");
	} else {
		console.log("Wrong");
	}
	console.log("\n");
}

if (score > highestScore) {
	console.log("\n You are the champ");
} else {
	console.log("Loserr!");
}
