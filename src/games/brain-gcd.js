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
const brainGcd = () => {
  const firstValue = getRandomNumber();
  const secondValue = getRandomNumber();
  const question = `${firstValue} ${secondValue}`;
  const correctAnswer = checkGcdResult(firstValue, secondValue);
  return { correctAnswer, question };
};
const startbBrainGcdGame = () => {
  console.log('Find the greatest common divisor of given numbers.');
  return brainGcd();
};
export default startbBrainGcdGame;
