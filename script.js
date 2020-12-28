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

// let foodFactsQuestions = [
//   {
//     question: `What is the most expensive spice in the world by weight?`,
//     answers: ['Nutmeg', 'Basil', 'Saffron', 'Old Bay'],
//     correctAnswer: 'Saffron'
//   },
//   {
//     question: `What cheese is traditionally used on a Reuben sandwich?`,
//     answers: ['Camembert', 'Swiss', 'Mozzarella', 'Bleu Cheese'],
//     correctAnswer: 'Swiss'
//   },
//   {
//     question: `Who invented spray cheese in a can?`,
//     answers: ['Kellogs', 'Keebler', 'Dare Foods', 'Nabisco'],
//     correctAnswer: 'Nabisco'
//   },
//   {
//     question: `Which pasta shape has a name meaning little tongues?`,
//     answers: ['Linguini', 'Tortellini', 'Ravioli', 'Macaroni'],
//     correctAnswer: 'Linguini'
//   },
//   {
//     question: `In which country might you be invited to a "hāngi", where your food would be roasted in a pit under the ground?`,
//     answers: ['United States', 'Greece', 'Phillipines', 'New Zealand'],
//     correctAnswer: 'New Zealand'
//   },
//   {
//     question: `Norway was responsible for introducing what fish for raw consumption in Japan?`,
//     answers: ['Tuna', 'Sea bass', 'Salmon', 'Mackerel'],
//     correctAnswer: 'Salmon'
//   },
//   {
//     question: `The mojito is a traditional rum cocktail from which country?`,
//     answers: ['Cuba', 'Mexico', 'Venezuela', 'Panama'],
//     correctAnswer: 'Cuba'
//   },
//   {
//     question: `Originally from Quebec, what food comes from the local french slang word for a "mess"?`,
//     answers: ['Cretons', 'Poutine', 'Sugar Pie', 'Pea Soup'],
//     correctAnswer: 'Poutine'
//   },
//   {
//     question: `Which fast food restaurant chain once tested bubble gum broccoli as a children's menu item?`,
//     answers: ['Burger King', 'White Castle', 'McDonalds', 'A&W'],
//     correctAnswer: 'McDonalds'
//   },
//   {
//     question: `Where was the fortune cookie invented?`,
//     answers: ['California', 'Bangkok', 'Beijing', 'Ontario'],
//     correctAnswer: 'California'
//   }
// ];


