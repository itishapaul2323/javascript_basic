const accountId = 123123;
let accountEmail = "itisha@itisha.com";
var accountPassword = "12345";
accountCity = "Kolkata";
let accountState;

accountEmail = "ip@ip.com";
accountPassword = "121233";
accountCity = "Bengaluru";

/*
    Avoid using var because of block and function scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);