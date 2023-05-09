

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




