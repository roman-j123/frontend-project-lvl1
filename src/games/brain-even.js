import getRandomNumber from '../random.js';

const checkEvenNumber = (number) => number % 2 === 0;
const brainEven = () => {
  const randomNumber = getRandomNumber();
  const question = randomNumber;
  const correctAnswer = checkEvenNumber(randomNumber) ? 'yes' : 'no';
  return { correctAnswer, question };
};
const startBrainEvenGame = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  return brainEven();
};
export default startBrainEvenGame;
