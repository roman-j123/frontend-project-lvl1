#!/usr/bin/env node
import { gameEngine } from '../src/index.js';
import brainEvenEngine from '../src/games/brain-even.js';

gameEngine(brainEvenEngine, 'Answer "yes" if given number is prime. Otherwise answer "no".');
