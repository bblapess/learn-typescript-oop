describe('Polymorphism', () => {

    class Employee {
        constructor(public name: string) {
        }
    }

    class Manager extends Employee {

    }

    class VicePresident extends Manager {

    }

    function sayHello(employee: Employee): void {
        if(employee instanceof VicePresident) {
            const vp = employee as VicePresident;
            console.info(`Hello ${vp.name}, I am your vice president`);
        } else if (employee instanceof Manager) {
            const manager = employee as Manager;
            console.info(`Hello ${manager.name}, I am your manager`);
        } else {
            console.info(`Hello ${employee.name}, I am employee`);
        }
    }

    it('should support', () => {
        let employee: Employee = new Employee('Iqbal');
        console.info(employee.name);

        employee = new Manager('Pamula');
        console.info(employee.name);

        employee = new VicePresident('Rizki');
        console.info(employee.name);
    });

    it('should support method parameter polymorphism', () => {
        sayHello(new Employee('Iqbal'));
        sayHello(new Manager('Pamula'));
        sayHello(new VicePresident('Rizki'));
    });
});