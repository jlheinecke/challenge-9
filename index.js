// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input

inquirer 
  .prompt
 ([
    {
        type: 'input',
        name: 'title',
        message: 'Title:',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Description:',
      },
      {
        type: 'input',
        name: 'toc',
        message: 'Table of Contents:',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Installation:',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Usage:',
      },
      {
        type: 'input',
        name: 'license',
        message: 'License:',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Contributing:',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Tests:',
      },
      {
        type: 'input',
        name: 'questions',
        message: 'Questions:',
      },
      {
        type: 'input',
        name: 'git',
        message: 'GitHub Username:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Email:',
      }
])

.then((data) => {
  const READMEContent = generateMarkdown(data);

  fs.writeFile('README.md', READMEContent, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!')
  );
});
// TODO: Create a function to write README file
/* function writeToFile(fileName, data) {} */

// TODO: Create a function to initialize app
/* function init() {} */

// Function call to initialize app
/* init();  */

/* const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = ({ name, location, github, linkedin }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <header class="p-5 mb-4 header bg-light">
    <div class="container">
      <h1 class="display-4">Hi! My name is ${name}</h1>
      <p class="lead">I am from ${location}.</p>
      <h3>Example heading <span class="badge bg-secondary">Contact Me</span></h3>
      <ul class="list-group">
        <li class="list-group-item">My GitHub username is ${github}</li>
        <li class="list-group-item">LinkedIn: ${linkedin}</li>
      </ul>
    </div>
  </header>
</body>
</html>`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'location',
      message: 'Where are you from?',
    },
    {
      type: 'input',
      name: 'hobby',
      message: 'What is your favorite hobby?',
    },
    {
      type: 'input',
      name: 'food',
      message: 'What is your favorite food?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your LinkedIn URL.',
    },
  ])
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  }); */
 
