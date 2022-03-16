// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your app?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your app?',
    },
    {
        type: 'input',
        message: 'What is the installation process?',
        name: 'install'
    },
    {
        type: 'list',
        message: 'What is the license for your app?',
        name: 'license',
        choices: ["Apache", "ISC", "MIT", "Open", "GNU", "Mozilla", "N/A"],
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
    {
        type: 'input',
        name: 'gitUserName',
        message: 'What is your GitHub user name?',
    },
];

// TODO: Create a function to write README file
function writeToFile(title, overview, description, installation, usage, license, contributing, tests, github, email) {

    const readMeContent = generateMarkdown(title, overview, description, installation, usage, license, contributing, tests, github, email);

    fs.writeFile('READ-ME.md', readMeContent, (err) => {
        err ? console.log(err) : console.log("Did it work?");
    })
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(({ title, overview, description, installation, usage, license, contributing, tests, github, email }) => {
        console.log(title, overview, description, installation, usage, license, contributing, tests, github, email);
        writeToFile(title, overview, description, installation, usage, license, contributing, tests, github, email);
    });
}

init();