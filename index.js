// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "description",
    message: "What is the name of this application?",
  },
  {
    type: "input",
    name: "Usage",
    message: "Describe what this application does?",
  },
  {
    type: "input",
    name: "Installation",
    message: "How to install this application?",
  },
  {
    type: "input",
    name: "issues",
    message: "Are there any known issues?",
  },
  {
    type: "input",
    name: "acknowledgments",
    message: "Who would you like to credit?",
  },

  //   "Description",
  //   "Table of Contents",
  //   "Installation",
  //   "Usage",
  //   "Reporting Issues",
  //   "Acknowledgments",
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("README.md created successfully!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const readmeContent = `# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Reporting Issues](#reporting-issues)
- [Acknowledgments](#Acknowledgments)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Reporting Issues
${answers.issues}

## Acknowledgments
${answers.acknowledgments}
`;

    writeToFile("README.md", readmeContent);
  });
}

// Function call to initialize app
init();
