import getRandomNumber from '../random.js';

const checkEvenNumber = (number) => number % 2 === 0;
const brainEvenEngine = () => {
  const randomNumber = getRandomNumber();
  const question = `Question: ${randomNumber}`;
  const currectAnswer = checkEvenNumber(randomNumber) ? 'yes' : 'no';
  return { currectAnswer, question };
};
export default brainEvenEngine;
