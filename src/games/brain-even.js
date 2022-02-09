import getRandomNumber from '../random.js';

const checkEvenNumber = (number) => number % 2 === 0;
const brainEven = () => {
  const randomNumber = getRandomNumber();
  const question = `Question: ${randomNumber}`;
  const correctAnswer = checkEvenNumber(randomNumber) ? 'yes' : 'no';
  return { correctAnswer, question };
};
export default brainEven;
