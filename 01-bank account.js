class BankAccount {
    constructor (owner, balance){
        this.owner = owner;
       this.balance = balance;
    }

checkBalance () {
        console.log(`Account balance of ${this.owner}: Rs. ${this.balance}`);
    }

deposit (amount) {
    if (amount > 0) {
            this.balance += amount ;
            console.log(`Deposited Rs. ${amount}. New Balance : Rs. ${this.balance}`);
        } else {
            console.log(`Invalid deposit amount, Please enter positive amount`);
        }
    }

    withdraw(amount) {
        if (amount > 0) {
            if (this.balance >= amount) {
                this.balance -= amount;
                console.log(`Withdrawn Rs.${amount}. New balance: Rs.${this.balance}`);
            } else {
                console.log('Insufficient funds for withdrawal.');
            }
        } else {
            console.log('Invalid withdrawal amount. Please enter a positive amount.');
        }
    }
}


const myAccount = new BankAccount('Mithun S', 1000);

myAccount.checkBalance(); // Account balance for Mithun S: Rs.1000

myAccount.deposit(500); // Deposited Rs.500. New balance: Rs.1500
myAccount.deposit(-50); // Invalid deposit amount. Please enter a positive amount.

myAccount.withdraw(200); // Withdrawn Rs.200. New balance: Rs.1300
myAccount.withdraw(1500); // Insufficient funds for withdrawal.
myAccount.withdraw(-500); // Invalid withdrawal amount. Please enter a positive amount.

myAccount.checkBalance(); // Account balance for Mithun S: Rs.1300

