#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
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
    const currectAnswer = checkExpressionResult(
      getRandomFirstValue,
      getRandomSecondValue,
      getRandomOperand,
    );
    counterOfRound += 1;
    gameMessage(currectAnswer, userAnswer, userName, counterOfRound, brainCalcEngine);
  };
  brainCalcEngine();
};
brainCalc();
