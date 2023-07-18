const resultStr = prompt('Введіть ваш текст.');
const resultArr = resultStr.split(' ');

const returnArrLetters = (arrWords) => {
  const arrLetter = [];

  for (const word of arrWords) {
    const uniqCh = [...word].filter((ch, i, arr) => arr.indexOf(ch) === i);
    const repitCh = [...word].filter((ch, i, arr) => arr.indexOf(ch) !== i);

    for (const ch of uniqCh) {
      if (!repitCh.includes(ch)) {
        arrLetter.push(ch);
        break;
      }
    }
  }

  return arrLetter;
};

const searchUniqueLetter = (letters) => {
  const uniqCh = letters.filter((ch, i, arr) => arr.indexOf(ch) === i);
  const repitCh = letters.filter((ch, i, arr) => arr.indexOf(ch) !== i);

  for (const ch of uniqCh) {
    if (!repitCh.includes(ch)) {
      return ch;
    }
  }
};

alert(`По вашому запиту знайдено літеру: '${searchUniqueLetter(returnArrLetters(resultArr))}'`);