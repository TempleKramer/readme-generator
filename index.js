// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown');
const path = require("path");

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is the title of your project?",
    name: "title"
}, {
    type: "input",
    message: "What is your project about? Please give a detailed description",
    name: "description"
}, {
    type: "input",
    message: "Table of Contents",
    name: "toc"
}, {
    type: "input",
    message: "What does the user need to install to run the app?",
    name: "installation"
}, {
    type: "input",
    message: "How is your app used? Please give detailed instructions",
    name: "usage"
}, {
    type: "input",
    message: "What License is being used?",
    name: "license"
}, {
    type: "input",
    message: "Who are the contributors of your project?",
    name: "contributors"
}, {
    type: "input",
    message: "What commands are needed to run the app?",
    name: "tests"

}, {
    type: "input",
    message: "What is your contact info?",
    name: "questions"
}, {
    type: "input",
    message: "What is your Github Username",
    name: "github_username"
}, {
    type: "input",
    message: "What is your email address?",
    name: "email_address"
}
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data, ) {
//     fs.writeFile(fileName, data)}{
//         console.log(fileName)
//         console.log(data)
//     }


// TODO: Create a function to initialize app
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)

}

function init() {
    inquirer.prompt(questions)
    .then(function(data){
        writeToFile("ReadME.md", generateMarkdown(data));

    })
}

// Function call to initialize app
init();
