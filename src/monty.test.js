const Monty = require('../monty');
test('monty should return numbers with default parameters', () => {
    const monty = Monty();
    expect(typeof monty).toBe('number');
    expect(monty).toBeGreaterThan(500);
});

test('monty should be statistically correct', () => {
    const monty = Monty(false);
    expect(typeof monty).toBe('number');
    expect(monty).toBeLessThan(500);
});

test('monty should be configurable', () => {
    const monty = Monty(true, 10, 3);
    expect(typeof monty).toBe('number');
    expect(monty).toBeGreaterThanOrEqual(5);
});
