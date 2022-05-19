// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## License ![badge](https://badgen.net/badge/License/${data.license}/blue)
  This project is covered under the ${data.license} license. 
  <a name="Description"></a>
  ## Description
  ${data.description}
  # Table of Contents
 * [Description](#Description)
 * [Installation](#installation)    
 * [General Info](#general-information)
 * [Features](#features)
 * [Screenshots](#screenshots)
 * [Contact](#contact)
      
      
  <a name="Installation-Instructions"></a>   
  ## Installation Instructions
  ${data.installations}
  <a name="Usage-Information"></a>   
  ## Usage Information
  ${data.usage}
  <a name="Contribution-Guidelines"></a>    
  ## Contribution Guidelines
  ${data.contribution}
  <a name="Test"></a>
  ## Test
  ${data.test}
  <a name="Questions"></a>
  ## Questions
  ${data.contact}
  Github: [${data.author}](https://github.com/${data.username})
  Email me at: ${data.email}`;
    }
    
    module.exports = generateMarkdown;
