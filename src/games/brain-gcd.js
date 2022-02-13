import getRandomNumber from '../random.js';
import { gameEngine } from '../index.js';

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
const startBrainGcdGame = () => { gameEngine(brainGcd, 'Find the greatest common divisor of given numbers.'); };
export default startBrainGcdGame;
