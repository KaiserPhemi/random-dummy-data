// third-party libraries
const { faker } = require('@faker-js/faker/locale/en_NG');

// modules
const phoneNumberGenerator = require("./phoneNum");

/**
 * Generates a random client
 * @returns 
 */
const randomUser = () => {
  return {
    gender: faker.person.sex(),
    location: faker.location.state().toLowerCase(),
    used_by: phoneNumberGenerator(),
    voucher_code: faker.string.numeric({ length: 5, allowLeadingZeros: false }),
    voucher_value: faker.number.int({ min: 50, max:1000 }),
    used_on:faker.date.between({ from: '2023-05-01T00:00:00.000Z', to: '2023-11-05T00:00:00.000Z' })
  }
}

const randomSMSUser = ()=> {
  return {
    message: faker.lorem.slug(10),
    phone_number: phoneNumberGenerator(),
    shortcode: 8011,
    delivered: faker.datatype.boolean(0.85),
    created_at:faker.date.between({ from: '2023-05-01T00:00:00.000Z', to: '2023-11-05T00:00:00.000Z' }),

  }
}

module.exports = {randomUser, randomSMSUser};
