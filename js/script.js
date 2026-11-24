const bankaccount = {
    accountName: "John",
    balance: 1000,
    accountOpen: true,



    deposit(input) {
        return this.balance += input;
    },

    withdrawal(output) {
        return this.balance -= output;
    },

    accountError() {
        if (this.accountName !== "John") 
        return "Account error";
    },

    exitAccount() {
        if (this.accountOpen === false) 
        return "Account closed";
    }

    };