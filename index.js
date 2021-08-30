const Manager = require('.lib/Manager');  
const Engineer = require('lib/Engineer');
const Employee = require('lib/Employee');
const Intern = require('lib/Intern');
const inquirer = require('inquirer');
const fs = require ('fs');
const path = require('path');


const questoins [
    {name: 'name', message:"whats the employees name" },
    {name: 'id', message: "whats the employees id"},
    {name: 'emial', message: "whats the employees email"}
]