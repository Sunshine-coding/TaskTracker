const userIdGenerator = (idLength)=> {
  let userId = '';
  const lettersNumbers =
  '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (let i = 0; i < idLength; i++) {
    userId += lettersNumbers[Math.floor(Math.random() * lettersNumbers.length)];
  }
  return userId;
}

export const collectUserIds = (idLength, numberOfId) => {
  let userIdCollection = [];

  for(let i=0; i < numberOfId; i++){
    let userId = userIdGenerator(idLength);
    userIdCollection.push(userId);
  }

  return userIdCollection;
};
