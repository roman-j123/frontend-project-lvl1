#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  gameMessage,
  getRandomNumber,
  name,
} from '../src/index.js';

const brainProgression = () => {
  const userName = name;
  let counterOfRound = 0;
  console.log('What number is missing in the progression?');
  const brainProgressionEngine = () => {
    const arrayOfNumbers = [];
    const lengthOfArray = getRandomNumber(5, 15);
    const stepOfProgression = getRandomNumber(1, 10);
    let startPoint = getRandomNumber();
    const secretPoint = getRandomNumber(0, lengthOfArray);
    for (let i = 0; arrayOfNumbers.length <= lengthOfArray; i += 1) {
      arrayOfNumbers.push((startPoint += stepOfProgression));
    }
    const currectAnswer = arrayOfNumbers[secretPoint];
    const questionArray = arrayOfNumbers;
    questionArray.splice(secretPoint, 1, '..');
    console.log(`Question: ${questionArray.join(' ')}`);
    const userAnswer = readlineSync.questionInt('Answer: ');
    counterOfRound += 1;
    gameMessage(currectAnswer, userAnswer, userName, counterOfRound, brainProgressionEngine);
  };
  brainProgressionEngine();
};
brainProgression();
