"use strict";
{
    //array spread operator
    const arr1 = ["a", "b", "c"];
    const arr2 = ["c", "d", "e"];
    const fullArray = [...arr1, ...arr2];
    arr1.push(...arr2); //similar output to fullarray
    console.log(fullArray);
    console.log(arr1);
    //object spread operator
    const eee = {
        sub1: "Electronics",
        sub2: "Circuit",
    };
    const cse = {
        sub3: "HTML",
        sub4: "JavaScript",
    }; //When spread two or more object the field name must be different
    const subject = Object.assign(Object.assign({}, eee), cse);
    console.log(subject);
    //rest operator
    const fruit = (...fruits) => {
        return fruits.forEach(fruit => console.log(`This is ${fruit}`));
    };
    fruit('Mango', 'Banana', 'Jackfruit');
}
