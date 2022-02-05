import getRandomNumber from '../random.js';

const checkGcdResult = (firstValue, secondValue) => {
  let a = firstValue;
  let b = secondValue;
  if (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  } else {
    return a + b;
  }

  return checkGcdResult(a, b);
};
const brainGcdEngine = () => {
  const getFirstNumber = getRandomNumber();
  const getSecondNumber = getRandomNumber();
  const question = `Question: ${getFirstNumber} ${getSecondNumber}`;
  const correctAnswer = checkGcdResult(getFirstNumber, getSecondNumber);
  return { correctAnswer, question };
};
export default brainGcdEngine;
