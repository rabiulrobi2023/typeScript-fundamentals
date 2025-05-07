{
  //
  const getPropertyValue = <T, Q extends keyof T>(obj: T, key: Q) => {
    return obj[key];
  };

  interface IUser {
    name: string;
    age: number;
    gender: "male" | "female";
  }

  const user: IUser = {
    name: "Rabiul",
    age: 20,
    gender: "male",
  };

  const name = getPropertyValue(user,'age')
  const age = getPropertyValue(user,'age')
  const gender= getPropertyValue(user,'gender')
  console.log(name,age,gender)

  //
}
