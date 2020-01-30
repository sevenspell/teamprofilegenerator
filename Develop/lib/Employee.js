class Employee {
    constructor(name, id, email, title) {
        this.name = name;
        this.id = id;
        this.title = title;
        this.email = email;
    }

    getTitle(title) {
        return this.title;
    }

    getName(name) {
        return this.name;
    }

    getId(id) {
        return this.id;
    }

    getEmail(email) {
        return this.email;
    }

    getRole() {
        return "Employee";
    }

}

module.exports = Employee;


