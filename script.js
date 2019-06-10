//#1

function loop(times, callback) {
    if (callback === null) {
        return;
    }

    for (i = 0; i <= times; i++) {
        callback();
    }
}

//#2

function calculateArea(a, b) {
    const area = a * b;
    const figure = 'прямоугольник';

    return {area, figure, input: [a, b]};
}

//#3
class Human {
    name;
    age;
    dateOfBirth;

    displayInfo() {
        return `${name}, ${age}, ${dateOfBirth}`;
    }
}

class Employee extends Human {
    salary;
    department;

    displayInfo() {
        const parentFuncResult = super.displayInfo();
        return `${parentFuncResult}, ${salary}, ${department}`;
    }
}

class Developer extends Employee {
    manager;

    setManager(newManager) {
        this.manager = newManager;
    };
}

class Manager extends Employee {
    developers = [];

    removeDeveloper(deletedDeveloper) {
        this.developers = this.developers.filter((itemDev) => {
            return deletedDeveloper !== itemDev;
        });
    };

    addDeveloper(newDeveloper) {
        this.developers.push(newDeveloper);
    };

}












