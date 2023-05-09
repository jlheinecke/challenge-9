// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
/* function renderLicenseBadge(data) {
 return `
 [![License: ${data.license}](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/${data.license})

`; 
} */

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  Title:
  ${data.title} [![License: ${data.license}](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/${data.license})

  Description: 
  ${data.description}

  Table of Contents:
  [1. Installation](https://github.com/jlheinecke/challenge-9#installation)
  2. Usage
  3. License
  4. Contributing
  5. Tests
  6. Questions

  Installation:
  ${data.installation}

  Usage:
  ${data.usage}

  License:
  This application is covered by the ${data.license} license. 

  Contributing:
  ${data.contributing}

  Tests:
  ${data.tests}

  Questions:
  ${data.questions}
------------------------------------------------
  GitHub: ${data.git}--> https://github.com/${data.git}

  If you have additional question contact me at ${data.email}
`; 
}

module.exports = generateMarkdown;
