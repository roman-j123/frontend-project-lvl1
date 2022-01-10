#!/usr/bin/env node

import createUserName from '../src/cli.js';

const welcomeMessage = () => {
  const name = createUserName();
  return name;
};
welcomeMessage();

export default welcomeMessage;
