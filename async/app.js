var weather = require('./weather.js');
var location = require('./location.js');
var argv = require('yargs')
	.option('location',{
		alias  : 'l',
		demand : false,
		describe : 'Location to fetch weather for',
		type : 'string'
	})
	.help('help')
	.argv;
if(typeof argv.l == 'string' && argv.l.length > 0 )
{
	var myLocation = argv.l;
	    weather(myLocation).then(function(returnValue){
		console.log(returnValue);
	}).catch(function(error){
		console.log(error);
	});
}
else
{
	console.log("Location is not provided");
	location().then(function(myvariable){
		return weather(myvariable.city);
	}).then(function(returnValue){
		console.log(returnValue);
	}).catch(function(error)
	{
		console.log(error);
	});
}

