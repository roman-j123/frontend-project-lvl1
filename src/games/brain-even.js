import readlineSync from 'readline-sync';
import { getRandomNumber } from '../index.js';

const checkEvenNumber = (number) => number % 2 === 0;
const brainEvenEngine = () => {
  const randomNumber = getRandomNumber();
  console.log(`Question: ${randomNumber}`);
  const userAnswer = readlineSync.question('Answer: ', {
    limit: ['yes', 'no'],
  });
  const currectAnswer = checkEvenNumber(randomNumber) ? 'yes' : 'no';
  return { currectAnswer, userAnswer };
};
export default brainEvenEngine;
