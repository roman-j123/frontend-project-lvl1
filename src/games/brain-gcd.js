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
  const firstValue = getRandomNumber();
  const secondValue = getRandomNumber();
  const question = `Question: ${firstValue} ${secondValue}`;
  const correctAnswer = checkGcdResult(firstValue, secondValue);
  return { correctAnswer, question };
};
export default brainGcdEngine;
