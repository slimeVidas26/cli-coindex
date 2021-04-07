const { program } = require("commander");
const colors = require('../utils/colorTheme')
const CryptoApi = require('../lib/CryptoApi')
const KeyManager = require('../lib/KeyManager')





const check = {
    options : program.opts(),
    //price : (options)=>console.log(colors.silly(options.coin),colors.verbose(options.cur))
    async price(options){
        try {
            keyManager = new KeyManager();
            const key =  keyManager.getKey();
            const cryptoApi = new CryptoApi(key);

           const priceOutputData = await cryptoApi.getPriceData(options.coin , options.cur) 
           console.log(priceOutputData); 
        } catch (error) {
           console.log(error) 
        }
        
    }

 
    
}


module.exports = check;