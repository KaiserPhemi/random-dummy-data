/**
 * Returns a random item from an array
 * @param {*} arr 
 * @returns 
 */
const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

module.exports = getRandomItem;
