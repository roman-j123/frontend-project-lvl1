#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  checkPrimeNumber,
  gameMessage,
  getRandomNumber,
  name,
} from '../src/index.js';

const brainPrime = () => {
  const userName = name;
  let counterOfRound = 0;
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const brainPrimeEnige = () => {
    const getNumber = getRandomNumber();
    const currectAnswer = checkPrimeNumber(getNumber);
    console.log(`Question: ${getNumber}`);
    const userAnswer = readlineSync.question('Answer: ', {
      limit: ['yes', 'no'],
    });
    counterOfRound += 1;
    gameMessage(currectAnswer, userAnswer, userName, counterOfRound, brainPrimeEnige);
  };
  brainPrimeEnige();
};
brainPrime();
