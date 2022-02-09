import readlineSync from 'readline-sync';

export const MIN_VALUE = 0;
export const MAX_VALUE = 100;
const MAX_ROUNDS = 3;

// Общий движок для всех игр
export const gameEngine = (game) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  for (let i = 0; i < MAX_ROUNDS; i += 1) {
    const { correctAnswer, question } = game();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Answer: ');
    if (String(correctAnswer) !== userAnswer) {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \n Let's try again, ${userName}!`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${userName}!`);
};
