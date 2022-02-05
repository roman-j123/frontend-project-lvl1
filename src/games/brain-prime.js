import getRandomNumber from '../random.js';

const checkPrimeNumber = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
const brainPrimeEngine = () => {
  const randomNumber = getRandomNumber();
  const correctAnswer = checkPrimeNumber(randomNumber) ? 'yes' : 'no';
  const question = `Question: ${randomNumber}`;
  return { correctAnswer, question };
};
export default brainPrimeEngine;
