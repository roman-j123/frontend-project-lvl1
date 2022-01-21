#!/usr/bin/env node
import { gameEngine } from '../src/index.js';
import brainGcdEngine from '../src/games/brain-gcd.js';

gameEngine(brainGcdEngine, 'Find the greatest common divisor of given numbers.');
