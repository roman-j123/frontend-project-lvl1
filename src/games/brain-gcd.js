import readlineSync from 'readline-sync';
import { getRandomNumber } from '../index.js';

const checkGcdResult = (firstValue, secondValue) => {
  let maxValue = Math.max(firstValue, secondValue);
  let minValue = Math.min(firstValue, secondValue);
  let result = maxValue % minValue;
  if (minValue === 0 || maxValue === 0) {
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
const brainGcdEngine = () => {
  const getFirstNumber = getRandomNumber();
  const getSecondNumber = getRandomNumber();
  console.log(`Question: ${getFirstNumber} ${getSecondNumber}`);
  const userAnswer = readlineSync.questionInt('Answer: ');
  const currectAnswer = checkGcdResult(getFirstNumber, getSecondNumber);
  return { currectAnswer, userAnswer };
};
export default brainGcdEngine;
