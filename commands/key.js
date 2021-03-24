const KeyManager = require('../lib/KeyManager')
const config = new KeyManager()
const inquirer = require('inquirer')
const colors= require('colors')




const key = {

    async set(){
      const keyManager = new KeyManager() ;
      const input = await inquirer.prompt([
        {
            type : 'input',
            name : 'key',
            message : 'Enter API key , please'
          } 
    ])
      keyManager.set( input)
    },


    show(){
        console.log("Hello from show")
    },
    remove(){
        console.log("Hello from remove")
    }
   

}

module.exports = key;