#!/usr/bin/env node
/* eslint-disable no-console */
/* eslint-disable-next-line import/extensions */
import userName from '../src/cli.js'

console.log('Welcome to the Brain Games!')
const name = userName()
console.log(`Hello, ${name}!`)
