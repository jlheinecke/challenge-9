// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const renderLicenseBadge = require('./utils/generateMarkdown');
const renderLicenseLink = require('./utils/generateMarkdown');

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
        name: 'installation',
        message: 'Installation:',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Usage:',
      },
      {
        type: "list",
        name: "license",
        message: "Chose a license for this project: ",
        choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open",
            "Other"
        ]
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
})


