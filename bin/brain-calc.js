#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  MIN_VALUE,
  MAX_VALUE,
  getRandomExpression,
  checkExpressionResult,
  name,
  gameMessage,
} from '../src/index.js';

const brainCalc = () => {
  const userName = name;
  let counterOfRound = 0;
  console.log('What is the result of the expression?');
  const brainCalcEngine = () => {
    const { getRandomFirstValue, getRandomSecondValue, getRandomOperand } = getRandomExpression();
    console.log(`Question: ${getRandomFirstValue} ${getRandomOperand} ${getRandomSecondValue}`);
    const userAnswer = readlineSync.questionInt('Answer: ');
    const currentAnswer = checkExpressionResult(
      getRandomFirstValue,
      getRandomSecondValue,
      getRandomOperand,
    );
    counterOfRound += 1;
    gameMessage(currentAnswer, userAnswer, userName, counterOfRound, brainCalcEngine);
  };
  brainCalcEngine();
};
brainCalc(MIN_VALUE, MAX_VALUE);
