const KeyManager = require('../lib/KeyManager')
const inquirer = require('inquirer')
const colors= require('colors')
const {isRequired} = require('..//utils/validation')




const key = {

    async set(){
      const keyManager = new KeyManager() ;
      const input = await inquirer.prompt([
        {
            type : 'input',
            name : 'key',
            message : 'Enter API key , please'.green,
            validate : isRequired
          } 
    ])
       //console.log(input)
     const key =  keyManager.setKey(input.key)

     if(key){
         console.log(`API Key ${key} is created`.blue)
     }
     
    },


    show(){
        const keyManager = new KeyManager() ;
        console.log(keyManager.getKey())
    },
    remove(){
        console.log("Hello from remove")
    }
   

}

module.exports = key;