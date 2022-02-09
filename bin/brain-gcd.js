#!/usr/bin/env node
import { gameEngine } from '../src/index.js';
import brainGcd from '../src/games/brain-gcd.js';

gameEngine(brainGcd, 'Find the greatest common divisor of given numbers.');
