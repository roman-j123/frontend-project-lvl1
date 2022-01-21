import readlineSync from 'readline-sync';
import { getRandomNumber } from '../index.js';
// Функция случайного выражения
const getRandomExpression = () => {
  const arrayOfOperands = ['+', '-', '*'];
  const getRandomOperand = arrayOfOperands[Math.floor(Math.random() * arrayOfOperands.length)];
  const getRandomFirstValue = getRandomNumber();
  const getRandomSecondValue = getRandomNumber();
  return { getRandomFirstValue, getRandomSecondValue, getRandomOperand };
};
// Функция проверки выражения
const checkExpressionResult = (firstValue, secondValue, operand) => {
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
const brainCalcEngine = () => {
  const { getRandomFirstValue, getRandomSecondValue, getRandomOperand } = getRandomExpression();
  console.log(`Question: ${getRandomFirstValue} ${getRandomOperand} ${getRandomSecondValue}`);
  const userAnswer = readlineSync.questionInt('Answer: ');
  const currectAnswer = checkExpressionResult(
    getRandomFirstValue,
    getRandomSecondValue,
    getRandomOperand,
  );
  return { currectAnswer, userAnswer };
};
export default brainCalcEngine;
