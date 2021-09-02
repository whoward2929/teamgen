const Manager = require('./lib/Manager.js');  
const Engineer = require('./lib/Engineer');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const generateHTML = require ('./src/generateHTML');
const fs = require ('fs');
const path = require('path');
const { callExpression } = require('@babel/types');


const  questions = [
    {type: 'list',  name: 'info', message:"What employee would you like to add?", choices:['intern','engineer','manager','none']},
    
]


function addIntern(){
    inquirer.prompt([
        {
        type: 'input',
        name:'name',
        message:'what is the interns name?',
       
},
        {
        type: 'input',
        name:'id',
        message:'what is the interns id?',
       
},
        {
        type: 'input',
        name:'email',
        message:'what is the interns email?',
       
},
        {
        type: 'input',
        name:'school',
        message:'what is the interns school?',
       
},
    ]) .then((answers) => {
        console.log (answers)
        
   
     })
     .catch((error) => {
       if (error.isTtyError) {
         // Prompt couldn't be rendered in the current environment
       } 
       
       else {
         console.log(error)
   
   
      }})
}
function addEngineer(){
    inquirer.prompt([
        {
        type: 'input',
        name:'name',
        message:'what is the engineer name?',
       
},
        {
        type: 'input',
        name:'id',
        message:'what is the engineer id?',
       
},
        {
        type: 'input',
        name:'email',
        message:'what is the engineer email?',
       
},
        {
        type: 'input',
        name:'github',
        message:'what is the engineers github?',
       
},
    ]) .then((answers) => {
        console.log (answers)
        
   
     })
     .catch((error) => {
       if (error.isTtyError) {
         // Prompt couldn't be rendered in the current environment
       } 
       
       else {
         console.log(error)
   
   
      }})
}
function addManager(){
    inquirer.prompt([
        {
        type: 'input',
        name:'name',
        message:'what is the managers name?',
       
},
        {
        type: 'input',
        name:'id',
        message:'what is the managers id?',
       
},
        {
        type: 'input',
        name:'email',
        message:'what is the managers email?',
       
},
        {
        type: 'input',
        name:'office number',
        message:'what is the managers office number?',
       
},
    ]) .then((answers) => {
        console.log (answers)
        
   
     })
     .catch((error) => {
       if (error.isTtyError) {
         // Prompt couldn't be rendered in the current environment
       } 
       
       else {
         console.log(error)
   
   
      }})
}



inquirer.prompt(
    /* Do you want to add an employee */
    questions
  )
  .then((answers) => {
     console.log (answers.info)
     switch(answers.info) {
        case 'intern':
          addIntern()
          break;
        case'engineer':
          addEngineer()
          break;
        case'manager':
         addManager()
          break;
        default:
          
      }

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } 
    
    else {
      console.log(error)


    }
  });
  
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
      choices: ['engineer', 'intern', 'manager', 'No'],
      name: 'choices'
  })
  .then(answer => {
      if (answer.choices === 'Engineer') {
          engineerData()
      }
      else if (answer.choices === 'Intern') {
          internData()
      }
      else {
          console.log(team)
          writeFile(generateHTML(team))
      }
  })
}
