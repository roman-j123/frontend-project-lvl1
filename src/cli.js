import readlineSync from 'readline-sync';

const createUserName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};

export default createUserName;
