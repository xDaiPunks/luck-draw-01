/* The code for the first Lucky Draw on xDaiPunks
 * The draw array will be updated with public addresses from the google form
 */

const fs = require('fs');

const numberOfDraws = 5;
const numberOfContestants = 104;

// Punks that are in this draw
const xDaiPunkArray = ['#592', '#1447', '#1766', '#8709', '#8773'];

const drawArray = Array.from({ length: numberOfContestants }, (v, k) => k);
const randomArray = shuffleArray(drawArray);
const randomPunkArray = shuffleArray(xDaiPunkArray);

const drawResult = randomArray.slice(0, numberOfDraws);

const finalResult = [];
for (let i = 0, iCount = drawResult.length; i < iCount; i++) {
  finalResult.push({ index: drawResult[i], awardedPunk: randomPunkArray[i] });
}

console.log('In xDaiPunk style, The winners are', finalResult);
fs.writeFileSync('finalResults.json', JSON.stringify(finalResult));
console.log(fs.readFileSync('finalResults.json', 'utf8'));

// Randomize array in-place using Durstenfeld shuffle algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}
