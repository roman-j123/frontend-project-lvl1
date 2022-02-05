import getRandomNumber from '../random.js';

const generateProgressionLine = (start, step, progressionLength) => {
  const progressionArray = [];
  for (let i = start; progressionArray.length <= progressionLength; i += 1) {
    const indexValue = start + step * i;
    progressionArray.push(indexValue);
  }
  return progressionArray;
};

const brainProgressionEngine = () => {
  const lengthOfArray = getRandomNumber(5, 15);
  const stepOfProgression = getRandomNumber(1, 10);
  const startPoint = getRandomNumber(1, 15);
  const secretPoint = getRandomNumber(0, lengthOfArray);
  const progression = generateProgressionLine(startPoint, stepOfProgression, lengthOfArray);
  const correctAnswer = progression[secretPoint];
  progression.splice(secretPoint, 1, '..');
  const question = `Question: ${progression.join(' ')}`;
  return { correctAnswer, question };
};
export default brainProgressionEngine;
