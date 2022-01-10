#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  MIN_VALUE,
  MAX_VALUE,
  MAX_ROUNDS,
  ROUND_COUNTER,
  getRandomExpression,
  checkExpressionResult,
  name,
} from '../src/index.js';

const brainCalc = () => {
  const userName = name;
  let counterOfCurrectValues = ROUND_COUNTER;
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
    if (currentAnswer === userAnswer) {
      counterOfCurrectValues += 1;
      if (counterOfCurrectValues === 3) {
        console.log(`Congratulations, ${userName}!`);
      }
      if (counterOfCurrectValues < MAX_ROUNDS) {
        console.log('Correct!');
        brainCalcEngine();
      }
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${currentAnswer}'. \n Let's try again, ${name}!`);
    }
  };
  brainCalcEngine();
};
brainCalc(MIN_VALUE, MAX_VALUE);
