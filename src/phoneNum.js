// modules
const randomSelector = require("./randomSelector");

// country code
const COUNTRY_CODE = "234";

// array of prefixes
const phoneNetworkPrefixes = [
  '702', '703', '704', '706', '803',
  '806', '810', '813', '814', '816',
  '903', '906', '913', '916', '701',
  '708', '802', '804', '808', '812',
  '902', '904', '907', '912', '901',
  '705', '805', '807', '811', '815',
  '905', '911', '914', '915', '809',
  '817', '818', '908', '909', '917'
]

/**
 * Generates a random mobile phone number
 * @returns - string
 */
const phoneNumberGenerator = () => {
  const firstPart = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  const secondPart = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  return `${COUNTRY_CODE}${randomSelector(phoneNetworkPrefixes)}${firstPart}${secondPart}`;
}

module.exports = phoneNumberGenerator;
