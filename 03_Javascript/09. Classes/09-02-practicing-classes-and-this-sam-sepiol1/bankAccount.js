// bankAccount.js

class BankAccount {
    constructor(name, iban, initialDeposit, password) {
        if (initialDeposit < 100) {
            throw new Error("Initial deposit must be at least 100 euros");
        }
        this.name = name;
        this.iban = iban;
        this.initialDeposit = initialDeposit;
        this.balance = initialDeposit;
        this.password = password;
        this.transactions = [];
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds");
            return;
        }
        this.balance -= amount;
        console.log(`You've withdrawned ${amount}$. Balance is now ${this.balance}`);
        this.addTransaction(-amount);
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`You've deposited ${amount}$. Balance is now ${this.balance}`);
        this.addTransaction(amount);
    }

    transactionsHistory(args = {}) {
        if (!args.password) {
            return "no password given";
        } else if (args.password !== this.password) {
            return "wrong password";
        } else {
            return this.transactionsHistory;
        }
    }

    getIban() {
        // Partial getter (hides the middle of the IBAN like FR14**************606)
    }

    toString() {
        // TODO: return a string with the account owner, the hidden iban and the balance of the account
    }

    addTransaction(amount) {
        this.transactionsHistory.push(amount + this.day());
        console.log(this.transactionsHistory.push(amount + this.day()));
    }

    day() {
        let now = new Date();
        return now;
    }
}

module.exports = BankAccount;
