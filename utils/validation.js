const test = require('../utils/colorTheme')



//validate input
const isRequired = input=>input === "" ? colors.error("A value is required") : true;


module.exports = {isRequired}