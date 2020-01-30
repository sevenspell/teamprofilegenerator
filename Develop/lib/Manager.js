const Employee = require("./Employee"); 

class Manager extends Employee {
    constructor(name, id, email, officeNumber, title) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.title = title;
    }

    getOfficeNumber(officeNumber){
        return this.officeNumber;
    }

    getTitle() {
        return this.title;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;




  