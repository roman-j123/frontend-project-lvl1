#!/usr/bin/env node
import { gameEngine } from '../src/index.js';
import startBrainProgressionGame from '../src/games/brain-progression.js';

gameEngine(startBrainProgressionGame);
