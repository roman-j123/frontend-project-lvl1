import readlineSync from 'readline-sync';

const MIN_VALUE = 0;
const MAX_VALUE = 100;
const MAX_ROUNDS = 3;

// Общий движок для всех игр
export const gameEngine = (game, rules) => {
  let userAnswer;
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log(rules);
  for (let i = 0; i < MAX_ROUNDS; i += 1) {
    const { currectAnswer, question } = game();
    console.log(question);
    if (game.name === 'brainEvenEngine' || game.name === 'brainPrimeEngine') {
      userAnswer = readlineSync.question('Answer: ', {
        limit: ['yes', 'no'],
      });
    } else {
      userAnswer = readlineSync.questionInt('Answer: ');
    }
    if (currectAnswer !== userAnswer) {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${currectAnswer}'. \n Let's try again, ${userName}!`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${userName}!`);
};
// Функция получения случайного числа
export const getRandomNumber = (min = MIN_VALUE, max = MAX_VALUE) => {
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  return randomNumber;
};
