{
  //array spread operator
  const arr1: string[] = ["a", "b", "c"];
  const arr2: string[] = ["c", "d", "e"];

  const fullArray = [...arr1, ...arr2];
  arr1.push(...arr2); //similar output to fullarray

  console.log(fullArray);
  console.log(arr1);


  //object spread operator
  const eee: { sub1: string; sub2: string } = {
    sub1: "Electronics",
    sub2: "Circuit",
  };

  const cse: { sub3: string; sub4: string } = {
    sub3: "HTML",
    sub4: "JavaScript",
  }; //When spread two or more object the field name must be different

  const subject = {
    ...eee,
    ...cse,
  };
  console.log(subject);

//rest operator
const fruit =(...fruits:string[])=>{
   return fruits.forEach(fruit=>console.log(`This is ${fruit}`))
}
fruit('Mango','Banana','Jackfruit')






}
