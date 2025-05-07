//Type declaration in normal function
function add1(a: number, b: number): number {
  const sum = a + b;
  return sum;
}

//Type declaration in arrow function
const add2 = (a: number, b: number):number => a + b;

//Type declaration in methode
const customer: {
  name: string;
  balance: number;
  addBalance(newBalance: number): number;
} = {
  name: "",
  balance: 0,
  addBalance(newBalance: number): number {
    this.balance = this.balance + newBalance;
    return this.balance;
  },
};

customer.name = "Rabiul Islam";
customer.balance = 20;
customer.addBalance(20);
console.log(customer);

//Type declaration in function in map

const arr: number[] = [1, 2, 3];
const square = arr.map((num: number): number => num * num);
