// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
// const questions = () =>
    inquirer.prompt([
        {
            type: "input",
            name: "author",
            message: "What is the author's name",
        },
        {
            type: "input",
            name: "username",
            message: "What is your GitHub username",
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address",
        },
        {
            type: "input",
            name: "title",
            message: "What is your project title?",
        },
        {
            type: "input",
            name: "description",
            message: "Please write a brief description of your project:",
        },
        {
            type: "list",
            name: "license",
            message: "What kind of license should your project have, if any?",
            choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
        },
        {
            type: "input",
            name: "installations",
            message: "What command should be run to install dependencies?",
        },
        {
            type: "input",
            name: "usage",
            message: "What does the user need to know about using the repo?",
        },
    ])

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
    // function generateMarkdown(data) {
    //     return `# ${data.title}
    //     ## License ![badge](https://badgen.net/badge/License/${data.license}/blue)
    //     This project is covered under the ${data.license} license. 
    //     <a name="Description"></a>
    //     ## Description
    //     ${data.description}
    //     # Table of Contents
    //    * [Description](#Description)
    //    * [Installation](#installation)    
    //    * [General Info](#general-information)
    //    * [Features](#features)
    //    * [Screenshots](#screenshots)
    //    * [Contact](#contact)
            
            
    //     <a name="Installation-Instructions"></a>   
    //     ## Installation Instructions
    //     ${data.installations}
    //     <a name="Usage-Information"></a>   
    //     ## Usage Information
    //     ${data.usage}
    //     <a name="Contribution-Guidelines"></a>    
    //     ## Contribution Guidelines
    //     ${data.contribution}
    //     <a name="Test"></a>
    //     ## Test
    //     ${data.test}
    //     <a name="Questions"></a>
    //     ## Questions
    //     ${data.contact}
    //     Github: [${data.author}](https://github.com/${data.username})
    //     Email me at: ${data.email}`;
    //       }

// TODO: Create a function to initialize app
// //function init() {}
// questions()
// .then((data) => writeFileAsync(newREADME.md,
// writeToFile(data)))
// .then(() => console.log('Successfully wrote to index.html'))
// .catch((err) => console.error(err));

// Function call to initialize app
//init();
.then((data) =>
        fs.writeFile("./Generated_ReadME/generatedReadME.md", generateMarkdown(data),
        (err) =>
            err ? console.error(err) : console.log('Commit logged!')))