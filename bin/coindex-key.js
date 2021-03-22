const program = require('commander');


program
    .command('set')
    .description('set API key ----- get at https://nomics.com')
    .action(()=> console.log("hello from set"))

    program
    .command('show')
    .description('show API key ')
    .action(()=> console.log("hello from show"))

    program
    .command('remove')
    .description('remove API key ')
    .action(()=> console.log("hello from remove"))


program.parse(process.argv)