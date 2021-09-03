const Manager = require('./lib/Manager.js');  
const Engineer = require('./lib/Engineer');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const generateHTML = require ('./src/generateHTML');
const fs = require ('fs');
const path = require('path');
const { callExpression } = require('@babel/types');


const team = []

function addIntern(){
    inquirer.prompt([
        {
        type: 'input',
        name:'internName',
        message:'what is the interns name?',
       
},
        {
        type: 'input',
        name:'internId',
        message:'what is the interns id?',
       
},
        {
        type: 'input',
        name:'internEmail',
        message:'what is the interns email?',
       
},
        {
        type: 'input',
        name:'school',
        message:'what is the interns school?',
       
},
    ]) .then (answer => {
        
        
   
     
     const intern = new Intern (answer.internName, answer.internID, answer.internEmail, answer.school);
      team.push(intern);
      card();
    })
      }

function addEngineer(){
    inquirer.prompt([
        {
        type: 'input',
        name:'engineerName',
        message:'what is the engineer name?',
       
},
        {
        type: 'input',
        name:'engineerId',
        message:'what is the engineer id?',
       
},
        {
        type: 'input',
        name:'engineerEmail',
        message:'what is the engineer email?',
       
},
        {
        type: 'input',
        name:'github',
        message:'what is the engineers github?',
       
},
    ]) .then(answer => {
        
        
   
     
     const engineer = new Engineer (answer.engineerName, answer.engineerID, answer.engineerEmail,answer.github);
      team.push(engineer);
      card();
    })
   
      }

function addManager(){
    return inquirer.prompt([
        {
        type: 'input',
        name:'managerName',
        message:'what is the managers name?',
       
},
        {
        type: 'input',
        name:'managerId',
        message:'what is the managers id?',
       
},
        {
        type: 'input',
        name:'managerEmail',
        message:'what is the managers email?',
       
},
        {
        type: 'input',
        name:'officeNumber',
        message:'what is the managers office number?',
       
},
    ]) 
}

const init = function () {
  addManager().then (answer => {
      const manager = new Manager (answer.managerName, answer.managerID, answer.managerEmail, answer.officeNumber);
      team.push(manager);
      card();
  })
}



  
  const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        }
    })
}
const card = () => {
  inquirer.prompt ({
      type: 'list',
      message: 'Would you like to add an employee?',
      choices: ['Engineer', 'Intern', 'No'],
      name: 'choices'
  })
  .then(answer => {
      if (answer.choices === 'Engineer') {
          addEngineer()
      }
      else if (answer.choices === 'Intern') {
          addIntern()
      }
      else {
          console.log(team)
          writeFile(generateHTML(team))
      }
  })
}


init();