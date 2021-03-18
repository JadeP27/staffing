const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

var teamMembers = [""];

//first question should be, are we adding an engineer, intern, or manager
// name, id, email, github
const questions = [
    {
      type: 'input',
      message: 'Would you like to add an Engineer, Intern, or Manager?',
      name: 'Employee',
    }
]

const engineerQuestions = [
    {
      type: 'input',
      message: 'What is the name of the employee you would like to add?',
      name: 'Name',
    },
    {
      type: 'input',
      message: 'What is their employee ID?',
      name: 'ID',
    },
    {
      type: 'input',
      message: 'What is their employee email?',
      name: 'Email',
    },
    {
      type: 'input',
      message: 'What is their github name?',
      name: 'Github',
    }
  ];

const internQuestions = [
    {
      type: 'input',
      message: 'What is the name of the employee you would like to add?',
      name: 'Name',
    },
    {
      type: 'input',
      message: 'What is their employee ID?',
      name: 'ID',
    },
    {
      type: 'input',
      message: 'What is their employee email?',
      name: 'Email',
    },
    {
      type: 'input',
      message: 'What is the name of the school they attend?',
      name: 'SchoolName',
    }
  ];

  const managerQuestions = [
    {
      type: 'input',
      message: 'What is the name of the employee you would like to add?',
      name: 'Name',
    },
    {
      type: 'input',
      message: 'What is their employee ID?',
      name: 'ID',
    },
    {
      type: 'input',
      message: 'What is their employee email?',
      name: 'Email',
    },
    {
      type: 'input',
      message: 'What is their office number?',
      name: 'OfficeNumber',
    }
  ];


function start(){

    function createTeam(){
    
        //add a teamMember to the array ussing inquier
        inquirer.prompt(Questions).then((answers)=> {
            // console.log(answers.name1)
            teamMembers.push(answers)
            console.log(teamMembers);
        })

        //if manager, run the function createManager
        //if intern, run the function createItern
       
    }

    createTeam()
    
}

start();

function buildTeam() {
    //here you use the OUTput directory, fs.existsSyc, fs.writeFileSync(... use "render"... and use the teamMember array)
}

// function createEngineer
// so the inquier questions, named... / name, id, email, github
// var onePerson = new Engineer (answers.name, answers.id, answers.email, answers.github)
// array.push(onePErson)




// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
