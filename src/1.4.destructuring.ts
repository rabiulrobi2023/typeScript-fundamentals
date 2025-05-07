{
  //Object destructuring
  const user = {
    id: 1001,
    name: {
      firstName: "Md",
      middleName: "Rabiul",
      lastName: "Islam",
    },
    email: "mdrabi@gmail.com",
    age: 20,
  };

  const {
    id:studentId,  //here studentId is name alias not type
    name: { middleName },
    email,
  } = user;

  console.log(studentId, middleName, email);

  //Array destruturing
  const latter = ['A','B','C','d','e','f']
  const [L1,L2,L3,...smallLatter] = latter  //...smallLatter is rest operator
  console.log(L1,L2,smallLatter)

}
