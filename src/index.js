import readlineSync from 'readline-sync';

export const MIN_VALUE = 0;
export const MAX_VALUE = 100;
export const MAX_ROUNDS = 3;
export const ROUND_COUNTER = 0;

// Приветствуем пользователя
export const helloUser = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};
// Общий движок для всех игр
export const gameEngine = (game, rules) => {
  console.log('Welcome to the Brain Games!');
  const userName = helloUser();
  console.log(rules);
  for (let i = 0; i < MAX_ROUNDS; i += 1) {
    const { currectAnswer, userAnswer } = game();
    if (currectAnswer === userAnswer) {
      console.log('Correct!');
    }
    if (currectAnswer !== userAnswer) {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${currectAnswer}'. \n Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
// Функция получения случайного числа
export const getRandomNumber = (min = MIN_VALUE, max = MAX_VALUE) => {
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  return randomNumber;
};
