"use strict";
//Type declaration in normal function
function add1(a, b) {
    const sum = a + b;
    return sum;
}
//Type declaration in arrow function
const add2 = (a, b) => a + b;
//Type declaration in methode
const customer = {
    name: "",
    balance: 0,
    addBalance(newBalance) {
        this.balance = this.balance + newBalance;
        return this.balance;
    },
};
customer.name = "Rabiul Islam";
customer.balance = 20;
customer.addBalance(20);
console.log(customer);
//Type declaration in function in map
const arr = [1, 2, 3];
const square = arr.map((num) => num * num);
