// Boiler plate code

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// putting questions for easy access
const questions = {
  0: "What's your name? Nicknames are also acceptable",
  1: "What's an activity you like doing?",
  2: "What do you listen to while doing that?",
  3: "Which meal is your favourite (eg: dinner, brunch, etc.)",
  4: "What's your favourite thing to eat for that meal?",
  5: "Which sport is your absolute favourite?",
  6: "What is your superpower? In a few words, tell us what you are amazing at!",
};

// container for answers
const ansObj = {
  0: "",
  1: "",
  2: "",
  3: "",
  4: "",
  5: "",
  6: "",
};

let i = 0;

const profile = function () {
  // if the value of i is less than 7 than it collects question from the question obj above and displays it for the
  // user and and collects the answer from them and increases the counter
  // using the call back function it keeps repeating until all 7 questions are answered
  // reocords the answers in another object above as well which will be used later on
  if (i < 7) {
    rl.question(`${questions[i]}\n`, (answer) => {
      ansObj[i] = answer;
      i++;
      console.log();
      profile();
    });
  } else {
    // rl.close() is called once all the questions have been answer
    // Then it displays to the user the new profile they have made based on the quetions
    // it pulls from the ansObj which was stored earlier and prints it out to the user
    // with a delay of 1000 miliseconds
    rl.close();
    console.log("Your Profile:");
    setTimeout(
      () =>
        console.log(`
    ${ansObj[0]} likes ${ansObj[1]} while listening to ${ansObj[2]}. 
    They like eating ${ansObj[4]} for their favorite meal ${ansObj[3]}. 
    ${ansObj[0]}'s absolute favorite sport is ${ansObj[5]}.
    When ${ansObj[0]} was asked their superpower they answered: ${ansObj[6]}
  `),
      1000,
    );
  }
};

//calls the function
profile();
