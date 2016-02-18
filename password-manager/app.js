console.log('starting password manager');
var storage = require('node-persist');
var crypto = require('crypto-js');
storage.initSync();
var argv = require('yargs')
		.command('create','Create a new account',function(yargs)
		{
			yargs.options({
				 Name:{
				 	demand: true,
				 	alias: 'n',
				 	description: 'Account name',				
					type: 'string'
				},
				 userName:{
				 	demand:true,
				 	alias :'u',
				 	description: 'User name',				
					type:'string'
			 	},
			    password:{
				 	demand: true,
				  	alias: 'p',
				 	description: 'Account Password',				 
					type: 'string'
				},
				masterPassword:
				{
					demand : true,
					alias  : 'm',
					description : 'Master Password',
					type : 'string'

 				}
			}).help('help');

		})

		.command('get','Get a new account',function(yargs)
		{
			yargs.options({
				 Name:{
				 	demand: true,
				 	alias: 'n',
				 	description: 'Account name',				
					type: 'string'
					}
			}).help('help');

		})

		.help('help')
		.argv;
var command = argv._[0];

function getAccounts(masterPassword)
{
	var encryptedAccount = storage.getItemSync('accounts');
	var accounts = [];
	if(typeof encryptedAccount != 'undefined')
	{
		var bytes = crypto.AES.decrypt(encryptedAccount,masterPassword);
		var account = JSON.parse(bytes.toString(crypto.enc.Utf8));
	}
	
	return accounts;
}

function saveAccount(accounts,masterPassword)
{
	var encryptedAccounts = crypto.AES.encrypt(JSON.stringify(accounts),masterPassword);
	storage.setItemSync('accounts',encryptedAccounts.toString());

	return accounts;
}

function createAccount(account,masterPassword)
{
    var accounts = getAccounts(masterPassword);
    accounts.push(account);
    saveAccount(accounts,masterPassword);
//    storage.setItemSync('accounts',accounts);
    return account;
    
}
function getAccount(accountName,masterPassword)
{
	var accounts = getAccounts(masterPassword); 
	var matchedAccount;
	accounts.forEach(function(account)
	{
		if(account.Name === accountName)
			matchedAccount = accounts; 
	});
    return matchedAccount;
}

if(command === 'create' )
{
	var createdAccount = createAccount({
		Name     : argv.Name,
		userName : argv.userName,
		password : argv.password
	},argv.masterPassword);
	console.log("Account Created");
	console.log(createAccount);
}
else if(command ==='get')
{
	var fetchedAccount = getAccount(argv.Name,argv.masterPassword);
	//var fetchedAccount ="gmail"
	if(typeof fetchedAccount == 'undefined')
		console.log(" Account not found");
	else
		console.log("Account found");
	    console.log(fetchedAccount);
}




 










