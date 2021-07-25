This is a library made for personal use to convert a CSV-file to a 2D-array, 
to easily import the information into a database. 

As of version 1, only CSV-files from Google is tested. Note that CSV-files doens't have a standard.
You can use ',' inside the values. Using quotes (") inside values is not supported at the moment.

How to use:

```
npm install csvto2darray
```

The csv function takes two parameters, first the path to the CSV-file and then a delimiter. 
Usually the delimiter is a comma ',' in a CSV file. 
The function returns a promise and hence you need to use 'then' or async/await to retrieve the returned value.

```
const csv = require('csvto2darray');

csv('./test.csv', ',').then((arr) => {
  console.log(arr);
});
```