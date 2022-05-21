// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = () =>
    inquirer.prompt([
        {
            type: "input",
            name: "author",
            message: "What is the author's name?",
        },
        {
            type: "input",
            name: "username",
            message: "What is your GitHub username?",
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?",
        },
        {
            type: "list",
            name: "contact",
            message: "What is your preferred method of contact?",
            choices: ["Email", "LinkedIn"]
        },
        {
            type: "input",
            name: "title",
            message: "What is the project title?",
        },
        {
            type: "input",
            name: "description",
            message: "Write a brief description of your project:",
        },
        {
            type: "list",
            name: "license",
            message: "What kind of license should your project have, if any?",
            choices: ["APACHE", "BSD", "GPL", "MIT", "None"]
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
        {
            type: "input",
            name: "contribution",
            message: "What are your guidelines for others contributing to the project?",
        },
    ])

questions()
.then((data) =>
        fs.writeFile("./ReadMe.md", generateMarkdown(data),
        (err) =>
            err ? console.error(err) : console.log('Answers logged!')))