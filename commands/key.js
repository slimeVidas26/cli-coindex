const KeyManager = require('../lib/KeyManager')
const inquirer = require('inquirer')
const {isRequired} = require('..//utils/validation')
const colors = require('../utils/colorTheme')



const key = {

    async set(){
      const keyManager = new KeyManager() ;
      const input = await inquirer.prompt([
        {
            type : 'input',
            name : 'key',
            message : colors.info('Enter API key , please'),
            validate : isRequired
          } 
    ])
       //console.log(input)
     const key =  keyManager.setKey(input.key)

     if(key){
         console.log(colors.verbose(`API Key ${key} is created`.verbose))
     }
     
    },


    show(){
        try {
        const keyManager = new KeyManager() ;
        const key  = keyManager.getKey()
        console.log(colors.info(`Current API key : ${key}`))
            
        } catch (error) {
            console.log(error.message)
        }
    },

    remove(){
       try {
           const keyManager = new KeyManager();
           keyManager.deleteKey();
           console.log(colors.info(` API key has been removed`))
           return;
           
       } catch (error) {
          console.log(error.message.red) 
       }
    }
   

}

module.exports = key;