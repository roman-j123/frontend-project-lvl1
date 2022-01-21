#!/usr/bin/env node
import { gameEngine } from '../src/index.js';
import brainPrimeEngine from '../src/games/brain-prime.js';

gameEngine(brainPrimeEngine, 'Answer "yes" if given number is prime. Otherwise answer "no".');
