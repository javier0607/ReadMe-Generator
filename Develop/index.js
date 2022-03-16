// TODO: Include packages needed for this application

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
        choices: ["Apache","ISC","MIT","Open","GNU","Mozilla","N/A"],
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
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
