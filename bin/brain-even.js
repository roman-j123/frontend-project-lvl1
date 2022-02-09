#!/usr/bin/env node
import { gameEngine } from '../src/index.js';
import startBrainEvenGame from '../src/games/brain-even.js';

gameEngine(startBrainEvenGame);
