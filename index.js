const parser = require('./lib/parser');
const path = require('path');

/**
 * 
 * @param {string} fileURL - A valid Node CSV-filepath, ex. './test.csv'.
 * @param {string} delimiter - Normally a ',' but can be other symbols depending on CSV file origin.
 * @returns A pending promise with the "Two-Dimensional Array" containing the CSV file contents. 
 */
module.exports = async function(fileURL, delimiter) {
  try {
    if(path.extname(fileURL) != '.csv') throw new Error('Only CSV files accepted!');
    const csv = await parser.readFileAndCreateObj(fileURL, delimiter);
    return parser.convertToArray(csv);
  } catch(e) {
    console.error(e.message);
  }
}
