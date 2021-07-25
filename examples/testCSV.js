const csv = require('../index');

const arr = csv('./test.csv', ',').then((arr) => {
  console.log(arr);
})

