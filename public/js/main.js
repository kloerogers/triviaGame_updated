const playerSelect = document.querySelector('#numPlayerSelect'),
  p1NameInput = document.querySelector('#pOneNameInput'),
  p2NameInput = document.querySelector('#pTwoNameInput'),
  p2Name = document.querySelector('#playerTwoName'),
  categoryInput = document.querySelector('#categorySelect'),
  difficultyInput = document.querySelector('#difficultySelect'),
  gameStartButton = document.querySelector('#gameStart');

const numberPlayersHandler = () => {
  playerSelect.value === 'two' ? p2Name.classList.toggle('hidden') : p2Name.classList.toggle('hidden');
};
const gameStartHandler = () => {
  const p1NameValidated = p1NameInput.value !== '' ? p1NameInput.value : 'Player One',
    p2NameValidated = p2NameInput.value !== '' ? p2NameInput.value : 'Player Two',
    categoryValidated = categoryInput.value !== '' ? categoryInput.value : 'any',
    difficultyValidated = difficultyInput.value !== '' ? difficultyInput.value : 'any';
  console.log(`
  Player one: ${p1NameValidated}
  Player two: ${p2NameValidated}
  Category: ${categoryValidated}
  Difficulty: ${difficultyValidated}
  `);
  p2Name.classList.contains('hidden') ? '' : p2Name.classList.toggle('hidden');
  document.querySelector('form').reset();
};

playerSelect.addEventListener('change', numberPlayersHandler);
gameStartButton.addEventListener('click', gameStartHandler);
