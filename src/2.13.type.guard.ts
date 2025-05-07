{
  //Type Guard
  //Type gurard using keyof keyword
  type TAdd = number | string;
  const addNum = (num1: TAdd, num2: TAdd) => {
    if (typeof num1 === "number" && typeof num2 === "number") {
      return num1 + num2;
    } else {
      return "Both number must be numeric";
    }
  };

  const result = addNum(6, 6);

  // Type guard using in operator
  type TMember = {
    id: number;
  };

  type TAdmin = {
    id: number;
    role: "admin";
  };

  const userType = (user: TMember | TAdmin): string => {
    if ("role" in user) {
      return "Login as admin";
    } else {
      return "Login as normal user";
    }
  };

  const user1: TMember = {
    id: 5555,
  };

  const user2: TAdmin = {
    id: 5986,
    role: "admin",
  };

  const login = userType(user2);
  console.log(login);
  //
}
