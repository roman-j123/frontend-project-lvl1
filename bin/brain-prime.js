#!/usr/bin/env node
import { gameEngine } from '../src/index.js';
import startBrainPrimeGame from '../src/games/brain-prime.js';

gameEngine(startBrainPrimeGame);
