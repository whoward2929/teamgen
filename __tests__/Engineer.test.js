const Engineer = require('./Engineer')

test('Creates Engineer Object', () => {
    const engineer = new Engineer('New Challenger', 3, 'fight@fakemail.com', 'KingSmash');
    expect(engineer.github).toEqual(expect.any(String));
});