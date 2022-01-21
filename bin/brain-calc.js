#!/usr/bin/env node
import { gameEngine } from '../src/index.js';
import brainCalcEngine from '../src/games/brain-calc.js';

gameEngine(brainCalcEngine, 'What is the result of the expression?');
