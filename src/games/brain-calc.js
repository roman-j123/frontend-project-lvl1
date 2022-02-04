import getRandomNumber from '../random.js';

// Функция проверки выражения
const checkExpressionResult = (firstValue, secondValue, operand) => {
  switch (operand) {
    case '-':
      return (firstValue - secondValue);
    case '*':
      return (firstValue * secondValue);
    case '+':
      return (firstValue + secondValue);
    default:
      return false;
  }
};
const brainCalcEngine = () => {
  const arrayOfOperands = ['+', '-', '*'];
  const getRandomOperand = getRandomNumber(0, arrayOfOperands.length);
  const getRandomFirstValue = getRandomNumber();
  const getRandomSecondValue = getRandomNumber();
  const question = `Question: ${getRandomFirstValue} ${arrayOfOperands[getRandomOperand]} ${getRandomSecondValue}`;
  const correctAnswer = checkExpressionResult(
    getRandomFirstValue,
    getRandomSecondValue,
    arrayOfOperands[getRandomOperand],
  );
  return { correctAnswer, question };
};
export default brainCalcEngine;
