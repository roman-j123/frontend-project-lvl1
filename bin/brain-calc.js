#!/usr/bin/env node
import { gameEngine } from '../src/index.js';
import startBrainCalcGame from '../src/games/brain-calc.js';

gameEngine(startBrainCalcGame);
