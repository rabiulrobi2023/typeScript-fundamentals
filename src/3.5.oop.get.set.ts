{
  //get use to a find privet property value that we found using function or method.
  // set use to modify privet property value that we found usign function or method
  class BankAccount {
    public acName: string;
    public readonly acNumber: number;
    protected _balance: number;
    constructor(acName: string, acNumber: number, _balance: number) {
      this.acName = acName;
      this.acNumber = acNumber;
      this._balance = _balance;
    }

    get myBalance() {
      return this._balance;
    }

    set addBalance(amount: number) {
      this._balance += amount;
    }
  }

  const myAccount = new BankAccount("Rabiul Islam", 5986984592, 50);
  myAccount.addBalance = 200;
  console.log(myAccount.myBalance);

  //
}
