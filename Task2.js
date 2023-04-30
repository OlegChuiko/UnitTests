// Масив з можливими комбінаціями логіну та пароля
const validUsers = [
    { username: 'user1', password: 'pass1', secretPhrase: 'Secret phrase 1' },
    { username: 'user2', password: 'pass2', secretPhrase: 'Secret phrase 2' },
    { username: 'user3', password: 'pass3', secretPhrase: 'Secret phrase 3' },
  ];
  
  // Функція для перевірки логіну та пароля та повернення секретної фрази
  function checkCredentials(username, password) {
    const user = validUsers.find(user => user.username === username && user.password === password);
    if (user) {
      return user.secretPhrase;
    } else {
      return null;
    }
  }
  
  module.exports = checkCredentials;