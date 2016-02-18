var argv = require('yargs')
		.command('hello','Greets the user',function (yargs){
			yargs.options({
				firstName : {
					demand : true,
					alias :'f',
					description : 'Your first Name goes here'
				}
			}).help('help');

			yargs.options({
				lastName : {
					demand : true,
					alias :'l',
					description : 'Your Last Name goes here'
				}
			}).help('help');
		})
		.help('help')
		.argv;
var command = argv._[0];
if(command === 'hello' && argv.firstName =="Adarsh" && argv.lastName == "Jayakumar")
	console.log(argv._[0]+" "+argv.firstName+" "+argv.lastName);
