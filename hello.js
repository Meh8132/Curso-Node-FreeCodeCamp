const os = require('os')
const hiModule = require('./modules')
const { log } = require('console')

console.log('Hello world')

hiModule.sayHello(hiModule.name)

console.log(os.type());
