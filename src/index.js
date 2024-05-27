const fs = require('fs').promises;
const fileName = 'myfile.txt';

const updateFile = async (fileName, fileContent) => {
    //Write your code here to overwrite the file content
    //Don't change function name
    await fs.writeFile(fileName, fileContent);

};

updateFile(fileName, "Newton School, is an online learning platform second porson");


module.exports = updateFile;
