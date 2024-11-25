let voteInput = document.querySelectorAll('.number-input input');
let currentInput = 0;

function pressKey(key) {
  if (currentInput < voteInput.length) {
    voteInput[currentInput].value = key;
    currentInput++;
  }
}

function whiteVote() {
  resetInput();
  alert("Voto em Branco");
}

function correct() {
  resetInput();
}

function confirm() {
  let vote = Array.from(voteInput).map(input => input.value).join('');
  if (vote.length === 2) {
    alert("Voto Confirmado: " + vote);
  } else {
    alert("Por favor, insira os dois dígitos.");
  }
  resetInput();
}

function resetInput() {
  voteInput.forEach(input => input.value = '');
  currentInput = 0;
}