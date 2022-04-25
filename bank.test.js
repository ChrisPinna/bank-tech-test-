const Bank = require('./bank');

describe('Class Bank', () => {
  test('it can deposite into the account', () => {
    expect(() => {
      const bank = new Bank;
       bank.deposite(1000.00, '10/01/2023') 
      }).not.toThrow();
  });

  test('it can withdrawl into the account', () => {
    expect(() => {
      const bank = new Bank;
       bank.withdrawal(1000.00, '10/01/2023')
      }).not.toThrow();
  });

  test('accountStatement method return an empty statement when is has no transaction history', () => {
    const bank = new Bank;
    expect(bank.accountStatement()).toBe("date || credit || debit || balance\n || || || ");
  });

  test('accountStatement method return a bank statement with one deposite', () => {
    const bank = new Bank;
    bank.deposite(1000.00, '10/01/2023');
    expect(bank.accountStatement())
    .toBe("date || credit || debit || balance\n10/01/2023 || 1000.00 || || 1000.00");
  });

  test('accountStatement method returns a bank statement with one withdrawal', () => {
    const bank = new Bank;
    bank.withdrawal(500.00, '14/01/2023');
    expect(bank.accountStatement())
    .toBe("date || credit || debit || balance\n14/01/2023 || || 500.00 || -500.00");
  });

  test('accountStatement method returns a statement with two deposite', () => {
    const bank = new Bank;
    bank.deposite(1000.00, '10/01/2023');
    bank.deposite(1000.00, '10/01/2023');
    expect(bank.accountStatement())
    .toBe("date || credit || debit || balance\n10/01/2023 || 1000.00 || || 2000.00\n10/01/2023 || 1000.00 || || 1000.00");
  });
  
});