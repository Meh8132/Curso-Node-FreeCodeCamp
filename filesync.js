const {readFileSync, readFile, writeFileSync, writeFile} = require('fs')

const first = readFileSync('./content/test.txt', 'utf8')

// console.log(first);

writeFileSync('./content/test.txt', 'The file has changed')

readFile('./content/test.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(result)
})