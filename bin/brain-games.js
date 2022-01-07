#!/usr/bin/env node
import createUserName from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = createUserName();
console.log(`Hello, ${name}!`);
