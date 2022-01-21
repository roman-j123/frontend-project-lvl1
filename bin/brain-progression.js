#!/usr/bin/env node
import { gameEngine } from '../src/index.js';
import brainProgressionEngine from '../src/games/brain-progression.js';

gameEngine(brainProgressionEngine, 'What number is missing in the progression?');
