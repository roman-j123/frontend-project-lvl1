import createUserName from './cli.js';

export const MIN_VALUE = 0;
export const MAX_VALUE = 100;
export const MAX_ROUNDS = 3;
export const ROUND_COUNTER = 0;

// Функция получения случайного числа
export const getRandomNumber = (min = MIN_VALUE, max = MAX_VALUE) => {
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  return randomNumber;
};
export const gameMessage = (currectAnswer, userAnswer, userName, counter, repeatFunction) => {
  if (currectAnswer !== userAnswer) {
    return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${currectAnswer}'. \n Let's try again, ${userName}!`);
  }
  if (counter === MAX_ROUNDS) {
    return console.log(`Congratulations, ${userName}!`);
  }
  console.log('Correct!');
  return repeatFunction();
};
// Функция проверки четного
export const checkEvenNumber = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};
// Функция проверки выражения
export const checkExpressionResult = (firstValue, secondValue, operand) => {
  let currentAnswer = 0;
  switch (String(operand)) {
    case '+':
      currentAnswer = firstValue + secondValue;
      break;
    case '-':
      currentAnswer = firstValue - secondValue;
      break;
    case '*':
      currentAnswer = firstValue * secondValue;
      break;
    default:
      break;
  }
  return currentAnswer;
};
export const checkGcdResult = (firstValue, secondValue) => {
  let maxValue = Math.max(firstValue, secondValue);
  let minValue = Math.min(firstValue, secondValue);
  let result = maxValue % minValue;
  if (result === 0) {
    return minValue;
  }
  while (result !== 0) {
    maxValue = minValue;
    minValue = result;
    result = maxValue % minValue;
    if (result === 0) {
      return minValue;
    }
  }
  return minValue;
};
// Функция приветсвия
export const name = createUserName();
// Функция случайного выражения
export const getRandomExpression = () => {
  const arrayOfOperands = ['+', '-', '*'];
  const getRandomOperand = arrayOfOperands[Math.floor(Math.random() * arrayOfOperands.length)];
  const getRandomFirstValue = getRandomNumber(MIN_VALUE, MAX_VALUE);
  const getRandomSecondValue = getRandomNumber(MIN_VALUE, MAX_VALUE);
  return { getRandomFirstValue, getRandomSecondValue, getRandomOperand };
};
