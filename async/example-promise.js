var request = require('request');
function getWeather(myLocation)
{
	return new Promise(function(resolve,reject)
	{
		var encodedLocation =encodeURIComponent(myLocation);
		var url ="http://api.openweathermap.org/data/2.5/weather?q="+encodedLocation+"&units=imperial&appid=44db6a862fba0b067b1930da0d769e98";
		if(!myLocation)
			return reject(" No location Provided");
		request(
		{
			url : url ,
			json : true
		}, function(error,response,body)
		{
			if(error)
			{
				reject('Unable to fetch weather');
			}
			else 
			{
				resolve(body.main.temp +" is the temperature at " + body.name);
			}
		});	

	});
}


getWeather("Toyko").then(function(currentWeather)
{
	console.log(currentWeather);
}, function(error)
{
	console.log(error);
});

	
