const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");

// const mainHTML = require("./templates/main.html");
// const managerHTML = require("./templates/manager.html");
// const engineerHTML = require("./templates/engineer.html");
// const internHTML = require("./templates/intern.html");

//1. Prompt questions

const verificationQuestion = [
    {
        type: "confirm",
        message: "Any employees to add?",
        name: "confirmV"
    }
]

const employeeQuestions = [
    {
        type: "input",
        message: "Enter name of employee:",
        name: "nameV"
    },
    {
        type: "number",
        message: "Enter the employee ID:",
        name: "idV"
    },
    {
        type: "input",
        message: "Enter the email address of employee:",
        name: "emailV"
    },
    {
        type: "list",
        message: "Select the job title of employee:",
        name: "titleV",
        choices: ["Manager", "Engineer", "Intern"]
    }
];

const managerQuestion = [
    {
        type: "number",
        message: "Enter your office number:",
        name: "officeNumberV"
    }
];

const engineerQuestion = [
    {
        type: "input",
        message: "Enter your Github username:",
        name: "usernameV"
    }
];

const internQuestion = [
    {
        type: "input",
        message: "Enter your school name:",
        name: "schoolV",
    }
];

//2. Prepare arrays
const managerArray = [];
const engineerArray = [];
const internArray = [];


//3. ask questions and get data to push to the relevant arrays

inquirer.prompt(verificationQuestion)
    .then(function promptEmployeeQuestions({ confirmV }) {

        if (`${confirmV}` === "false") {
            return

        } if (`${confirmV}` === "true") {

            inquirer.prompt(employeeQuestions)

                .then(function promptNextQuestion({ titleV, nameV, idV, emailV }) {

                    const title = `${titleV}`;

                    if (title === "Manager") {

                        inquirer.prompt(managerQuestion).then(function getManagerData({ officeNumberV }) {

                            const managerData = new Manager(nameV, idV, emailV, officeNumberV);

                            const managerName = managerData.getName({ nameV });
                            const managerID = managerData.getId({ idV });
                            const managerEmail = managerData.getEmail({ emailV });
                            const managerOfficeNum = managerData.getOfficeNumber({ officeNumberV });

                            managerArray.push(managerName, managerID, managerEmail, managerOfficeNum);
                            console.log(managerArray);

                        }).catch(function (error) {
                            console.log(error);
                        })

                    } if (title === "Intern") {

                        inquirer.prompt(internQuestion).then(function getInternData({ schoolV }) {

                            const internData = new Intern(nameV, idV, emailV, schoolV);

                            const internName = internData.getName({ nameV });
                            const internID = internData.getId({ idV });
                            const internEmail = internData.getEmail({ emailV });
                            const internGithub = internData.getSchool({ schoolV });

                            internArray.push(internName, internID, internEmail, internGithub);
                            console.log(internArray);

                        }).catch(function (error) {
                            console.log(error);
                        })

                    } if (title === "Engineer") {

                        inquirer.prompt(engineerQuestion).then(function getEngineerData({ usernameV }) {

                            const engineerData = new Engineer(nameV, idV, emailV, usernameV);

                            const engineerName = engineerData.getName({ nameV });
                            const engineerID = engineerData.getId({ idV });
                            const engineerEmail = engineerData.getEmail({ emailV });
                            const engineerGithub = engineerData.getGithub({ usernameV });

                            engineerArray.push(engineerName, engineerID, engineerEmail, engineerGithub);
                            console.log(engineerArray);

                        }).catch(function (error) {
                            console.log(error);
                        })
                    }
                })
        }
    })










        // .then(function (githubData) {

        //     //5. feed data into generateHTML() and generate

        //     // const githubData = userGithubData[0];

        //     // const htmlFile = generateHTML.generateHTML({ githubData });



        // }).catch(function (error) {
        //     console.log(error);
        // });
    // });

