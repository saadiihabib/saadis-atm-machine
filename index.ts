import inquirer from "inquirer";
let myBalance = 1000;
let myPin = 1122;
let answer = await inquirer.prompt({
    name: "pin",
    message: "enter your pin :",
    type: "number",
});
if (answer.pin === myPin) {
    console.log("correct");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "select operation  you wanna do :",
            type: "list",
            choices: ['checkbalance', 'withdrawl'],
        }
    ]);
    if (operationAns.operation === "withdrawl") {
        let amountAns = await inquirer.prompt({
            name: "amount",
            message: "enter amount :",
            type: 'number'
        });
        myBalance -= amountAns.amount;
        console.log("your remaining amount is : " + myBalance);
    }
    else if (operationAns.operation === "checkbalance") {
        console.log(" your account balance is : " + myBalance);
    }
}
else {
    console.log("invalid pin!!");
}
