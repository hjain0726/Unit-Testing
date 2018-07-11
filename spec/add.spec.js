describe('This is an add suite', () => {
    it('add two numbers', () => {
        var one = 100;
        var two = 200;
        var result = add(one, two);
        expect(result).toBe(300);
    });

    it('add one number', () => {
        var one = 100;
        var result = add(one);
        expect(result).toBe(100);
    });

    it('add no numbers', () => {
        var result = add();
        expect(result).toBe(0);
    });

    it('add two string', () => {
        var result = add("100", "200");
        expect(result).toBe(300);
    });
});