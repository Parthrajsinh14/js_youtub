const accountId = 122342  //we cannot change value which is saved using const
let accountEmail= "parth@gmail.com"
var accountPassword = "12345"
accountCity = "Nadiad"


let accountState ; 

//accountId = 2  
accountEmail = "kosamiya@gmail.com"
accountPassword = "212121"
accountCity = "Surat"

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])//print values in table
//prefer not to use var in function/Block scope beacuse it values will be same for in the function and out off the function