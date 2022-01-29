import readlineSync from 'readline-sync';
import { getRandomNumber } from '../index.js';

// Функция проверки выражения
const checkExpressionResult = (firstValue, secondValue, operand) => {
  switch (operand) {
    case '-':
      return (firstValue - secondValue);
    case '*':
      return (firstValue * secondValue);
    default:
      return (firstValue + secondValue);
  }
};
const brainCalcEngine = () => {
  const arrayOfOperands = ['+', '-', '*'];
  const getRandomOperand = arrayOfOperands[Math.floor(Math.random() * arrayOfOperands.length)];
  const getRandomFirstValue = getRandomNumber();
  const getRandomSecondValue = getRandomNumber();
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
