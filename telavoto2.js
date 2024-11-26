

let voteInput = document.querySelectorAll('.numero input');
let currentInput = 0;


var pedroVoto = 0;
var helderVoto =0;
var mossmannVoto=0;
var pietroVoto= 0;
var heirotVoto= 0;



var curioVoto = 0;
var otavioVoto = 0;
var rafaelVoto = 0;
var cachorroPietroVoto = 0;
var welVoto = 0;


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
    if(vote == 13){
      alert("Votou no curió. Número: "  + vote); 
      curioVoto++;
    }
    else if(vote == 99){
      alert("Votou no Otávio. Número: "  + vote); 
      otavioVoto++;
    }
    else if(vote == 22){
      alert("Votou no Rafael. Número: "  + vote); 
      rafaelVoto++;
    }
    else if(vote == 38){
      alert("Votou no cachorro do Pietro. Número: "  + vote); 
      cachorroPietroVoto++;
    }
    else if(vote == 24){
      alert("Votou no WelWel. Número: "  + vote); 
      welVoto++;
    }
    else{
      alert("Número de candidato inválido. Voto nulo"); 
    }  
  } 
  
  else {
    alert("Por favor, insira os dois dígitos.");
  }
  resetInput();

}

function resetInput() {
  voteInput.forEach(input => input.value = '');
  currentInput = 0;
}


console.log(`O Pedroga possuí ${pedroVoto} votos`);
console.log(`O Helder possuí ${helderVoto} votos`);
console.log(`O Mossmann possuí ${mossmannVoto} votos`);
console.log(`O Pietro Tabajara possuí ${pietroVoto} votos`);
console.log(`O Heirot possuí ${heirotVoto} votos`);
