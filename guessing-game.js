guessNumber = 10;

let askGuess = function (num) {

    if (num === guessNumber) {
        console.log("You Win!");
    } else {
        console.log("Try Again");
    };

    let str = "42";
    console.log(42 === Number(str));

    const readline = require('node:readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

        rl.question('Enter a guess: ', (answer) => {
        // TODO: Log the answer in a database
        console.log(`Thank you for playing: ${answer}`);

        rl.close();
    });
};


secretNumber = 10;

let checkGuess = function (number) {
    if (number > secretNumber) {
        console.log("Too high");
        return false;

         } else if (number < secretNumber) {
            console.log("Too low");
            return false;

             } else if (number === secretNumber) {
                 console.log("Correct!");
                 return true;
    }
};

let randomInRange = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min)
};
console.log(randomInRange(15, 20));
console.log(randomInRange(15, 20));
console.log(randomInRange(15, 20));
