import getRandomNumber from '../random.js';

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
  const question = `Question: ${getRandomFirstValue} ${getRandomOperand} ${getRandomSecondValue}`;
  const currectAnswer = checkExpressionResult(
    getRandomFirstValue,
    getRandomSecondValue,
    getRandomOperand,
  );
  return { currectAnswer, question };
};
export default brainCalcEngine;
