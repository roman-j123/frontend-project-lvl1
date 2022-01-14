#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {
  MIN_VALUE,
  MAX_VALUE,
  getRandomNumber,
  checkEvenNumber,
  name,
  gameMessage,
} from '../src/index.js';

const brainEven = () => {
  const userName = name;
  let counterOfRound = 0;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const brainEvenEngine = () => {
    const randomNumber = getRandomNumber();
    console.log(`Question: ${randomNumber}`);
    const currentAnswer = checkEvenNumber(randomNumber);
    const userAnswer = readlineSync.question('Answer: ', {
      limit: ['yes', 'no'],
    });
    counterOfRound += 1;
    gameMessage(currentAnswer, userAnswer, userName, counterOfRound, brainEvenEngine);
  };
  brainEvenEngine();
};
brainEven(MIN_VALUE, MAX_VALUE);
