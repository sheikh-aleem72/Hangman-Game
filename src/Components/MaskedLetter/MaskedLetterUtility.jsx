export function getAllCharacters(word, usedLetter) {
  usedLetter = usedLetter.map((letter) => letter.toUpperCase());
  const guessLetters = new Set(usedLetter);
  const characters = word
    .toUpperCase()
    .split("")
    .map((char) => {
      if (guessLetters.has(char)) return char;
      else return "_";
    });

  return characters.join("");
}
