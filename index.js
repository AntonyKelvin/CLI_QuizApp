const readLineSync = require('readline-sync');

class Question{
  constructor(question,optionA,optionB,optionC,optionD,crtAnswer){
    this.question = question;
    this.optionA = optionA;
    this.optionB = optionB;
    this.optionC = optionC;
    this.optionD = optionD;
    this.crtAnswer = crtAnswer;
  }

  getQuestion(){
    return `${this.question}`;
  }

  getOptionA(){
    return `${this.optionA}`;
  }

  getOptionB(){
    return `${this.optionB}`;
  }

  getOptionC(){
    return `${this.optionC}`;
  }

  getOptionD(){
    return `${this.optionD}`;
  }

  getCrtAnswer(){
    return `${this.crtAnswer}`;
  }
}



function lineBreak(){
    console.log("-------------------------------------------------------------------------------");
}

//Prints a welcome message
function welcomeMessage(){
  lineBreak();
  console.log('\t\t\t\t\t\t\t\tTennis Quiz');
  lineBreak();
  console.log('Lets start!!!');
  console.log();
  console.log();
}

//Returns 1 if the answer is right else returns 0
function checkAnswer(userAnswer, rightAnswer){
  if(userAnswer === rightAnswer){
    console.log('Correct Answer!');
    lineBreak();
    return 1;
  }
  else{
    console.log('Incorrect Answer! Correct answer is ' + rightAnswer);
    lineBreak();
    return 0;
  }
}

//Function takes the question object and performs the following
//  1.Asks the question
//  2.Gets the answer from user
//  3.Return 1 if correct else 0
function handleQuestion(question){
  console.log(question.getQuestion());
  console.log('\t\t1.' + question.getOptionA());
  console.log('\t\t2.' + question.getOptionB());
  console.log('\t\t3.' + question.getOptionC());
  console.log('\t\t4.' + question.getOptionD());

  while(true){
    const userAnswer = readLineSync.question('Enter your answer?\n');
    if(userAnswer >= 1 && userAnswer <= 4){
      return checkAnswer(userAnswer, question.getCrtAnswer());
    }
    else{
      console.log('Please enter a valid option');
    }
  }

}

//Counts the number of correct answers and prints stats
function printStats(response){
  let correctAnswers = 0 , wrongAnswers = 0;
  for(const answer of response){
    if(answer == 1){
      correctAnswers++;
    }
    else{
      wrongAnswers++;
    }
  }

  console.log('Quiz has ended!');
  console.log('\t Number of correct answers: ' + correctAnswers);
  console.log('\t Number of wrong answers: ' + wrongAnswers);
  console.log('\t Total number of questions: ' + response.length);
}


const main = () => {
  //Since we can add more question I made question let
  let questions = [];
  questions.push(new Question('What are the four most prestigious grand slam events?','Ryder Cup, U.S. Open, Wimbledon, British Open','British Open, Wimbledon, Australian Open, German Open','Wimbledon, U.S. Open, Australian Open, French Open','German Open, British Open, Australian Open, French Open',3));

  questions.push(new Question('How many times has Roger Federer retired mid-match?','5','8','1','Never',4));

  questions.push(new Question('Where did Novak Djokovic reach his first final as a 20 year old in 2007?','French Open','Wimbledon','US Open','Australian Open',3));

  questions.push(new Question('How many french open titles has nadal won?','10','11','12','13',3));

  questions.push(new Question('How many career weeks has Serena Williams spent as number 1?','319','19','119','219',1));

  welcomeMessage();
  quizResponse = questions.map(handleQuestion);
  printStats(quizResponse);
}

main();

