import getRandomNumber from '../random.js';

const checkPrimeNumber = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
const brainPrime = () => {
  const randomNumber = getRandomNumber();
  const correctAnswer = checkPrimeNumber(randomNumber) ? 'yes' : 'no';
  const question = randomNumber;
  return { correctAnswer, question };
};
export default brainPrime;
