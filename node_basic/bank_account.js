var accountObject ={};
var myAccountNumber = 12332;
openAccount('Adarsh','Jayakumar','23',2300,myAccountNumber);
console.log(deposit(myAccountNumber,1200));
console.log(withdraw(1212,800));
console.log(balance(myAccountNumber));
function openAccount(first,second,age,balance,number)
{
	accountObject.firstName = first;
	accountObject.secondName = second;
	accountObject.currentAge = age;
	accountObject.accountBalance = balance;  
	accountObject.accountNumber = number;

}
function deposit(accountNumber,amount)
{
	if(accountNumber == accountObject.accountNumber)
	{
		accountObject.accountBalance +=amount;
		return amount+" has been added to your account "+accountNumber;
	}
	else 
	{
		return "Invalid Account Number";
	}
	
}
function withdraw(accountNumber,amount)
{
	if(accountNumber == accountObject.accountNumber)
	{
		accountObject.accountBalance -=amount;
		return amount+" has been deduced from your account "+accountNumber;
	}
	else 
	{
		return "Invalid Account Number";
	}


}
function balance(accountNumber)
{
	if(accountNumber == accountObject.accountNumber)
	{
		return "Balance : "+accountObject.accountBalance;
	}
}
