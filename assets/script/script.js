 
const games = [
  {
    id:1,
    name: 'Sorteo nº1',
    prize:'Al agua',
    roll: false
  },
  {
    id:1,
    name: 'Sorteo nº1',
    prize:'Al agua',
    roll: false
  },
  {
    id:1,
    name: 'Sorteo nº1',
    prize:'Ganaste!',
    roll: true
  },
  {
    id:2,
    name: 'Sorteo nº2',
    prize:'Al agua',
    roll: false
  },
  {
    id:2,
    name: 'Sorteo nº2',
    prize:'Al agua',
    roll: false
  },
  {
    id:2,
    name: 'Sorteo nº2',
    prize:'Ganaste',
    roll: true
  },
  {
    id:3,
    name: 'Sorteo nº3',
    prize:'Al agua',
    roll: false
  },
  {
    id:3,
    name: 'Sorteo nº3',
    prize:'Al agua',
    roll: false
  },
  {
    id:3,
    name: 'Sorteo nº3',
    prize:'Ganaste',
    roll: true
  },
];

let nombres = [
  {
    "nombre": "JUGADOR 1",
    "rut": "99.333.666-9",
    "empresa": "Area1"
  },
  {
    "nombre": "JUGADOR 2",
    "rut": "99.333.666-9",
    "empresa": "Area1"
  },
  {
    "nombre": "JUGADOR 3",
    "rut": "99.333.666-9",
    "empresa": "Area2"
  },
  {
    "nombre": "JUGADOR 4",
    "rut": "99.333.666-9",
    "empresa": "Area2"
  },
  {
    "nombre": "JUGADOR 5",
    "rut": "99.333.666-9",
    "empresa": "Area3"
  },
  {
    "nombre": "JUGADOR 6",
    "rut": "99.333.666-9",
    "empresa": "Area3"
  },
  {
    "nombre": "JUGADOR 7",
    "rut": "99.333.666-9",
    "empresa": "Area4"
  },
  {
    "nombre": "JUGADOR 8",
    "rut": "99.333.666-9",
    "empresa": "Area4"
  }
 ];
 
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const resultButton = document.getElementById('showR-btn');
const questionContainerElement = document.getElementById('question-container');
const winnersContainerElement = document.getElementById('winners-table');

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const textQuestion = document.getElementById('question-text');
const audio = document.getElementById('myAudio');
const correctSound = [document.getElementById('correctSound1'), document.getElementById('correctSound2'), document.getElementById('correctSound3')];
const wrongSound = [ document.getElementById('wrongSound1'), document.getElementById('wrongSound2'), document.getElementById('wrongSound3'), document.getElementById('wrongSound4')];

let winners, losers ;
let shuffledQuestions, currentQuestionIndex;
let loserLocalArray = []

//  Eventos 
startButton.addEventListener('click', startGame)
resultButton.addEventListener('click', showResults)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

// Audio 
function playAudio() {
  audio.play();
} 
function correctAnswerSound(r) {
  
  correctSound[r].play();
}
function wrongAnswerSound(r) { 
  wrongSound[r].play();
}

// Funcionamiento 
function showResults(){
  questionContainerElement.classList.toggle('hide');
  winnersContainerElement.classList.toggle('hide');
  resultButton.style.display = 'none'
  printfWinners(winners)
  playAudio()
}
 
function Sorteo(arr) {
  return new Promise ( (resolve, reject) => {
      setTimeout(function(){
          let rand = Math.floor(Math.random() * arr.length)
          showPossibleWinners(nombres[rand].nombre)
          resolve(rand);
          reject('Hay un error: Promise hola');
      }, 100);
  })
}

function Random(correct){
  return new Promise ( (resolve, reject) => {
    setTimeout(function(){
        let rand = Math.floor(Math.random() * 3)
        console.log(rand);
        playSoundEffectGame(correct, rand) 
        resolve();
        reject('Hay un error: Promise hola');
    }, 10);
})
}

function soundRoll(){
  return new Promise ( (resolve, reject) => {
    setTimeout(function(){
        document.getElementById('rollSound').play()
        resolve();
        reject('Hay un error: Promise hola');
    }, 0);
})
}
  
async function main(correct, prize, id){ 
  await soundRoll();
  await Sorteo(nombres);
  await Sorteo(nombres);
  await Sorteo(nombres);
  await Sorteo(nombres);
  await Sorteo(nombres);
  await Sorteo(nombres);
  await Sorteo(nombres);
  await Sorteo(nombres);
  await Sorteo(nombres);
  await Sorteo(nombres);
  await Sorteo(nombres);
  await Sorteo(nombres);
  await Sorteo(nombres);
  await Sorteo(nombres);
  await Sorteo(nombres);
  await Sorteo(nombres);
  await Sorteo(nombres);
  await Sorteo(nombres);
  await Sorteo(nombres);
  await Sorteo(nombres);
  await Sorteo(nombres);
  await Sorteo(nombres);
  await Sorteo(nombres);
  await Sorteo(nombres);
  await Sorteo(nombres);
  await Sorteo(nombres);
  await Sorteo(nombres);
  await Sorteo(nombres);
  await Sorteo(nombres);
  await Sorteo(nombres);
  await Sorteo(nombres);
  await Sorteo(nombres);
  await Sorteo(nombres);
  await Sorteo(nombres);
  await Sorteo(nombres);
  await Sorteo(nombres);
  await Sorteo(nombres);
  await Sorteo(nombres);
  await Sorteo(nombres);
  await Sorteo(nombres);
  await Sorteo(nombres);
  await Sorteo(nombres);
  await Sorteo(nombres);
  await Sorteo(nombres);
  await Sorteo(nombres);
  await Sorteo(nombres);
  await Sorteo(nombres);
  await Sorteo(nombres);
  await Sorteo(nombres);
  await Sorteo(nombres);
  await Sorteo(nombres);
  await Sorteo(nombres);
  await Sorteo(nombres);
  await Sorteo(nombres);
  await Sorteo(nombres);
  await Sorteo(nombres);
  await Sorteo(nombres);
  await Sorteo(nombres);
  await Sorteo(nombres);
  await Sorteo(nombres);
  await Sorteo(nombres);
  await Sorteo(nombres);
  await Sorteo(nombres);
  await Sorteo(nombres);
  await Sorteo(nombres);
  await Sorteo(nombres);
  await Sorteo(nombres);
  await Sorteo(nombres);
  await Sorteo(nombres);
  await Sorteo(nombres);
  await Random(correct);
   
  let win = await Sorteo(nombres);
  console.log(`el premio es para : ${ nombres[win].nombre }`)
  console.log('Terminando Proceso..')
  
  // let counter = []
  // let partidas= [];
  // counter.push(id) 
  
  showWinner(win)
  setWinners(win,correct)
  selectAnswer(correct) 
  showBadge(correct, prize)
  removeItemFromArr(nombres, nombres[win])
  // console.log('el id es '+id);
  console.log(nombres)
  // setAudio(correct)
} 

function playSoundEffectGame(n,r){
  if(n){
    correctAnswerSound(r);
  }else{ 
    wrongAnswerSound(r);
  }
}

function printfWinners(arr){
  for (let i = 0; i < arr.length; i++) {
   winnersContainerElement.innerHTML += `<div class="card">
    <p>Sorteo nº${i + 1}</p>
    <p>${arr[i].nombre}</p>
    <p>${arr[i].rut}</p>
    <p>${arr[i].empresa}</p>
  </div>`;
  }

}

function removeItemFromArr(arr,item ){
  var i = arr.indexOf( item );
  if ( i !== -1 ) {
      arr.splice( i, 1 );
  }
}

function showPossibleWinners(winnerG){
  textQuestion.textContent = winnerG;
}
function showWinner(winnerG){
  textQuestion.innerHTML = `<span>${nombres[winnerG].nombre}</span><span>${nombres[winnerG].rut}</span><span>${nombres[winnerG].empresa}</span>`;
}

function startGame() { 
  winners = [];
  losers = [];
  // playAudio();
  startButton.classList.add('hide')
  shuffledQuestions = games.sort() 
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion() 
}
function setWinners(winnerG, correct, id){
  if(correct){
    winners.push(nombres[winnerG]); 
    console.log('nuevo juego')
    nombres.push(losers[0])
    nombres.push(losers[1])
    losers=[];
    console.log(losers) 
    return winners;
  }else{
    losers.push(nombres[winnerG]);  
    if(losers.length === 2 ){
      loserLocalArray.push(losers)  
      console.log(losers)
    }else{
      console.log(losers)
    }
    console.log(winners) 
    console.log(loserLocalArray);
  }
}
function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(games) {
  questionElement.innerHTML = `<span>${games.name}</span>`;
  main(games.roll, games.prize, games.id) 
}

function showBadge(correct,prize){
  const button = document.createElement('div');
  button.innerText = prize;
  if(correct){
    button.classList.add('badge');
  }else{
    button.classList.add('badge-lose');
  } 
  answerButtonsElement.appendChild(button);
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add('hide');
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(correct) {
  setStatusClass(document.body, correct);
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide');
  } else {
    resultButton.innerText = 'Ver resultados';
    resultButton.classList.remove('hide');
  }
}
  
function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add('correct');
    Array.from(answerButtonsElement.children).forEach(button => {
      button.disabled = true
    })
  }else{  
    element.classList.add('wrong'); 
  }
}
 
function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
} 
