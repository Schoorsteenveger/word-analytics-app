const textareaElement = document.querySelector('.textarea');
const charactersNumberElement = document.querySelector('.stat__number--characters');
const twitterNumberElement = document.querySelector('.stat__number--x');
const facebookNumberElement = document.querySelector('.stat__number--facebook');
const wordsNumberElement = document.querySelector('.stat__number--words');
const clearButton = document.querySelector('.icon__clear');

textareaElement.addEventListener('input', () => {
  validateInput()
  updateStats()
});

const validateInput = () => {
  if (textareaElement.value.includes('<script>')) {
    alert("Please don't hack my beautiful counter!");
    textareaElement.value = textareaElement.value.replace('<script>', '')
  }
}

const updateStats = () => {
  const numberOfCharacters = textareaElement.value.length
  const twitterCharactersLeft = 280 - numberOfCharacters
  const facebookCharactersLeft = 2200 - numberOfCharacters
  let numberOfWords = textareaElement.value.split(' ').length;
  if (textareaElement.value.length === 0) {
    numberOfWords = 0
  }

  charactersNumberElement.textContent = numberOfCharacters;
  twitterNumberElement.textContent = twitterCharactersLeft;
  facebookNumberElement.textContent = facebookCharactersLeft;
  wordsNumberElement.textContent = numberOfWords;

  twitterNumberElement.classList.toggle("stat__number--limit", twitterCharactersLeft < 0);
  facebookNumberElement.classList.toggle("stat__number--limit", facebookCharactersLeft < 0);

}

const clearTextarea = () => {
  textareaElement.value = '';

  charactersNumberElement.textContent = '0';
  twitterNumberElement.textContent = '280';
  facebookNumberElement.textContent = '2200';
  wordsNumberElement.textContent = '0';

  twitterNumberElement.classList.remove("stat__number--limit");
  facebookNumberElement.classList.remove("stat__number--limit");
}

clearButton.addEventListener('click', clearTextarea);

