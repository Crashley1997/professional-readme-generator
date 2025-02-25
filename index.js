const fs = require('fs');

const questions = [
  {
    question: "What is your name?",
    type: "text", 
    answer: null
  },
  {
    question: "How old are you?",
    type: "number", 
    answer: null
  },
  {
    question: "What is your favorite color?",
    type: "text",
    answer: null
  },
  {
    question: "What is your favorite season?",
    type: "text",
    answer: null
  },
  {
    question: "Do you have any pets? (yes/no)",
    type: "boolean",
    answer: null
  },
  {
    question: "When is your birthday?",
    type: "date",
    answer: null
  }
];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(index = 0) {
  if (index < questions.length) {
    rl.question(questions[index].question + " ", (answer) => {
      questions[index].answer = answer;
      askQuestion(index + 1);
    });
  } else {
    rl.close();
    console.log("All questions answered:", questions);
    generateReadme();
  }
}

function generateReadme() {
  const answers = questions.map(q => `${q.question} ${q.answer}`).join('\n\n');
  
  const readmeContent = `# My Personal Information

## Questions & Answers:

${answers}

---

Created using the Personal Information Generator.`;
  
  writeToFile('README.md', readmeContent);
}

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log('Error writing to file:', err);
    } else {
      console.log(`${fileName} has been saved!`);
    }
  });
}

askQuestion();
