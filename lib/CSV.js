/**
 * 
 * @param {string} word - Checks every word in every row if it contains redundant white spaces.
 * @returns The word without redundant white space in the end of it.
 */
function cleanSpaces(word) {
  if(word[word.length - 1] === " ") {
    word = word.substr(0, word.length - 1);
  }
  return word;
}

module.exports = class CSV {
  constructor(file, delimiter) {
    this.file = file;
    this.delimiter = delimiter;
    this.rows = [];
  }

  /**
   * Splits file on \r\n, this might only work for google export.
   * @returns An array with the columsn splitted for every row. 
   */
  splitFile() {
    const arr = this.file.split('\r\n');
    return arr;
  }

  /**
   * 
   * @param {Array} arr - Manipulates the array so every row gets its own array and pushes that one into this.rows.
   */
  make2dRows(arr) {
    arr.forEach((subArr) => {
      let active = false;
      let num = 0;
      subArr = subArr.split('')
        .map((c) => {
          if(c === this.delimiter && !active) {
            return 'SPLITITHERE';
          } else if (c === '\"') {
            num += 1;
            if(num % 2 != 0) active = true;
            else active = false;
          } else return c;
      }).join('').split('SPLITITHERE');
      subArr = subArr.map((word) => cleanSpaces(word));
      this.rows.push(subArr);
    })  
  }
}




