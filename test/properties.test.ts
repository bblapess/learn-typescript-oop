describe('Properties', () => {
    class Customer {
        readonly id: number;
        name: string = "Guest";
        age?: number;

        constructor(id: number, name: string){
            this.id = id;
            this.name = name;
        }

        sayHello(name: string) :void {
            console.info(`Hello ${name}, my name is ${this.name}`);
        }

        sayBack(name: string) :void{
            console.info(`Hello ${this.name}, my name is ${name}`);
        }
    }
    it('should can have properties', () => {
        const customer: Customer = new Customer (1, 'Iqbal');

        console.info(customer);
    })

    it('should can have method', () => {
        const customer: Customer = new Customer(1, 'Iqbal');
        customer.sayHello('Pamula');
        customer.sayBack('Pamula');
    });
})