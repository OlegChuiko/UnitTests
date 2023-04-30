function joinAndRemoveZ(arr) 
{
    const joinedString = arr.join('');
    const resultString = joinedString.replace(/z/g, '');
    return resultString;
}

module.exports = joinAndRemoveZ






