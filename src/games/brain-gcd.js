import getRandomNumber from '../random.js';

const checkGcdResult = (firstValue, secondValue) => {
  let maxValue = Math.max(firstValue, secondValue);
  let minValue = Math.min(firstValue, secondValue);
  let result = maxValue % minValue;
  if (minValue === 0 || maxValue === 0) {
    return 0;
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
const brainGcdEngine = () => {
  const getFirstNumber = getRandomNumber();
  const getSecondNumber = getRandomNumber();
  const question = `Question: ${getFirstNumber} ${getSecondNumber}`;
  const currectAnswer = checkGcdResult(getFirstNumber, getSecondNumber);
  return { currectAnswer, question };
};
export default brainGcdEngine;
