const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

function createEngineer(team) {
    inquirer.prompt([
        // Engineer name
        // Engineer id
        // Engineer email
        // Engineer GitHub username
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the engineer's id?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email?",
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's github?",
        }
    ]).then((engineerDetails) => {
        // Initialise Engineer class to create Manager object
         const engineer = new Engineer(engineerDetails.name, engineerDetails.id, engineerDetails.email, engineerDetails.githubUsername)
        team.push(engineer);
        createTeam(team); // at this point we add an engineer to the team array
    });
 

function start() {
    const team = []; // array of Employee objects (array of Manager, or Engineers, or Interns)
    // Employee can be Manager, Engineer, or Intern
    createManager(team);
 }start();
 