const capitalize = (words) => {
  const wordsList = words.split(' ');
  const capitalizedWords = [];
  wordsList.forEach((word) => {
    const firstLetter = word.charAt(0);
    const restOfWord = word.slice(1);
    const capitalizedWord = firstLetter.toUpperCase() + restOfWord;
    capitalizedWords.push(capitalizedWord);
  });

  return capitalizedWords.join(' ');
};

export default capitalize;
