const fs = require('fs');
const CSV = require('./CSV');

/**
 * 
 * @param {string} fileURL 
 * @returns A pending promise containing the buffer of the file.
 */
function readFile(fileURL) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileURL, (err, data) => {
      if(err) reject('Could not read file!');
      resolve(data);
    })
  })
}

/**
 * 
 * @param {Object} csv - The created object from the readFileAndCreateObj function.
 * @returns The 2D-array where every row is in an array each.
 */
module.exports.convertToArray = function(csv) {
  let arr = csv.splitFile();
  csv.make2dRows(arr);
  return csv.rows;
}

/**
 * 
* @param {string} fileURL - A valid Node CSV-filepath, ex. './test.csv'.
 * @param {string} delimiter - Normally a ',' but can be other symbols depending on CSV file origin.
 * @returns CSV Object
 */
module.exports.readFileAndCreateObj = async function(fileURL, delimiter) {
  try {
    let file = await readFile(fileURL);
    const csv = new CSV(file.toString(), delimiter);
    return csv;
  } catch(e) {
    console.error(e.message);
  }
  
} 

