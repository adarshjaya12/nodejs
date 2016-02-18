var crypto = require('crypto-js');
var ani ={
	name : 'Adarsh',
	age  : 50
};
var encryptKey = 'abc123';
var animalJSON = JSON.stringify(ani);

var encrypted = crypto.AES.encrypt(animalJSON,encryptKey);
console.log("Encrypted is"+encrypted);

var bytes = crypto.AES.decrypt(encrypted,encryptKey);
var decryptMessage = JSON.parse(bytes.toString(crypto.enc.Utf8));
//var animalObject = JSON.parse(animalJSON);
console.log("Encrypted is "+decryptMessage);
console.log(decryptMessage.name);

