//Outer Function
function userAccounts(choice) {
    let c = choice;

    var accounts = [
    {   
        customerName: "PARANTHAMAN",
        accountNo: 001,
        cardNumber: 54321,
        pin: 123,
        accountBalance: 500,
    },
    {
        customerName: "VISHNU",
        accountNo: 002,
        cardNumber: 54322,
        pin: 124,
        accountBalance: 500,
    },
    {
        customerName: "CHANDU",
        accountNo: 003,
        cardNumber: 54323,
        pin: 125,
        accountBalance: 500,
    },
    {
        customerName: "JERRY",
        accountNo: 004,
        cardNumber: 54324,
        pin: 126,
        accountBalance: 500,
    },
    {
        customerName: "POOJA",
        accountNo: 005,
        cardNumber: 54325,
        pin: 127,
        accountBalance: 500,
    },
    ];
//Inner Function
    function welcome() {
        cardNo = prompt("Enter Your Card Number:");
        pin = prompt("Enter Your pin:");
        for (let user of accounts) {
            if (user.cardNumber == cardNo && user.pin == pin){
                alert("WELCOME "+user.customerName);
                switch (c) {
                    case "1":
                    let withdrawAmount = parseInt(
                        prompt("Enter the amount to be withdrawn:") 
                    );

                    accounts[user.accountBalance] = user.accountBalance - withdrawAmount;
                    alert(accounts[user.accountBalance]);
                    break;

                    case "2":
                    let depositAmount = parseInt(
                        prompt("Enter the amount to be Deposited:")
                    );

                    accounts[user.accountBalance] = user.accountBalance + depositAmount;

                    alert(accounts[user.accountBalance]);
                    break;
                }
            }
        }
    }
    welcome();
}

let choice = prompt("Enter Your Choice : \n 1. Withdraw \n 2.Deposit");
let cardNo, pin
switch (choice) {
    case "1":
        userAccounts(choice);
        break;
    case "2":
        userAccounts(choice);
        break;
    default:
        alert("ERROR");
}
