const csv = require('../lib/index');

const arr = csv('./test.csv', ',').then((arr) => {
  console.log(arr);
})

