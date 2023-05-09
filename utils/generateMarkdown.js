// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license)
 return `[![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)]
 `
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `(https://opensource.org/licenses/${license})
`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Title
  ${data.title}<br>
  [![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-yellow.svg)](https://opensource.org/licenses/${data.license})

  # Description 
  ${data.description}

  # Table of Contents<br>
  [1. Installation](/#installation)<br>
  [2. Usage](/#usage)<br>
  [3. License](/#license)<br>
  [4. Contributing](/#contriburing)<br>
  [5. Tests](/#tests)<br>
  [6. Questions](/#questions)<br>
  
  # Installation<br>
  ${data.installation}

  # Usage<br>
  ${data.usage}

  # License<br>
  This application is covered by the ${data.license} license. 

  # Contributing<br>
  ${data.contributing}

  # Tests<br>
  ${data.tests}

  # Questions<br>
  ${data.questions}
------------------------------------------------
  GitHub: ${data.git}--> https://github.com/${data.git}

  If you have additional question contact me at ${data.email}
`; 
}
module.exports = generateMarkdown
module.exports = renderLicenseBadge
module.exports = renderLicenseLink



