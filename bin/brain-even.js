#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {
  MIN_VALUE,
  MAX_VALUE,
  MAX_ROUNDS,
  ROUND_COUNTER,
  getRandomNumber,
  checkEvenNumber,
  name,
} from '../src/index.js';

const brainEven = (min, max) => {
  const userName = name;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const brainEvenEngine = () => {
    let counterOfCurrectValues = ROUND_COUNTER;
    const randomNumber = getRandomNumber(min, max);
    console.log(`Question: ${randomNumber}`);
    const currentAnswer = checkEvenNumber(randomNumber);
    const userAnswer = readlineSync.question('Answer: ', {
      limit: ['yes', 'no'],
    });
    if (currentAnswer === userAnswer) {
      counterOfCurrectValues += 1;
      if (counterOfCurrectValues === 3) {
        console.log(`Congratulations, ${userName}!`);
      }
      if (counterOfCurrectValues < MAX_ROUNDS) {
        console.log('Correct!');
        brainEvenEngine();
      }
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${currentAnswer}'. \n Let's try again, ${name}!`);
    }
  };
  brainEvenEngine();
};
brainEven(MIN_VALUE, MAX_VALUE);
