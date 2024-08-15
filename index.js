#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
let myBalance = 40000;
let myPin = 1234;
console.log("WELCOME AFREEN ATM MACHINE");
let pinAnswer = await inquirer_1.default.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin code: "
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("your Pin is Correct Login SUCCESSFULLY");
    // console.log(`current Account balance is ${myBalance}`)
    let operationAns = await inquirer_1.default.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select Your Operation",
            choices: ["withdraw Amount", "check balance"]
        }
    ]);
    if (operationAns.operation === "withdraw Amount") {
        let amountAns = await inquirer_1.default.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount to withdraw:"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("insufficent balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} withdraw successfully`);
            console.log(`Your Remaining Balance is: ${myBalance}`);
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`your account balance is : ${myBalance}`);
    }
}
else {
    console.log("pin is incorrect please try again");
}
