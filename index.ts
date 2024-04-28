#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 10000;
let myPin = 1122;
console.log(chalk.green("\n \t* WELCOME TO MY ATM MACHINE *\n"))
let answer = await inquirer.prompt({
    name: "pin",
    message: "enter your pin :",
    type: "number",
});
if (answer.pin === myPin) {
    console.log("correct pin ");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "select operation you wanna do :",
            type: "list",
            choices: ['checkbalance', 'withdrawl'],
        }
    ]);
    if (operationAns.operation === "withdrawl") {
        let withDrawAns = await inquirer.prompt([
            {
                name : "withdrawMethod",
                type: "list",
                message: "Please select a withdraw method",
                choices: ["Fast cash", "Enter amount"]
            }
        ]);
        if (withDrawAns.withdrawMethod === "Fast cash"){
            let fastCashAns = await inquirer.prompt([
            {
                name: "options",
                message: "please select an option :",
                type: "list",
                choices:[1000 ,2000 ,5000 ,10000 ,20000] 
            }
        ]);
        if(fastCashAns.options > myBalance){
            console.log("insufficient Balance!")
        }else{
             myBalance -= fastCashAns.options
             console.log(fastCashAns.options + " withdrawn successfully!")
             console.log("your remaining balance is : " + myBalance)
        }
        }

        else if(withDrawAns.withdrawMethod === "Enter amount"){
            let amountAns = await inquirer.prompt({
                    name: "amount",
                    message: "enter amount :",
                    type: 'number'
            });
           if(amountAns.amount > myBalance){
                console.log("insufficient balance :")
            }else{
                    myBalance -= amountAns.amount;
                    console.log(amountAns.amount + " withdrawn successfully! ")
                    console.log("your remaining amount is : " + myBalance)
            }
        }
     
    }
    else if (operationAns.operation === "checkbalance") {
        console.log(" your account balance is : " + myBalance);
    }
}
else {
    console.log("invalid pin!!");
}
