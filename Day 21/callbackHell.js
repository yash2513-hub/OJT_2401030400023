const fs = require('fs');
const path = require('path');

fs.readFile('file1.txt', 'utf8', (err, data1) => {
  if (err) return console.error(err);

  fs.readFile('file2.txt', 'utf8', (err, data2) => {
    if (err) return console.error(err);

    fs.readFile('file3.txt', 'utf8', (err, data3) => {
      if (err) return console.error(err);

      fs.writeFile('output.txt', data1 + data2 + data3, (err) => {
        if (err) return console.error(err);
        console.log('All files combined successfully!');
      });
    });
  });
});
