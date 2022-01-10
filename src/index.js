import createUserName from './cli.js';

export const MIN_VALUE = 0;
export const MAX_VALUE = 100;
export const MAX_ROUNDS = 3;
export const ROUND_COUNTER = 0;
// Функция получения случайного числа
export const getRandomNumber = (min = 0, max = 100) => {
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  return randomNumber;
};
// Функция проверки четного
export const checkEvenNumber = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};
// Функция приветсвия
export const name = createUserName();
