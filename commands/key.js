const KeyManager = require('../lib/KeyManager')
const inquirer = require('inquirer')
const {isRequired} = require('..//utils/validation')
const test = require('../utils/colorTheme')



const key = {

    async set(){
      const keyManager = new KeyManager() ;
      const input = await inquirer.prompt([
        {
            type : 'input',
            name : 'key',
            message : 'Enter API key , please'.info,
            validate : isRequired
          } 
    ])
       //console.log(input)
     const key =  keyManager.setKey(input.key)

     if(key){
         console.log(`API Key ${key} is created`.verbose)
     }
     
    },


    show(){
      
        try {
        const keyManager = new KeyManager() ;
        const key  = keyManager.getKey()
        console.log(`Current API key : ${key}`.info)
            
        } catch (error) {
            console.log(error)
        }
    },




    remove(){
        console.log("Hello from remove")
    }
   

}

module.exports = key;