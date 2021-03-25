const colors= require('colors')

colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
  });

//validate input
const isRequired = input=>input === "" ? colors.error("A value is required") : true;


module.exports = {isRequired}