const fs = require('fs');
// const path = require('path');

const _listFiles = (dirPath) => {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      return console.log('Unable to scan directory: ', err);
    }
    console.log(files)
    files.forEach(file => {
      console.log(file)
    });

    // return files;
  })
}

module.exports = {
  listDirectoryFiles: _listFiles
}