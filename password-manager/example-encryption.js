var crypto = require('crypto-js');

var secretMessage ={
	name: 'Androw'
	secretName = 009
};

var secretKey = '123ascvb';

var encryptedMessage = crypto.AES.encrypt(secretMessage,secretKey);
console.log("Encrypted Message is "+encryptedMessage);

// Decrypt

var bytes = crypto.AES.decrypt(encryptedMessage,secretKey);
var decryptMessage = bytes.toString(crypto.enc.Utf8);
console.log("The message is "+decryptMessage );

