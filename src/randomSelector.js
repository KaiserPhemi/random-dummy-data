/**
 * Returns a random item from an array
 * @param {*} arr 
 * @returns 
 */
const getRandomItem = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

module.exports = getRandomItem;
