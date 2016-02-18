var crypto = require('crypto-js');
var accounts = {
	name  : 'AJ',
	age   :  23
};

var key ='abc123'
var decryptMessage = crypto.AES.encrypt(accounts,key);