export default findConsecutive = (arr) => {
  let consecutive = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + 1 === arr[i+1]) {
      consecutive.push(arr[i], arr[i+1]);
      i++;
    }
  }
  return consecutive;
}