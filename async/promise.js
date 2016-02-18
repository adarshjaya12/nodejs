/*var promise  = require('request');
function doWork(shouldFail)
   {
		return new Promise(function (resolve,reject){
			setTimeout(function(){
					if(typeof shouldFail === 'boolean' && shouldFail === true)
						reject('error');
					else
						resolve('success');

			},1000);
		});
	}
	doWork()
	.then(function(message)
		{
			console.log(message);
			return doWork();
		})
	.then(function(message)
		{
			console.log(message);
		})
	.catch(function (error)
	{
		console.log(error);
	});*/

	function getLocation(){
		return new Promise(function(resolve,reject)
		{
				resolve("Chicago");
		});
	}
	function getWeather(location){
		return new Promise(function(resolve,reject){
			resolve("It is 78 in "+location+" !");
		})
	}
	getLocation().then(function(location){
		return getWeather(location);
	}).then(function(dummy){
		console.log(dummy);
	});