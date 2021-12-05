const fs = require('fs'); 
const inquirer = require('inquirer'); 

// linking to page where the README is developed 
const generatePage = require('./utils/generateMarkdown.js');

// Questions used in array
const questions = () => {
    //Inpuirer asks you questions that appear on the ReadMe
    return inquirer.prompt([
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false; 
            }
        } 
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false; 
            }
        }

    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Enter the name of your project');
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe what your project does',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Enter a description of your project');
                return false; 
            }
        }
    }, 
    {
        type: 'list',
        name: 'license',
        message: 'Please choose which license your project uses',
        choices: ['MIT', 'GNU'],
        default: ["MIT"],
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Choose a license');
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'install',
        message: 'How do you install this project?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Enter Installation instructions');
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you start this application?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Describe how to use the app');
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'test', 
        message: 'How do you run tests on this app?',
        default: 'npm test'
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'How does a user contribute to this repository?'
    }
]);
};

// Writes the readme file
const writeFile = data => {
    fs.writeFile('README.md', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // lets the user know that the readme has been created. 
        } else {
            console.log("Your README has been generated. Please check your root folder for readme file.")
        }
    })
}; 

// Starts the questions function
questions()


.then(answers => {
    return generatePage(answers);
})

// writes data onto readme file 
.then(data => {
    return writeFile(data);
})
// catches any errors that occur during initilization
.catch(err => {
    console.log(err)
})