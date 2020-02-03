const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./generateHTML");

//1. Prompt questions

const managerVerificationQuestion = [
    {
        type: "confirm",
        message: "Entries are to be done by a manager. Are you a manager or is this done for a manager?",
        name: "managerV",
    },
]

const jobTitleVerfication = [
    {
        type: "list",
        message: "Moving on to the next team member. Select the role of employee you're adding next:",
        name: "titleV",
        choices: ["Engineer", "Intern", "I do not have any more employees to add"]
    }
]

const managerQuestions = [
    {
        type: "input",
        message: "Enter manager's name:",
        name: "mNameV"
    },
    {
        type: "input",
        message: "Enter manager's employee ID:",
        name: "mIdV"
    },
    {
        type: "input",
        message: "Enter manager's email address:",
        name: "mEmailV"
    },
    {
        type: "number",
        message: "Enter manager's office number:",
        name: "mOfficeNumberV"
    },
    {
        type: "confirm",
        message: "Entries for managers are to be completed before moving on to other team members. Any more managers to add?",
        name: "moreManagerV",
    }
];

const engineerQuestions = [
    {
        type: "input",
        message: "Enter name of employee:",
        name: "nameV"
    },
    {
        type: "input",
        message: "Enter the employee ID:",
        name: "idV"
    },
    {
        type: "input",
        message: "Enter the email address of employee:",
        name: "emailV"
    },
    {
        type: "input",
        message: "Enter your Github username:",
        name: "usernameV"
    }
];

const internQuestions = [
    {
        type: "input",
        message: "Enter name of employee:",
        name: "nameV"
    },
    {
        type: "input",
        message: "Enter the employee ID:",
        name: "idV"
    },
    {
        type: "input",
        message: "Enter the email address of employee:",
        name: "emailV"
    },
    {
        type: "input",
        message: "Enter your school name:",
        name: "schoolV",
    }
];

//2. Prepare arrays
const employeesArray = [];
const managerArray = [];
const engineerArray = [];
const internArray = [];

//3. ask questions and get data to push to the relevant arrays

// confirm if user is a manager. If so, answer Manager questions
function startProcess() {
    inquirer.prompt(managerVerificationQuestion)
        .then(({ managerV, teamNameV }) => {
            if (`${managerV}` === "true") {
                promptManagerQuestion(managerQuestions);
            } else {
                console.log("Please get your manager to take over and try again.");
            }
        })
}

//Ask manager questions, log response into array, and confirm if any more managers to add
function promptManagerQuestion(response) {
    inquirer.prompt(managerQuestions)
        .then((response) => {

            const managerTitle = "Manager";

            const managerData = new Manager(response.mNameV, response.mIdV, response.mEmailV, response.mOfficeNumberV, managerTitle);

            const managerName = managerData.getName(response.mNameV);
            const managerID = managerData.getId(response.mIdV);
            const managerRole = managerData.getTitle(managerTitle);
            const managerEmail = managerData.getEmail(response.mEmailV);
            const managerOfficeNum = managerData.getOfficeNumber(response.mOfficeNumberV);

            // managerArray.push(managerData);
            employeesArray.push(managerData);

            const moreManager = response.moreManagerV;

            createMoreManager(moreManager);

        }).catch(function (error) {
            console.log(error);
        })
}

//if more managers to add, loop back to manager questions. if no more managers to add, go on to role selection
function createMoreManager(response) {
    if (response) {
        promptManagerQuestion();
    } else {
        promptRoleSelection();
    }
}

//if Engineer is selected, ask Engineer questions, then go back to role selection
function promptEngineerQuestion() {
    inquirer.prompt(engineerQuestions)
        .then((response) => {

            const engineerTitle = "Engineer";

            const engineerData = new Engineer(response.nameV, response.idV, response.emailV, response.usernameV, engineerTitle);

            const engineerName = engineerData.getName(response.nameV);
            const engineerID = engineerData.getId(response.idV);
            const engineerRole = engineerData.getTitle(engineerTitle);
            const engineerEmail = engineerData.getEmail(response.emailV);
            const engineerGithub = engineerData.getGithub(response.usernameV);

            // engineerArray.push(engineerData);
            employeesArray.push(engineerData);

            promptRoleSelection(response);
        })
}

//if Intern is selected, ask Intern questions, then go back to role selection
function promptInternQuestion() {
    inquirer.prompt(internQuestions)
        .then((response) => {

            const internTitle = "Intern";

            const internData = new Intern(response.nameV, response.idV, response.emailV, response.schoolV, internTitle);

            const internName = internData.getName(response.nameV);
            const internID = internData.getId(response.idV);
            const internRole = internData.getTitle(internTitle);
            const internEmail = internData.getEmail(response.emailV);
            const internGithub = internData.getSchool(response.schoolV);

            // internArray.push(internData);
            employeesArray.push(internData);

            promptRoleSelection(response);
        })
}

//Let user select role to add. If user has finished updating all employees, end process.

function promptRoleSelection(response) {
    inquirer.prompt(jobTitleVerfication)
        .then((response) => {

            const title = response.titleV;

            if (title === "Engineer") {
                promptEngineerQuestion();
            } else if (title === "Intern") {
                promptInternQuestion();
            } else {
                console.log("Congratulations, you've completed the org chart.");
                //create HTML based on employeesArray title
                getEmployeeHTML(employeesArray);
                //insert employee HTML based on roles into main HTML
                getMainHTML(htmlManager, htmlEngineer, htmlIntern);
                //create team.html
                createHTMLFile(htmlMainFile);
            }
        })
}

//start the process
startProcess()

//array to log HTML based on roles for each employee generated 
var htmlManager = [];
var htmlEngineer = [];
var htmlIntern = [];

//for each object in employeesArray, based on title, generate role-based HTML then push to role-based array
function getEmployeeHTML(data) {

    var htmlManagerFile = "";
    var htmlEngineerFile = "";
    var htmlInternFile = "";

    employeesArray.forEach((employeesArray)=> {
        if (employeesArray.title === "Manager") {
            htmlManagerFile = generateHTML.generateManagerHTML(employeesArray);
            htmlManager.push(htmlManagerFile);
        } else if (employeesArray.title === "Engineer") {
            htmlEngineerFile = generateHTML.generateEngineerHTML(employeesArray);
            htmlEngineer.push(htmlEngineerFile);
        } else if (employeesArray.title === "Intern") {
            htmlInternFile = generateHTML.generateInternHTML(employeesArray);
            htmlIntern.push(htmlInternFile);
        } else {
            console.log("No HTML found");
        }
    })
}

//retrieve HTML array based on roles and replace comma with space for insertion into Main HTML
var htmlMainFile = "";

function getMainHTML(htmlManager, htmlEngineer, htmlIntern) {
    var htmlManagerString = htmlManager.join(" ");
    var htmlEngineerString = htmlEngineer.join(" ");
    var htmlInternString = htmlIntern.join(" ");

    htmlMainFile = generateHTML.generateMainHTML(htmlManagerString, htmlEngineerString, htmlInternString);
}

//create team.html based on output
function createHTMLFile(htmlMainFile) {

    fs.writeFile("./output/team.html", htmlMainFile, function (err) {
        if (err) {
            return console.log(err)
        }
        console.log("HTML file successfully created!")
    })

}

