var accounts = [];
var myObject = {
	userName : "Undefined" ,
	accounts : 0,
	balance : 0
};

function createAccount (username,password,balance)
{
	myObject.userName = username;
	myObject.accounts = password;
	myObject.balance = balance;
	accounts.push(myObject);
	//return myObject;
}
function getAccount(username)
{
	var matchedAccount;
	accounts.forEach(function(account){
		if(myObject.userName == username)
		{
			matchedAccount = username;
			
		}});
	return matchedAccount;
}
function deposit(amount)
{
	myObject.balance += amount;
	return "After deposit The updated balance is "+myObject.balance;
	
}
function displayAccounts()
{
	accounts.forEach(function(accounts){
		console.log("Name :"+accounts.userName);
		console.log("Account Number :"+accounts.accounts);
		console.log("Balance :"+accounts.balance);
	});
}
function withdraw(amount)
{
	myObject.balance -= amount;
	return "After withdraw The updated balance is "+myObject.balance;
}
function balance()
{
	return myObject.balance;
}


createAccount("Adarsh",1234,1500);
var currentUser = getAccount("Adarsh");
console.log(deposit(1000));
console.log(withdraw(600));
console.log(balance());
//console.log(displayAccounts());




