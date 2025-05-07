{
  const x = 40;
  if (x >= 40) {
    console.log("Pass");
  } else {
    console.log("Fail");
  }
  //Using ternary the above code is following
  const result = x >= 40 ? "Pass" : "Fail";
  console.log(result);

  //nullish
  //Nullish observe null and undefined

  const auth = null;
  const user = auth ?? "Guest";

  console.log({ user });

  //Optinal chaining and nullish
  type TUserData = {
    name: string;
    address: {
      present: string;
      permanent?: string;
    };
  };
  const userData: TUserData = {
    name: "Rabi",
    address: {
      present: "Din",
      permanent:"Dahaka"
    },
  };

  const userAddress = userData?.address?.permanent ?? "No permanent address";
  console.log({ userAddress });
}
