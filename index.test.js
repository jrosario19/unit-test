const Func = require('./index.js');
const calculate = Func.Calculate;

describe('String', () => {
    test('length of string is 6', () => {
        expect(Func.lengthOfString('string')).toBe(6);
    });
    test('length of string is too short', () => {
        expect(() => Func.lengthOfString('')).toThrow();
    });
    test('length of string is too long', () => {
        expect(() => Func.lengthOfString('stringstring')).toThrow();
    });
    test('string is reversed', () => {
        expect(Func.stringReverse('string')).toBe('gnirts');
    });

    test('string is capitilized', () => {
        expect(Func.capitalize('string')).toEqual('String');
    })
});

describe('Calculator', () => {
    const calc = new calculate();
    describe('Add', () => {
        test('sum of 7 and 7 is 10', () => {
            expect(calc.add(3, 7)).toBe(10);
        });
        test('sum of -7 and 13 is 6', () => {
            expect(calc.add(-7, 13)).toBe(6);
        });
        test('sum of 10 and 5 is less than 16', () => {
            expect(calc.add(10, 5)).toBeLessThan(16);
        });
    });

    describe('Subtraction', () => {
        test('substracting 10 from 3 equals 7', () => {
            expect(calc.sub(10, 3)).toBe(7);
        });
        test('substracting -5 from -3 equals -2', () => {
            expect(calc.sub(-5, -3)).toBe(-2);
        });
        test('substracting 19 from 10 is less than 10', () => {
            expect(calc.sub(19, 10)).toBeLessThan(10);
        });
    });

    describe('Division', () => {
        test('divide 6 and 2 is Less Than Or Equal 3', () => {
            expect(calc.div(6, 2)).toBeLessThanOrEqual(3);
        });
        test('divide -8 and -1 equal 8', () => {
            expect(calc.div(-8, -1)).toBe(8);
        });
        test('divide 20 and 4 equal to 5', () => {
            expect(calc.div(20, 4)).toBe(5);
        });
    });

    describe('Multiplication', () => {
        test('multiply 5 and 3 equal 15', () => {
            expect(calc.mul(5, 3)).toBe(15);
        });
        test('multiply -2 and -3 equal 6', () => {
            expect(calc.mul(-2, -3)).toBe(6);
        });
        test('multiply 3 and 2 equal 6', () => {
            expect(calc.mul(3, 2)).toBeGreaterThan(5);
        });
    });
});