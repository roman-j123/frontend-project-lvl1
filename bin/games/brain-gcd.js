#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  checkGcdResult,
  gameMessage,
  getRandomNumber,
  name,
} from '../../src/index.js';

const brainGcd = () => {
  const userName = name;
  let counterOfRound = 0;
  console.log('Find the greatest common divisor of given numbers.');
  const brainGcdEngine = () => {
    const getFirstNumber = getRandomNumber();
    const getSecondNumber = getRandomNumber();
    console.log(`Question: ${getFirstNumber} ${getSecondNumber}`);
    const userAnswer = readlineSync.questionInt('Answer: ');
    const currectAnswer = checkGcdResult(getFirstNumber, getSecondNumber);
    counterOfRound += 1;
    gameMessage(currectAnswer, userAnswer, userName, counterOfRound, brainGcdEngine);
  };
  brainGcdEngine();
};
brainGcd();
