/*Re-write the following code using TypeScript. 
Try to be as explicit as possible and add Types to everything you can. 
When you are done, transpile the TS code to JS code and inspect the JS code.
*/

// let bankAccount = { 
// 	money: 2000, 
// 	deposit(value) { 
// 		this.money += value; 
// 	} 
// }; 
// let myself = { 
// 	name: "Asaad", 
// 	bankAccount: bankAccount, 
// 	hobbies: ["Violin", "Cooking"] 
// }; 

// myself.bankAccount.deposit(3000); 
// console.log(myself);

let bankAccount : {
    money: number;
    deposit (value: number)
};

bankAccount = {
    money: 2000,
    deposit (value: number){
        this.money += value
    }
} 
let myself : {
    name: string;
    bankAccount;
    hobbies: [string, string]
};

myself = {
    name : "Assad",
    bankAccount: bankAccount,
    hobbies: ["Violin", "Cooking"] 

}

myself.bankAccount.deposit(3000); 
console.log(myself);
