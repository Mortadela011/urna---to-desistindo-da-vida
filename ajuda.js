let voteInput = document.querySelectorAll('.number-input input');
let currentInput = 0;

const candidateInfo = document.getElementById('candidate-info');
const candidatePhoto = document.getElementById('candidate-photo');
const candidateName = document.getElementById('candidate-name');
const candidateNumber = document.getElementById('candidate-number');



let votos = {
  pedroVoto: 0,  // 13
  helderVoto: 0, // 12
  mossmannVoto: 0, // 22
  pietroVoto: 0, // 38
  heirotVoto: 0  // 24
};

const numerosCandidatos = {
  13: "pedroVoto",
  12: "helderVoto",
  22: "mossmannVoto",
  38: "pietroVoto",
  24: "heirotVoto"
};



function pressKey(key) {
  if (currentInput < voteInput.length) {
    voteInput[currentInput].value = key;
    currentInput++;
  }
}

function whiteVote() {
  candidateName.textContent = "Votou em branco";
  setTimeout(() => {
    window.location.href = "telavoto2.html"; // Redireciona para a segunda tela após 5 segundos
  }, 5000); // 5000 milissegundos = 5 segundos
  resetInput();

}

function correct() {
  resetInput();
}

function confirmAndRedirect() {
  confirm(); // Chama a função de confirmação para mostrar os dados do candidato
  
  setTimeout(() => {
    window.location.href = "telavoto2.html"; // Redireciona para a segunda tela após 5 segundos
  }, 5000); // 5000 milissegundos = 5 segundos
}


function confirm() {

  let vote = Array.from(voteInput).map(input => input.value).join('');

 
 
 
 



  if (vote.length === 2) {
    switch (vote) {
      case "13":
        candidatePhoto.src = "img/pedro.jfif"; // Substitua pelo caminho correto da imagem
        candidateName.textContent = "Votou no Pedroga";
        candidateNumber.textContent = "Número: 13";
        votos.pedroVoto++;
        break;

      case "12":
        candidatePhoto.src = "img/helder ultimate.jfif"; // Substitua pelo caminho correto da imagem
        candidateName.textContent = "Votou no Helder";
        candidateNumber.textContent = "Número: 12";
        votos.helderVoto++;
        break;

      case "22":
        candidatePhoto.src = "img/mossman.jpg"; // Substitua pelo caminho correto da imagem
        candidateName.textContent = "Votou no Mossmann";
        candidateNumber.textContent = "Número: 22";
        votos.mossmannVoto++;
        break;

      case "38":
        candidatePhoto.src = "img/eu matrix.jpg"; // Substitua pelo caminho correto da imagem
        candidateName.textContent = "Votou no Pietro Tabajara";
        candidateNumber.textContent = "Número: 38";
        votos.pietroVoto++;
        break;

      case "24":
        candidatePhoto.src = "img/heitor-flor.jpg"; // Substitua pelo caminho correto da imagem
        candidateName.textContent = "Votou no Heirot";
        candidateNumber.textContent = "Número: 24";
        alert("Votou no Heirot.");
        votos.heirotVoto++;
        break;

      default:
        alert("Número de candidato inválido. Voto nulo.");
        candidatePhoto.style.display = "none";
        candidateName.textContent = "Voto nulo";
        candidateNumber.textContent = "";
        return;
    }

    candidatePhoto.style.display = "block";
    resetInput();
  } else {
    alert("Por favor, insira os dois dígitos.");
  }


  resetInput();
}



function resetInput() {
  voteInput.forEach(input => input.value = '');
  currentInput = 0;
} 