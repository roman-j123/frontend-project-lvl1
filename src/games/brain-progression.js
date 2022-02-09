import getRandomNumber from '../random.js';

const generateProgression = (start, step, progressionLength) => {
  const progressionArray = [];
  for (let i = start; progressionArray.length <= progressionLength; i += 1) {
    const indexValue = start + step * i;
    progressionArray.push(indexValue);
  }
  return progressionArray;
};

const brainProgression = () => {
  const lengthOfProgression = getRandomNumber(5, 15);
  const stepOfProgression = getRandomNumber(1, 10);
  const startPoint = getRandomNumber(1, 15);
  const secretPoint = getRandomNumber(0, lengthOfProgression);
  const progression = generateProgression(startPoint, stepOfProgression, lengthOfProgression);
  const correctAnswer = progression[secretPoint];
  progression.splice(secretPoint, 1, '..');
  const question = progression.join(' ');
  return { correctAnswer, question };
};
export default brainProgression;
