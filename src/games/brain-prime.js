import readlineSync from 'readline-sync';
import { getRandomNumber } from '../index.js';

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
  console.log(`Question: ${randomNumber}`);
  const userAnswer = readlineSync.question('Answer: ', {
    limit: ['yes', 'no'],
  });
  return { currectAnswer, userAnswer };
};
export default brainPrimeEngine;
