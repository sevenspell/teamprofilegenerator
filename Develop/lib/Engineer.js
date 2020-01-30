const Employee = require("./Employee"); 

class Engineer extends Employee {
    constructor(name, id, email, github, title){
        super(name, id, email);
        this.github = github;
        this.title = title;
    }

    getGithub(github){
        return this.github;
    }

    getTitle() {
        return this.title;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;