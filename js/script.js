const bankaccount = {
    accountName: "John",
    balance: 1000,

    getBalance(balance) {
        return this.balance;
    },

    deposit(input) {
        return this.balance;
    },

    withdrawal(output) {
        return this.balance;
    },

    getAccountName(holder) {
        return this.accountName;
    },

    accountError() {
        return "Account error";
    },

    exitAccount() {
        return "Account closed";
    }

    
}