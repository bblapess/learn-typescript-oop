describe('Parameter Properties', () => {
   class Person {
       constructor(public name: string){
       }
   }

    it('should support', () => {
        const person = new Person('Iqbal');
        console.info(person.name)

        person.name = 'Budi';
        console.info(person.name)
    });
});