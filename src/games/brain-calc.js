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
const brainCalc = () => {
  const operand = operands[getRandomNumber(0, operands.length)];
  const firstValue = getRandomNumber();
  const secondValue = getRandomNumber();
  const question = `${firstValue} ${operand} ${secondValue}`;
  const correctAnswer = checkExpressionResult(
    firstValue,
    secondValue,
    operand,
  );
  return { correctAnswer, question };
};
const startBrainCalcGame = () => {
  console.log('What is the result of the expression?');
  return brainCalc();
};
export default startBrainCalcGame;
