const quizQuestions = require('readline-sync');

const name = quizQuestions.question('What is your name? \n');
console.log(`Hello, Welcome ${name} to this quiz on Data structure and FullStack Development`);

const questions = [
   {
     question : 'Which is the most efficient data structure that is used for caching the data?',
     options : ['1 : Stack, 2 : HashMap, 3 : Linked List,  4 : Trie'],
     correct : '3'
   },
   {
     question : 'Which is the one data structure that is used to alogorithms such as Dijkstra?',
     options : ['1 : Trees, 2 : HashMap, 3 : Heap, 4 : Binary search tree'],
     correct : '3'
   },
   {
     question : 'Which one of the below is used for styling web application?',
     options : ['1 : HTML , 2 : CSS, 3 : Javascript, 4 : React'],
     correct : '2'
   },
   {
     question : 'Where does the user interface component of web application render',
     options : ['1 : Client, 2 : Server, 3 : It can render both on client and server'],
     correct : '3'
   },
   {
     question : 'Which protocol does browser and sever use to communicate with each other?',
     options : ['1 : HTTPS, 2: FTP File Transfer protocol, 3 : ARP Address resolution protocol, 4: POP Post Office protocol'],
     correct : '1'
   }
];

const askQuestion = (question, options) => {
  console.log(`\n ${question}`);
  Object.keys(options).forEach(option => console.log(`\n ${options[option]}`));
}

const validateOptions = (input, correctOptions) => input === correctOptions;

let score = 0;
function start_quiz(quiz_question){
  
   console.log("\n Please press ENTER to display questions");
  
  for(const question of questions){
       //let result = false;
       let user_answer = quizQuestions.question(askQuestion(question.question, question.options));

       result = validateOptions(user_answer, question.correct);

       if(result){
         console.log('Great!, Your opted answer is correct.');
         score = score + 10;
       }else{
         console.log('Your opted answer is wrong');
         score = score - 10;
       }
  
  }
   
}

function final_message(score){
   console.log('Thanks for taking this quiz. Your final score is :' +score);

  if(score == 0){
    console.log('Please revisit the concepts and try again later');
  }else{
    console.log('Congratulations! You can now start developing applications');
  }
  
}

start_quiz(questions);

final_message(score);
