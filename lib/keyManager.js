const configstore = require('configstore');
const packageJson = require('../package.json');

class KeyManager{
    constructor(){
        this.conf = new configstore(packageJson.name);
    }

    setKey(key){
        this.conf.set("apiKey" , key)
        return key;

    }

    getKey(){
        const key = this.conf.get("apiKey");
        if(!key){
            throw new Error("api key not found")
        }
        return key;
    }

    deleteKey(){
        const key = this.conf.get("apiKey");
        if(!key){
            throw new Error("api key not found")
        }
        this.conf.delete(key);
        return key;
    }
}

module.exports = KeyManager;