#!/usr/bin/env node
import { gameEngine } from '../src/index.js';
import brainCalc from '../src/games/brain-calc.js';

gameEngine(brainCalc, 'What is the result of the expression?');
