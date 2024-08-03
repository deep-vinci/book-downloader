const fs = require('fs');
const path = require('path');

// Path to the file containing book names
const filePath = path.join(__dirname, 'books.txt');

// Read the file content
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  // Split the file content by new lines to get an array of book names
  const bookNames = data.split('\n').filter(Boolean); // filter(Boolean) removes empty lines

  // Generate and print the URLs
  bookNames.forEach(bookName => {
    const encodedBookName = encodeURIComponent(bookName);
    const url = `https://annas-archive.org/search?q=${encodedBookName}`;
    console.log(url);
  });
});

const { exec } = require('child_process');
exec('ls', (err, stdout, stderr) => {
  if (err) {
    // node couldn't execute the command
    return;
  }

  // the *entire* stdout and stderr (buffered)
  console.log(stdout);
});

