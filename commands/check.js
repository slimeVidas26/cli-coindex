
const CryptoApi = require('../lib/CryptoApi')


const api  = new CryptoApi()

const check = {
    //price : (cmd)=>console.log(cmd.coin , cmd.cur)
    price : ()=>api.getSomeData("toto api")
}


module.exports = check;