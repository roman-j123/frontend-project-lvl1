#!/usr/bin/env node
import { gameEngine } from '../src/index.js';
import brainProgression from '../src/games/brain-progression.js';

gameEngine(brainProgression, 'What number is missing in the progression?');
