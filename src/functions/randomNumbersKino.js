function generateRandomNumbers(favoriteNumbers) {
    const allNumbers = Array.from({ length: 25 }, (_, i) => i + 1);
    const possibleNumbers = allNumbers.filter(num => !favoriteNumbers.includes(num));
    
    const result = [];
    while (result.length < 14) {
      const index = Math.floor(Math.random() * possibleNumbers.length);
      const randomNumber = possibleNumbers.splice(index, 1)[0];
      result.push(randomNumber);
    }
    
    return result;
  }
  
  const favoriteNumbers = [2, 5, 7, 11, 13];
  const randomNumbers = generateRandomNumbers(favoriteNumbers);
  console.log(randomNumbers.sort((a, b) => a - b)); 