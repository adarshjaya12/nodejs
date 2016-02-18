function addNumber(variable1)
{
	return function (variable2)
	{
		return variable1 + variable2;
	}
}

var addSum = addNumber(10);
console.log(addSum(10));