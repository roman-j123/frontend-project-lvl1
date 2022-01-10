#!/usr/bin/env node
import readlineSync from 'readline-sync';
import createUserName from '../src/cli.js';

// Настройки: указываем интервалы случайного числа.
const minimalValue = 0;
const maximumValue = 100;
let counterOfCurrectValues = 0;

// Функция получения случайного числа
const getRandomNumber = (min = 0, max = 100) => Math.floor(Math.random() * (max - min) + min);
// Функция приветсвия
const name = createUserName();
// Функция проверки ответа
const checkAnswer = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const brainEven = (min, max) => {
  const randomNumber = getRandomNumber(min, max);
  console.log(`Question: ${randomNumber}`);
  const currentAnswer = checkAnswer(randomNumber);
  const userAnswer = readlineSync.question('Answer: ', {
    limit: ['yes', 'no'],
  });
  if (currentAnswer === userAnswer) {
    counterOfCurrectValues += 1;
    if (counterOfCurrectValues === 3) {
      console.log(`Congratulations, ${name}!`);
    }
    if (counterOfCurrectValues < 3) {
      console.log('Correct!');
      brainEven();
    }
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${currentAnswer}'. \n Let's try again, ${name}!`);
  }
};
brainEven(minimalValue, maximumValue);
