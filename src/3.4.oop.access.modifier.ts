{
  //Access modifier

  class BankAccount {
    public acName: string;
    public readonly acNumber: number; //public means it accessable everywhere, readonly means it be access but does not modify
    protected _balance: number; //protected means it cannot possible in instance but accessable in child class
    constructor(acName: string, acNumber: number, _balance: number) {
      this.acName = acName;
      this.acNumber = acNumber;
      this._balance = _balance;
    }

    addBalance(ammount: number) {
      this._balance = this._balance + ammount;
    }
    withdrawBalnace(amount: number) {
      this._balance = this._balance - amount;
    }
    getBalance() {
      return this._balance;
    }
  }

  class StudentAc extends BankAccount {}

  const account1 = new BankAccount("Rabiul Islam", 5986984592, 50);
  account1.addBalance(100);
  const seeBalance = account1.getBalance();
  console.log(seeBalance);

  const account2 = new StudentAc("Student-1", 6985478355, 70);
  account2.addBalance(30);
  console.log(account2.getBalance());

  //
}
