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
  const operand = operands[getRandomNumber(0, operands.length)];
  const firstValue = getRandomNumber();
  const secondValue = getRandomNumber();
  const question = `Question: ${firstValue} ${operand} ${secondValue}`;
  const correctAnswer = checkExpressionResult(
    firstValue,
    secondValue,
    operand,
  );
  return { correctAnswer, question };
};
export default brainCalcEngine;
