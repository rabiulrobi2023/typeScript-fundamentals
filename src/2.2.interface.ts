{

  //Interface
  interface IUser {
    name: string;
    id: number;
    password: string;
  }

  const user1: IUser = {
    name: "Rabi2",
    id: 1235,
    password: "pass1234",
  };

  //Type define of an array by interface
  interface IRoll {
    [index: number]: number;
  }
  const roll: IRoll = [1, 2, 3, 4];

  //Type define of a function by interface
  interface IAdd {
    (num1: number, num2: number): number;
  }

  const addFun: IAdd = (num1, num2) => num1 + num2;

  //
}
