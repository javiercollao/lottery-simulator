export const generateRandomNumbers = (inputNumbers)  => {
  const availableNumbers = Array.from({ length: 25 }, (_, i) => i + 1);
  const filteredNumbers = availableNumbers.filter(num => !inputNumbers.includes(num));
  
  const randomNumbers = Array.from({ length: 14-inputNumbers.length }, () => {
    const randomIndex = Math.floor(Math.random() * filteredNumbers.length);
    return filteredNumbers.splice(randomIndex, 1)[0];
  });

  let result = inputNumbers.concat(randomNumbers);
  return result.sort((a, b) => a - b);
}