/*
const { run, get } = require('node-cmd')

const { dependencies } = require('./../package.json')

const display = function(err, data, stderr) {
  console.log(data)
}

const pwd = function(err, data, stderr) {
  get('pwd', function(data) {
    console.log('the current working dir is : ', data)
  })
}

const changeDirectory = function(str = '') {
  run('cd ' + str)
}

const testModule = function (moduleName) {
  changeDirectory(moduleName)
  pwd()
  //get('npm test', display)
  changeDirectory('..')
}

run('cd node_modules')
for (moduleName in dependencies) {
  console.log(moduleName)
  testModule(moduleName)
}
*/
