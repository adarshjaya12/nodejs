var accounts = {
  name : "Adarsh",
      age : 15
};
var account = [];
account.push(accounts);
console.log(account);
account.forEach(function (account)
       {
   console.log(account.name); 
});