var argv = require('yargs')
			.command('create','Create wtf you want',function (yargs)
			{
					yargs.options
					({
						firstname:
						{
								demand : true,
								alias  : 'l',
								description : 'Enter your first Name',
								type : 'string'
						}
					}).help('help');

					yargs.options
					({
						lastName:
						{
								demand : true,
								alias  : 'l',
								description : 'Enter your last Name'
						}
					}).help('help');

			})
			.help('help')
			.argv;
//var command = argv._[0];
if(typeof argv.firstName != 'undefined' && typeof argv.lastName != 'undefined')
{
	console.log("Great");
}
else
{
	console.log("Sucks !!");
}