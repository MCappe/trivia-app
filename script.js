// Pseudo Code
// Upon loading, user is shown an animation about playing a trivia game with 3 options to choose subjects (Entertainment, General, Fun Facts)
  // Each subject will have 10-15 random questions pre-loaded in an array of objects
// Once the user selects their subject, a timer will count down 5 seconds until first question appears
// Each question will have a 10 second timer
// They will have 10 questions to answer and they will always know what question they are on because of a tally at the bottom of the question box (question 1 of 10, for example)
// Each question will be a button
// If the answer is correct, a message below the answers will display, CORRECT, if incorrect, it will say INCORRECT and will hover over the correct answer.
// After an answer is selected, whether correct or incorrect, the user will be shown a button to go to the next question
// Once all questions are answered, they user will be shown a tally of the ones they got correct and incorrect 
// The user will be given the option to play again, which will bring them back to the original screen with the subject options
  // subject options will also be available in the top header nav, so they can interrupt their current game to go to another subject if they choose (but will get an alert asking if they'd like to end the current game)


const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choiceText'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
  {
    question: `Which actor voiced both Darth Vader and The Lions King's Mufasa?`,
    choice1: 'James Earl Jones',
    choice2: 'Morgan Freeman',
    choice3: 'Sean Connery',
    choice4: 'Christopher Lee',
    correctAnswer: 1,
  },
  {
    question: `What is Chandler Bing's middle name?`,
    choice1: 'Maxwell',
    choice2: 'Muriel',
    choice3: 'Moses',
    choice4: 'Mildred',
    correctAnswer: 2,
  },
  {
    question: `What is the name of Michelle Obama's 2018 memoir?`,
    choice1: 'Become',
    choice2: 'The Future',
    choice3: 'Becoming',
    choice4: 'Became',
    correctAnswer: 3,
  },
  {
    question: `What was the first non-English-language film to win Best Picture at the Oscars?`,
    choice1: 'Crouching Tiger, Hidden Dragon',
    choice2: 'Life is Beautiful',
    choice3: 'Parasite',
    choice4: 'Cries and Whispers',
    correctAnswer: 3,
  },
  {
    question: `Which pop star is the godmother of both Elton John's sons?`,
    choice1: 'Lady Gaga',
    choice2: 'Madonna',
    choice3: 'Beyoncé',
    choice4: 'Adele',
    correctAnswer: 1,
  },
  {
    question: `What is Kramer's first name on Seinfeld?`,
    choice1: 'Sunshine',
    choice2: 'Cosmo',
    choice3: 'Krusty',
    choice4: 'Homer',
    correctAnswer: 2,
  },
  {
    question: `Who is the half-blood prince in Harry Potter?`,
    choice1: 'Harry Potter',
    choice2: 'Tom Riddle',
    choice3: 'James Potter',
    choice4: 'Severus Snape',
    correctAnswer: 4,
  },
  {
    question: `Which pop star burnt down her home gym with candles?`,
    choice1: 'Britney Spears',
    choice2: 'Dua Lipa',
    choice3: 'Billie Eilish',
    choice4: 'JLo',
    correctAnswer: 1,
  },
  {
    question: `What movie in 2019 topped Avatar as the highest-grossing film of all time?`,
    choice1: 'Joker',
    choice2: 'Captain Marvel',
    choice3: 'Star Wars: The Rise of Skywalker',
    choice4: 'Avengers: Endgame',
    correctAnswer: 4,
  },
  {
    question: `In 2020, Netflix aired a reality show that required participants to remain celibate. What was it called?`,
    choice1: 'The Circle',
    choice2: 'Love is Blind',
    choice3: 'Dating Around',
    choice4: 'Too Hot to Handle',
    correctAnswer: 4,
  },
  {
    question: `What country is brie cheese originally from?`,
    choice1: 'France',
    choice2: 'England',
    choice3: 'India',
    choice4: 'United States',
    correctAnswer: 1,
  },
  {
    question: `What does Ir stand for on the periodic table`,
    choice1: 'Iodine',
    choice2: 'Iron',
    choice3: 'Iridium',
    choice4: 'Indium',
    correctAnswer: 3,
  },
  {
    question: `Which planet is closest to the sun?`,
    choice1: 'Uranus',
    choice2: 'Mars',
    choice3: 'Earth',
    choice4: 'Mercury',
    correctAnswer: 4,
  },
  {
    question: `What is the largest country in the world?`,
    choice1: 'India',
    choice2: 'China',
    choice3: 'Russia',
    choice4: 'Canada',
    correctAnswer: 3,
  },
  {
    question: `Which fashion designer reportedly had a relationship with Winston Churchill?`,
    choice1: 'Edith Head',
    choice2: 'Coco Chanel',
    choice3: 'Betsey Johnson',
    choice4: 'Diano von Furstenberg',
    correctAnswer: 2,
  },
  {
    question: `If you have cryophobia, what are you afraid of?`,
    choice1: 'Fear of heights',
    choice2: 'Fear of blood',
    choice3: 'Fear of water',
    choice4: 'Fear of ice or cold',
    correctAnswer: 4,
  },
  {
    question: `What was the first state in the United States?`,
    choice1: 'Florida',
    choice2: 'Virginia',
    choice3: 'Texas',
    choice4: 'Delaware',
    correctAnswer: 4,
  },
  {
    question: `What is the third sign of the zodiac?`,
    choice1: 'Capricorn',
    choice2: 'Aquarius',
    choice3: 'Gemini',
    choice4: 'Libra',
    correctAnswer: 3,
  },
  {
    question: `What language has the most words?`,
    choice1: 'English',
    choice2: 'Mandarin',
    choice3: 'Spanish',
    choice4: 'Hebrew',
    correctAnswer: 1,
  },
  {
    question: `Who is the author of Jurassic Park?`,
    choice1: 'Dean Koontz',
    choice2: 'Michael Crichton',
    choice3: 'James Patterson',
    choice4: 'John Grisham',
    correctAnswer: 2,
  },
];

const SCORE_POINTS = 1
const MAX_QUESTIONS = 10

startGame = () => {
  questionCounter = 0
  score = 0
  availableQuestions = [...questions]
  getNewQuestion()
}

getNewQuestion = () => {
  if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
    localStorage.setItem('mostRecentScore', score)
    return window.location.assign('/end.html')
  }

  questionCounter++
  progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`

  const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
  currentQuestion = availableQuestions[questionsIndex]
  question.innerText = currentQuestion.question

  choices.forEach(choice => {
    const number = choice.dataset['number']
    choice.innerText = currentQuestion['choice' + number]
  })

  availableQuestions.splice(questionsIndex, 1)
  acceptingAnswers = true
}

choices.forEach(choice => {
  choice.addEventListener('click', e => {
    if(!acceptingAnswers) return

    acceptingAnswers = false
    const selectedChoice = e.target
    const selectedAnswer = selectedChoice.dataset['number']

    let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

    if(classToApply === 'correct') {
      incrementScore(SCORE_POINTS)
    }

    selectedChoice.parentElement.classList.add(classToApply)

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply)
      getNewQuestion()
    }, 1000)
  })
})

incrementScore = num => {
  score += num
  scoreText.innerText = score
}

startGame()