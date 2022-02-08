import getRandomNumber from '../random.js';

const operands = ['+', '-', '*'];
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
  const getRandomOperand = getRandomNumber(0, operands.length);
  const getRandomFirstValue = getRandomNumber();
  const getRandomSecondValue = getRandomNumber();
  const question = `Question: ${getRandomFirstValue} ${operands[getRandomOperand]} ${getRandomSecondValue}`;
  const correctAnswer = checkExpressionResult(
    getRandomFirstValue,
    getRandomSecondValue,
    operands[getRandomOperand],
  );
  return { correctAnswer, question };
};
export default brainCalcEngine;
