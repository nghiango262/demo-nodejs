/** 
 * Create by Ngo NGHIA
*/

const fs = require('fs')
const logs_path = __dirname + '/../data/logs/'

module.exports = {
    createNewFile: (filename, content) => {
        // write to a new file named 2pac.txt
        fs.writeFile(filename, content, (err) => {  
            // throws an error, you could also catch it here
            if (err) console.log(err);

            // success case, the file was saved
            //console.log('File saved!');
        });
    },
    appendFile: (filename, newline) => {
        let path = logs_path + filename
        fs.appendFile(path, newline + '\r\n', 'utf-8', function (err) {
            if (err) throw err;
            //console.log('Saved!');
        });
    },
    readFile: (path) => {
        fs.readFile(path, (err, data) => {
            if (err) throw err;
            console.log('Reading file at: ' + path);
            //console.log(data.toString());
        });
    }
}