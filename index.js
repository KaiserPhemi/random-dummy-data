// third-party libraries
const XLSX = require("xlsx");

// module
const randomUser = require('./src/main');
const {randomSMSUser} = require('./src/main')

/**
 * generates array user details 
 * @param {number} arrLen 
 */
const userList = (arrLen) => {
  const list = []
  for(let i=0; i<=arrLen;i++) {
    list.push(randomUser())
  }
  return list;
}

const smsList = (arrLen)=> {
  const list= [];
  for(let i=0;i<arrLen;i++){
    list.push(randomSMSUser())
  }
  return list
}

/**
 * Generate excel sheet from array
 * @param {*} data 
 * @returns 
 */
const generateExcel= (data)=> {
		const workbook = XLSX.utils.book_new();
		const worksheet = XLSX.utils.json_to_sheet(data);
		XLSX.utils.book_append_sheet(workbook, worksheet, "promo_list");
    return XLSX.writeFile(workbook, "user_details.xlsx");
	}

const init = (len) => {
  // const res = userList(len)
  const res = smsList(len)
  generateExcel(res)
}

init(6000)