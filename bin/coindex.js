#!/usr/bin/env node
const program = require('commander');
const pkg = require('../package.json');

program
       .version(pkg.version)
       .command('key' , 'Manage API key https://nomics.com')


//console.log("Hello from coindex")




program.parse(process.argv)