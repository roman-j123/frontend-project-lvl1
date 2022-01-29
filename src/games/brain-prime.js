import getRandomNumber from '../random.js';

const checkPrimeNumber = (num) => {
  if (num < 2) {
    return 'no';
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};
const brainPrimeEngine = () => {
  const randomNumber = getRandomNumber();
  const currectAnswer = checkPrimeNumber(randomNumber);
  const question = `Question: ${randomNumber}`;
  return { currectAnswer, question };
};
export default brainPrimeEngine;
