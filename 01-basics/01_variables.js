const accountId = 1282;
let accountEmail = "mustafaabbas0912@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState;



/* Prefer not to use var because of issue in block scope and functional scope */
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);