const WORDS = [
  ['aba', 'ama'],
  ['netflix', 'youtube'],
  ['stam', 'dvarim'],
];

const shuffleFunc = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const generateWords = (players) => {
  goodGuys = 0;
  badGuys = 0;
  noWord = 0;
  // even players number
  if (players % 2 === 0) {
    goodGuys = players / 2;
    badGuys = players / 2 - 1;
  }
  // odd players number
  else {
    goodGuys = Math.ceil(players / 2);
    goodGuys = Math.ceil(players / 2) - 2;
  }
  wordsPair = shuffleFunc(WORDS)[0];
  goodWord = wordsPair[0];
  badWord = wordsPair[1];

  const goodArray = Array(goodGuys).fill(goodWord);
  const badArray = Array(badGuys).fill(badWord);
  const noWord = [''];
  let result = goodArray.concat(badArray).concat(noWord);

  return shuffleFunc(result);
};

export default generateWords;
