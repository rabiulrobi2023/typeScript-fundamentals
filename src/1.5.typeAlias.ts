{

//Type alias in object
type TStudent = {
  name: string;
  roll: number;
  department: string;
  isMarried?: boolean; //Optional
};

const sutdent1: TStudent = {
  name: "Rabiul Islam",
  roll: 5350,
  department: "EEE",
};

const student2: TStudent = {
  name: "Akash",
  roll: 1234,
  department: "CSE",
  isMarried: true,
};

//Type alias in function
type TAdd = (num1:number,num2:number)=>number

const add:TAdd = (a,b)=>a+b
const result = add(5,10)
console.log(result)






















}