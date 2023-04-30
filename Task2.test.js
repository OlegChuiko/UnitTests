const checkCredentials = require('./Task2.js')

test('Should return the secret phrase for valid credentials', () => {
    const username = 'user1';
    const password = 'pass1';
    const expected = 'Secret phrase 1';
    const actual = checkCredentials(username, password);
    expect(actual).toBe(expected);
  });

  
  test('Should return null for invalid credentials', () => {
    const username = 'invaliduser';
    const password = 'invalidpass';
    const expected = null;
    const actual = checkCredentials(username, password);
    expect(actual).toBe(expected);
  });

  
  test('Should return null for invalid password', () => {
    const username = 'user1';
    const password = 'invalidpass';
    const expected = null;
    const actual = checkCredentials(username, password);
    expect(actual).toBe(expected);
  });
  