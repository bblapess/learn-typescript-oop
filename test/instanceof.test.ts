describe('Instanceof', () => {
   class Employee {}
   
   class Manager {}
    
    const budi = new Employee();
    const iqbal = new Manager();

    it('should have problem using typoeof', () => {
        console.info(typeof budi);
        console.info(typeof iqbal);
    });

    it('should support instanceof', () => {
        expect(budi instanceof Employee).toBe(true);
        expect(budi instanceof Manager).toBe(false);

        expect(iqbal instanceof Employee).toBe(false);
        expect(iqbal instanceof Manager).toBe(true);
    });
});