// third-party libraries
const { faker } = require('@faker-js/faker/locale/en_NG');

// modules
const phoneNumberGenerator = require("./phoneNum");

// const ageRange = "18-25" | "26-30" |"31-45"|"46+";

/**
 * Generates a random client
 * @returns 
 */
const randomUser = () => {
  return {
    gender: faker.person.sex(),
    location: faker.location.state(),
    used_by: phoneNumberGenerator(),
    voucher_code: faker.string.numeric({ length: 5, allowLeadingZeros: false }),
    voucher_value: faker.number.int({ min: 50, max:1000 }),
    used_on:faker.date.between({ from: '2023-05-01T00:00:00.000Z', to: '2023-11-05T00:00:00.000Z' })
  }
}

module.exports = randomUser;
