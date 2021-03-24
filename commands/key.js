const KeyManager = require('../lib/KeyManager')
const config = new KeyManager()


const key = {
    set(){
        config.setKey("1111111111111111111","APIkey"  )
       
    },
    show(){
        console.log("Hello from show")
    },
    remove(){
        console.log("Hello from remove")
    }
   

}

module.exports = key;