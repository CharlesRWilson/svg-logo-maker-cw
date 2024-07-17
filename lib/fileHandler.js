const fs = require('fs');

function writeFile(filename, content) {
    fs.writeFileSync(filename, content, 'utf8');
}

module.exports = { writeFile };
