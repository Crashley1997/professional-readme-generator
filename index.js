// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
      question: "What is your name?",
      type: "text", answer: null
    },
    {
      question: "How old are you?",
      type: "number", answer: null
    },
    {
      question: "What is your favorite color?",
      type: "text",
      answer: null
    },
    {
      question: "Do you have any pets? (yes/no)",
      type: "boolean", answer: null
    },
    {
      question: "When is your birthday?",
      type: "date", answer: null
    }
  ];
  
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(index = 0) {
  if (index < questions.length) {
    rl.question(questions[index].question + " ", (answer) => {
      questions[index].answer = answer;
      askQuestion(index + 1); });
  } else {
    rl.close(); console.log("All questions answered:", questions);
  }
}

askQuestion();

  

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}const fs = require('fs');

// Function to write data to a file (e.g., README.md)
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log('Error writing to file:', err);
    } else {
      console.log(`${fileName} has been saved!`);
    }
  });
}

// Example data to write to the README file
const readmeData = `
# User Input Questionnaire with Node.js

This is a simple Node.js application that prompts the user with a series of questions, collects their responses, and then displays the results in the terminal.

## Description

This application uses the \`readline\` module in Node.js to interact with the user via the terminal. The user is asked a series of questions, and their answers are stored and displayed once all questions have been answered.

## Features

- The user is asked a series of questions, including:
  - Name
  - Age
  - Favorite color
  - Pets (Yes/No)
  - Birthday (in the format YYYY-MM-DD)
  
- The application recursively asks each question until all are answered.
- Once all questions are answered, the application logs the responses in the terminal.

## How to Run

1. **Clone or Download the Repository**:
   \`\`\`bash
   git clone https://github.com/your-username/user-input-questionnaire.git
   \`\`\`

2. **Navigate to the project folder**:
   \`\`\`bash
   cd user-input-questionnaire
   \`\`\`

3. **Run the application**:
   \`\`\`bash
   node app.js
   \`\`\`

4. **Answer the questions in the terminal**:
   The questions will appear one by one, and you can type your responses directly into the terminal.

## Example Interaction

Here’s an example of what the user interaction will look like in the terminal:

\`\`\`
What is your name? John
How old are you? 30
What is your favorite color? Blue
Do you have any pets? (yes/no) yes
When is your birthday? (yyyy-mm-dd) 1990-06-15

All questions answered:
What is your name? Answer: John
How old are you? Answer: 30
What is your favorite color? Answer: Blue
Do you have any pets? (yes/no) Answer: yes
When is your birthday? (yyyy-mm-dd) Answer: 1990-06-15
\`\`\`

## Technologies Used

- **Node.js**: Used to run the JavaScript on the server.
- **readline module**: Built-in Node.js module for reading input from the terminal.

## License

This project is licensed under the MIT License.
`;

// Call the function to write the README
writeToFile('README.md', readmeData);


// TODO: Create a function to initialize app
function init() {}const fs = require('fs');
const { exec } = require('child_process');  


function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log('Error writing to file:', err);
    } else {
      console.log(`${fileName} has been saved!`);
    }
  });
}

const readmeData = `
# User Input Questionnaire with Node.js

This is a simple Node.js application that prompts the user with a series of questions, collects their responses, and then displays the results in the terminal.

## Description

This application uses the \`readline\` module in Node.js to interact with the user via the terminal. The user is asked a series of questions, and their answers are stored and displayed once all questions have been answered.

## Features

- The user is asked a series of questions, including:
  - Name
  - Age
  - Favorite color
  - Pets (Yes/No)
  - Birthday (in the format YYYY-MM-DD)
  
- The application recursively asks each question until all are answered.
- Once all questions are answered, the application logs the responses in the terminal.

## How to Run

1. **Clone or Download the Repository**:
   \`\`\`bash
   git clone https://github.com/your-username/user-input-questionnaire.git
   \`\`\`

2. **Navigate to the project folder**:
   \`\`\`bash
   cd user-input-questionnaire
   \`\`\`

3. **Run the application**:
   \`\`\`bash
   node app.js
   \`\`\`

4. **Answer the questions in the terminal**:
   The questions will appear one by one, and you can type your responses directly into the terminal.

## Example Interaction

Here’s an example of what the user interaction will look like in the terminal:

\`\`\`
What is your name? John
How old are you? 30
What is your favorite color? Blue
Do you have any pets? (yes/no) yes
When is your birthday? (yyyy-mm-dd) 1990-06-15

All questions answered:
What is your name? Answer: John
How old are you? Answer: 30
What is


// Function call to initialize app
init();
