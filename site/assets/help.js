(() => {
  const board = document.querySelector('[data-helper]');
  if (!board) return;

  const choices = board.querySelector('#problem-choices');
  const answers = [...board.querySelectorAll('[data-answer]')];
  const buttons = [...board.querySelectorAll('[data-problem]')];
  const step = board.querySelector('#helper-step');
  const status = board.querySelector('#helper-status');
  const title = board.querySelector('#helper-title');
  const intro = board.querySelector('#helper-intro');
  if (!choices || answers.length !== 4 || buttons.length !== 4 || !step || !status || !title || !intro) return;

  let selectedButton = null;

  const reset = () => {
    answers.forEach((answer) => { answer.hidden = true; });
    choices.hidden = false;
    title.hidden = false;
    intro.hidden = false;
    board.classList.remove('has-answer');
    step.textContent = 'Step 1 of 2 · Choose a problem';
    status.textContent = 'Choose the problem you need help with.';
    if (selectedButton) selectedButton.focus();
  };

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const target = answers.find((answer) => answer.dataset.answer === button.dataset.problem);
      if (!target) return;
      selectedButton = button;
      answers.forEach((answer) => { answer.hidden = answer !== target; });
      choices.hidden = true;
      title.hidden = true;
      intro.hidden = true;
      board.classList.add('has-answer');
      step.textContent = 'Step 2 of 2 · Your next steps';
      status.textContent = `Showing help: ${button.textContent.trim()}`;
      target.querySelector('h3').focus();
    });
  });

  board.querySelectorAll('[data-reset]').forEach((button) => {
    button.addEventListener('click', reset);
    button.hidden = false;
  });

  board.classList.add('enhanced');
  title.textContent = 'What’s getting in the way?';
  intro.textContent = 'Pick the problem that sounds like yours. We’ll show you a few things to try.';
  reset();
})();
