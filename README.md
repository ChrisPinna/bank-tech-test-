# Bank tech test

Today, you'll practice doing a tech test.

For most tech tests, you'll essentially have unlimited time.  This practice session is about producing the best code you can when there is a minimal time pressure.

You'll get to practice your OO design and TDD skills.

You'll work alone, and you'll also review your own code so you can practice reflecting on and improving your own work.

## Specification

### Requirements

* You should be able to interact with your code via a REPL like IRB or Node.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2023  
**And** a deposit of 2000 on 13-01-2023  
**And** a withdrawal of 500 on 14-01-2023  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

## How to install
  in the terminal run the folowing commands
  - npm init
  - npm install jest

## Aproach 
  - I tried to solve the probem in the most simplistic way possible
  - The bank class holds a record of balance justifying the need of a class since it's state changes the output of the methods
  - the deposit an withdrawl methods both are very similar, they first add or subract their ammount from the balance. Second they build a transaction string. Third they puch that string into the transactions array.
  - The accountStatement method builds the account statement string and returns it. First it uses an if statement to check that there have been transactions, if there isn't then it returns a hardcoded string with no transactions on it. Second if there are transactions it adds a string that clarifies the order of the information of the account statement (date || credit || debit || balance). Third it joins the array into a singular string. Forth it returns the stirng so that it can be displayed
  
