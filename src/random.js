import { MIN_VALUE, MAX_VALUE } from './index.js';

const getRandomNumber = (min = MIN_VALUE, max = MAX_VALUE) => {
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  return randomNumber;
};
export default getRandomNumber;
