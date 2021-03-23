const configstore = require('configstore');
const packageJson = require('../package.json')



class keyManager{
    constructor() {
        this.conf = new configstore(packageJson.name)
    }

    setKey(key){
        this.conf.set("APIkey" , key)
        return key
    }

    getKey(){
        const key = this.conf.get("APIkey")

        if(!key){
            throw new Error('No API key FOUND')
        }

        return key
    }

    deleteKey(){
        const key = this.conf.get("APIkey")

        if(!key){
            throw new Error('No API key FOUND')
        }
        this.conf.delete("APIkey")

        return
    }
    
}


module.exports = keyManager;







    

    
    


