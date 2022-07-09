// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`

    
  } 
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  https://github.com/${data.username}/${data.title}
  # Description
  ${data.description}
  # Table of Contents
  * ${data.toc}
  * [Installation](#installation)
  * ${data.installation}
  * [Usage](#usage)
  * 
  * [License](#license)
  * [Contributors](#contributors)
  * [Tests](#tests)
  * [Questions](#questions)
  # Installation
  The following must be installed to run the application
  # License
  This project is licensed under the ${data.license}
  # Contributors:
  ${data.contributors}
  # Tests 
  The following is needed to run the test: ${data.tests}
  # Questions
  If you have any questions please contact 


`;
}

module.exports = generateMarkdown;
