const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "index.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

var teamMembers = [];

const questions = ([
    { type: 'list',
      message: 'Please select your role below.',
      choices: ['engineer", "intern", "manager'],
      name: 'role'
    },
    { type: 'input',
      message: 'What is your office number?',
      name: 'officeNumber',
      when: (answers) => answers.role === 'manager'
    },
    { type: 'input',
      message: 'What is your GitHub username?',
      name: 'github',
      when: (answers) => answers.role === 'engineer'
    },
    { type: 'input',
      message: 'What is the name of the school you attend?',
      name: 'school',
      when: (answers) => answers.role === 'intern'
    },
    { type: 'input',
      message: 'Please enter your name:',
      name: 'name',
    },
    { type: 'input',
      message: 'Please enter your email address:',
      name: 'email',
    },
    { type: 'input',
      message: 'Please enter your ID:',
      name: 'id',
    },
    { type: 'list',
      message: 'More additions?',
      choices: ['yes', 'no'],
      name: 'additions',
    }
]);

function start(){

    function createTeam(){
    
        //add a teamMember to the array ussing inquier
        inquirer.prompt(questions).then((answers)=> {
          if (answers.role === 'manager') {
            const man = newManager(answers.name, answers.id, answers.email, answers.officeNumber);
            teamMembers.push(man)
          } else if (answers.role === 'engineer') {
            const eng = newEngineer(answers.name, answers.id, answers.email, answers.github);
            teamMembers.push(eng)
          } else if (answers.role === 'intern') {
            const int = newIntern(answers.name, answers.id, answers.email, answers.school);
            teamMembers.push(int)
          } else {
            console.log('not possible')
          }
          if (answers.additions === 'yes') {
            createTeam();
          } else {
            render(teamMembers);

          }
        })

      }    
    createTeam(); 
}

function writeToFile(fileName, data) {
  fs.writeFileSync('./output/team.html', render(data));
}

writeToFile();

start()