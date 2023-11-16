// third-party libraries
const XLSX = require("xlsx");
const crypto = require('crypto');

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
  const randomString = crypto.randomUUID();

  // Load the Excel template
  const templatePath = "./src/docTemplates/temp_sheet.xlsx";
  const workbook = XLSX.readFile(templatePath);

  // Access the desired sheet in the workbook
  const sheetName = 'report';
  let sheet = workbook.Sheets[sheetName];
  sheet = XLSX.utils.sheet_add_json(sheet, data, {origin: 'A3'});

  // file name
  const outputPath = `src/reports/service_report_${new Date().toISOString().slice(0,10)}_${randomString.slice(0,7)}.xlsx`;
  return XLSX.writeFile(workbook, outputPath, { bookType: 'xlsx' });
}

const init = (len) => {
  // const res = userList(len)
  const res = smsList(len)
  generateExcel(res)
}

init(6000)