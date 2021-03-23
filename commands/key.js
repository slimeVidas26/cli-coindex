const KeyManager = require('../lib/keyManager')
const inquirer = require('inquirer')
const colors = require('colors')
const keyManager = require('../lib/keyManager')

const key = {
    set(){
       const keyManager = new KeyManager() 
       const key = keyManager.setKey("123456")
       console.log(key)
    },
    show(){
        console.log("Hello from show")
    },
    remove(){
        console.log("Hello from remove")
    },

}

module.exports = key;