class Bank {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }
  accountStatement() {
    if (this.#noTransactions()) {
      return "date || credit || debit || balance\n || || || ";
    } else {
      this.transactions.reverse();
      this.transactions.unshift("date || credit || debit || balance");
      return this.transactions.join('');
    }
    
  }
  deposite(ammount, date) {
    this.balance += ammount;
    this.transactions.push(`\n${date} || ${ammount}.00 || || ${this.balance}.00`);
  }
  withdrawal(ammount, date) {
    this.balance -= ammount;
    this.transactions.push(`\n${date} || || ${ammount}.00 || ${this.balance}.00`);
  }

  #noTransactions() {
    return this.transactions.length === 0;
  }
}

module.exports = Bank;