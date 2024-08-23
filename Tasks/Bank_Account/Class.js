#!/usr/bin/node

class BankAccount {
    constructor(ownerName, currency, pin, interestRate) {
        this.ownerName = ownerName;
        this.currency = currency;
        this._pin = pin;
        this._movements = [];
        this._interestRate = interestRate;
        this._approvedLoans = [];
    }

    deposit(amount) {
        if (amount > 0) {
            this._movements.push({ type: 'Deposit', amount, timestamp: new Date() });
        }
        return this;
    }

    withdraw(amount) {
        if (amount > 0 && this.getBalance() >= amount) {
            this._movements.push({ type: 'Withdrawal', amount, timestamp: new Date() });
        }
        return this;
    }

    requestLoan(amount) {
        if (this._approveLoan(amount)) {
            this._approvedLoans.push(amount);
        }
        return this;
    }

    _approveLoan(amount) {
        return amount > 0;
    }

    calculateInterest() {
        const balance = this.getBalance();
        const interest = balance * this._interestRate / 100;
        if (interest > 0) {
            this._movements.push({ type: 'Interest', amount: interest, timestamp: new Date() });
        }
        return this;
    }

    getBalance() {
        let balance = 0;
        for (let movement of this._movements) {
            if (movement.type === 'Deposit') {
                balance += movement.amount;
            } else if (movement.type === 'Withdrawal') {
                balance -= movement.amount;
            } else if (movement.type === 'Interest') {
                balance += movement.amount;
            }
        }
        return balance;
    }

    getMovements() {
        return this._movements;
    }

    getAccountSummary() {
        const balance = this.getBalance();
        const totalInterest = this._movements
            .filter(movement => movement.type === 'Interest')
            .reduce((sum, movement) => sum + movement.amount, 0);

        return {
            ownerName: this.ownerName,
            currency: this.currency,
            balance: `${balance.toFixed(2)} ${this.currency}`,
            totalInterest: `${totalInterest.toFixed(2)} ${this.currency}`,
            movements: this.getMovements(),
        };
    }

    static hello() {
        console.log(`Welcome! Current date and time: ${new Date().toLocaleString()}`);
    }
}

// Prototype method to sort transactions by date
BankAccount.prototype.sortMovementsByDate = function() {
    this._movements.sort((a, b) => a.timestamp - b.timestamp);
    return this;
};

// SavingsAccount class extending BankAccount
class SavingsAccount extends BankAccount {
    constructor(ownerName, currency, pin, interestRate, withdrawLimit) {
        super(ownerName, currency, pin, interestRate);
        this.withdrawLimit = withdrawLimit;
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.withdrawLimit && this.getBalance() >= amount) {
            this._movements.push({ type: 'Withdrawal', amount, timestamp: new Date() });
        }
        return this;
    }
}

class CheckingAccount extends BankAccount {
    constructor(ownerName, currency, pin, interestRate, overdraftLimit, overdraftFee) {
        super(ownerName, currency, pin, interestRate);
        this.overdraftLimit = overdraftLimit;
        this.overdraftFee = overdraftFee;
    }

    withdraw(amount) {
        const currentBalance = this.getBalance();
        if (amount > 0 && (currentBalance + this.overdraftLimit) >= amount) {
            this._movements.push({ type: 'Withdrawal', amount, timestamp: new Date() });
            if (currentBalance < 0) {
                this._movements.push({ type: 'Overdraft Fee', amount: this.overdraftFee, timestamp: new Date() });
            }
        }
        return this;
    }

    getAccountSummary() {
        const summary = super.getAccountSummary();
        summary.overdraftLimit = `${this.overdraftLimit.toFixed(2)} ${this.currency}`;
        summary.overdraftFee = `${this.overdraftFee.toFixed(2)} ${this.currency}`;
        return summary;
    }
}

class BusinessAccount extends BankAccount {
    constructor(ownerName, currency, pin, interestRate, businessInterestRate) {
        super(ownerName, currency, pin, interestRate);
        this.businessInterestRate = businessInterestRate;
    }

    deposit(amount) {
        if (amount > 0) {
            super.deposit(amount);
        }
        return this;
    }

    withdraw(amount) {
        if (amount > 0 && this.getBalance() >= amount) {
            super.withdraw(amount);
        }
        return this;
    }

    calculateInterest() {
        const balance = this.getBalance();
        const interest = balance * this.businessInterestRate / 100;
        if (interest > 0) {
            this._movements.push({ type: 'Business Interest', amount: interest, timestamp: new Date() });
        }
        return this;
    }

    processLargeTransaction(amount) {
        if (amount > 10000) {
            this._movements.push({ type: 'Large Business Transaction', amount, timestamp: new Date() });
        }
        return this;
    }

    generateReport() {
        const balance = this.getBalance();
        const totalInterest = this._movements
            .filter(movement => movement.type.startsWith('Business Interest') || movement.type === 'Interest')
            .reduce((sum, movement) => sum + movement.amount, 0);
        const totalLoans = this._approvedLoans.reduce((sum, loan) => sum + loan, 0);

        return {
            ownerName: this.ownerName,
            currency: this.currency,
            balance: `${balance.toFixed(2)} ${this.currency}`,
            totalInterest: `${totalInterest.toFixed(2)} ${this.currency}`,
            totalLoans: `${totalLoans.toFixed(2)} ${this.currency}`,
            movements: this.getMovements(),
        };
    }
}

BankAccount.hello();

const savingsAccount = new SavingsAccount('Jane Doe', 'USD', 1234, 2.5, 500);
const checkingAccount = new CheckingAccount('John Smith', 'USD', 5678, 1.5, 500, 35);
const businessAccount = new BusinessAccount('Tech Solutions', 'USD', 4321, 1.0, 2.5);

savingsAccount.deposit(1000)
    .withdraw(200)
    .calculateInterest()
    .requestLoan(3000);

checkingAccount.deposit(3000)
    .withdraw(3500)
    .calculateInterest();

businessAccount.deposit(20000)
    .withdraw(5000)
    .processLargeTransaction(15000)
    .calculateInterest()
    .requestLoan(10000);

console.log('Savings Account Summary:', savingsAccount.getAccountSummary());
console.log('Checking Account Summary:', checkingAccount.getAccountSummary());
console.log('Business Account Summary:', businessAccount.getAccountSummary());

savingsAccount.sortMovementsByDate();
checkingAccount.sortMovementsByDate();
businessAccount.sortMovementsByDate();

console.log('Savings Account Movements:', savingsAccount.getMovements());
console.log('Checking Account Movements:', checkingAccount.getMovements());
console.log('Business Account Movements:', businessAccount.getMovements());

console.log('Business Account Report:', businessAccount.generateReport());
