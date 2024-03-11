describe('Inheritance', () => {
    class Employee {
        name: string;

        constructor(name: string) {
            this.name = name;
        }
    }

    class Manager extends Employee {

    }

    class Director extends Manager {

    }

    it('should support', () => {
        const employee: Employee = new Employee('Iqbal');
        console.info(employee.name);

        const manager: Manager = new Manager('Pamula');
        console.info(manager.name);

        const director: Director = new Director('Rizki');
        console.info(director.name);
    });
});