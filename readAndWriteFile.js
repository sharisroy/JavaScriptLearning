
// const fs = require("fs");
// const readline = require("readline");

// const stream = fs.createReadStream("./data.csv");
// const reader = readline.createInterface({ input: stream });

// let data = [];

// reader.on("line", row => {
//   //  split a row string into an array
//   // then push into the data array
//   data.push(row.split(","));
// });

// reader.on("close", () => {
//   // reached the end of file
//   console.log(data);
// });

const csv = require('csv-parser');
const fs = require('fs');

fs.createReadStream('data.csv')
  .pipe(csv())
  .on('data', (row) => {
    console.log(row);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });