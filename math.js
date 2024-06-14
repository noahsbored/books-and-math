function Account(number, owner) {
    this.number = number;
    this.balance = 0; 
    this.owner = owner;
}

Account.prototype.deposit = function(amount) {
    this.balance += amount;
    console.log(`Deposited $${amount}. new balance $${this.balance}`);
};

Account.prototype.withdraw = function(amount) {
    this.balance -= amount;
    console.log(`took out $${amount}. new balance $${this.balance}`);
};

Account.prototype.calculateInterest = function(rate, years) {
    let compoundInterest = this.balance * Math.pow((1 + rate / 100), years) - this.balance;
    console.log(`interest for ${years} years at ${rate}%: $${compoundInterest}`);
    return compoundInterest;
};


let myAccount = new Account('12345', 'Noach');

myAccount.deposit(1000);
myAccount.withdraw(200);
myAccount.calculateInterest(5, 2);
