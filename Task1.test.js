const joinAndRemoveZ = require('./Task1.js')

test('should concatenate array of strings without "z" characters', () => {
    const arr = ['hello', 'world', 'nodejs', ''];
    const result = joinAndRemoveZ(arr);
    expect(result).toEqual('hellonodejs');
  });
  
  test('should return empty string when all strings contain only "z" characters', () => {
    const arr = ['zz', 'zzz', ''];
    const result = joinAndRemoveZ(arr);
    expect(result).toEqual('');
  });
  
  test('should return empty string when input array is empty', () => {
    const arr = [];
    const result = joinAndRemoveZ(arr);
    expect(result).toEqual('');
  });




 