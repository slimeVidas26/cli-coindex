const configstore = require('configstore');
const packageJson = require('../package.json');
const colors = require('../utils/colorTheme')


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
            throw new Error(colors.warn("api key not found"))
        }
        return key;
    }

    deleteKey(){
        const key = this.conf.get("apiKey");
        if(!key){
            throw new Error("api key not found")
        }
        this.conf.delete("apiKey");
        return;
    }
}

module.exports = KeyManager;