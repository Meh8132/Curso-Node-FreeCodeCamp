const {readFile} = require('fs')

const getText = (path, encoding) =>{
    return new Promise((resolve, reject) => {
        readFile(path, encoding, (err, data)=>{
            if(err){
                reject(err) 
            } else{
                resolve(data)
            }
        })
    })
}

getText('./content/test.txt', 'utf8')
    .then((result) => console.log(result))
    .catch((err) => console.log(err)) 

