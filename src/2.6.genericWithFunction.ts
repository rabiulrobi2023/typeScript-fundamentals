{
  //
  const createArryWithGeneric = <T>(parms: T): T[] => {
    return [parms];
  };

  const stringArray = createArryWithGeneric<string>("Banglasesh");
  const booleanArray = createArryWithGeneric<boolean>(true);
  const arrayOfObject = createArryWithGeneric<{ name: string; id: number }>({
    name: "Rabiul",
    id: 1234,
  });

  //Tuple with generic function
  const createTupleFunctionWithGeneric = <T, Q>(params1: T, params2: Q) => {
    return [params1, params2];
  };

  const toupleArray = createTupleFunctionWithGeneric<number, boolean>(
    1101,
    true
  );

  //Object with generic fuction
  const createProductWithGenericFunction = <T>(data: T) => {
    const providerName = "ABC provider";
    return { providerName, ...data };
  };

  interface IProduct1 {
    productName: string;
    brand: string;
    manuFacturingYear: number;
    price: number;
  }
  const product1 = createProductWithGenericFunction<IProduct1>({
    productName: "Smart Phone",
    brand: "Nokia",
    manuFacturingYear: 2015,
    price: 3000,
  });

  interface IProduct2 extends IProduct1 {
    color: "Gray" | "Blue" | "White";
    size?: string;
  }

  const product2 = createProductWithGenericFunction<IProduct2>({
    productName: "Laptop",
    brand: "HP",
    manuFacturingYear: 2015,
    price: 3000,
    color: "Gray",
  });

  console.log(product1, product2);
  //
}
