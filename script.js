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

// Questions for Entertainment

const entertainmentQuestions = [
  {
    question: `Which actor voiced both Darth Vader and The Lions King's Mufasa?`,
    answers: ['James Earl Jones', 'Morgan Freeman', 'Sean Connery', 'Christopher Lee'],
    correctAnswer: 'James Earl Jones'
  },
  {
    question: `What is Chandler Bing's middle name?`,
    answers: ['Maxwell', 'Muriel', 'Moses', 'Mildred'],
    correctAnswer: 'Muriel'
  },
  {
    question: `What is the name of Michelle Obama's 2018 memoir?`,
    answers: ['Become', 'The Future', 'Becoming', 'Became'],
    correctAnswer: 'Becoming'
  },
  {
    question: `What was the first non-English-language film to win Best Picture at the Oscars?`,
    answers: ['Crouching Tiger, Hidden Dragon', 'Life is Beautiful', 'Parasite', 'Cries and Whispers' ],
    correctAnswer: 'Parasite'
  },
  {
    question: `Which pop star is the godmother of both Elton John's sons?`,
    answers: ['Lady Gaga', 'Madonna', 'Beyoncé', 'Adele'],
    correctAnswer: 'Lady Gaga'
  },
  {
    question: `What is Kramer's first name on Seinfeld?`,
    answers: ['Sunshine', 'Cosmo', 'Krusty', 'Homer'],
    correctAnswer: 'Cosmo'
  },
  {
    question: `Who is the half-blood prince in Harry Potter?`,
    answers: ['Harry Potter', 'Tom Riddle', 'James Potter', 'Severus Snape'],
    correctAnswer: 'Severus Snape'
  },
  {
    question: `Which pop star burnt down her home gym with candles?`,
    answers: ['Britney Spears', 'Dua Lipa', 'Billie Eilish', 'JLo'],
    correctAnswer: 'Britney Spears'
  },
  {
    question: `What movie in 2019 topped Avatar as the highest-grossing film of all time?`,
    answers: ['Joker', 'Captain Marvel', 'Star Wars: The Rise of Skywalker', 'Avengers: Endgame'],
    correctAnswer: 'Avengers: Endgame'
  },
  {
    question: `In 2020, Netflix aired a reality show that required participants to remain celibate. What was it called?`,
    answers: ['The Circle', 'Love is Blind', 'Dating Around', 'Too Hot to Handle'],
    correctAnswer: 'Too Hot to Handle'
  }
];

const generalQuestions = [
  {
    question: `What country is brie cheese originally from?`,
    answers: ['France', 'England', 'India', 'United States'],
    correctAnswer: 'France'
  },
  {
    question: `What does Ir stand for on the periodic table`,
    answers: ['Iodine', 'Iron', 'Iridium', 'Indium'],
    correctAnswer: 'Iridium'
  },
  {
    question: `Which planet is closest to the sun?`,
    answers: ['Uranus', 'Mars', 'Earth', 'Mercury'],
    correctAnswer: 'Mercury'
  },
  {
    question: `What is the largest country in the world?`,
    answers: ['India', 'Antarctica', 'Russia', 'Canada'],
    correctAnswer: 'Russia'
  },
  {
    question: `Which fashion designer reportedly had a relationship with Winston Churchill?`,
    answers: ['Edith Head', 'Coco Chanel', 'Betsey Johnson', 'Diane von Furstenberg'],
    correctAnswer: 'Coco Chanel'
  },
  {
    question: `If you have cryophobia, what are you afraid of?`,
    answers: ['Fear of heights', 'Fear of blood', 'Fear of water', 'Fear of ice or cold'],
    correctAnswer: 'Fear of ice or cold'
  },
  {
    question: `What was the first state in the United States?`,
    answers: ['Florida', 'Virginia', 'Texas', 'Delaware'],
    correctAnswer: 'Delaware'
  },
  {
    question: `What is the third sign of the zodiac?`,
    answers: ['Capricorn', 'Aquarius', 'Gemini', 'Libra'],
    correctAnswer: 'Gemini'
  },
  {
    question: `What language has the most words?`,
    answers: ['English', 'Mandarin', 'Spanish', 'Hebrew'],
    correctAnswer: 'English'
  },
  {
    question: `Who is the author of Jurassic Park?`,
    answers: ['Dean Koontz', 'Michael Crichton', 'James Patterson', 'John Grishom'],
    correctAnswer: 'Michael Crichton'
  }
];

const foodFactsQuestions = [
  {
    
  }
]