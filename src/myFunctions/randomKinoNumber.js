export const randomNumber = (array) => { 
    const randomIndex = Math.floor(Math.random() * array.length);
    const randomNumber = array[randomIndex];
    return randomNumber;
}