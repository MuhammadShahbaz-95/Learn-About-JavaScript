const accountId = 1243455
let acoountEmail = "shahbaz@gmail.com"
var accountPassword = "19383748"
userCity = "karachi"
let accountState;

acoountEmail = "Ali@gmail.com"
accountPassword = "111111"
userCity = "lahore"
// accountId = 1212    // const value change not allowed

//this is for single valve print
console.log(accountId);

//this is for multiple valve print on table form
console.table([accountId,acoountEmail, accountPassword,userCity,accountState])

/*
pldo not use to (var)
becuase of issue in block scope or functional scope 
*/