{
  //Constarin: It means to fixed some field with type for a function
  const createProductWithGenericFunction = <
    T extends { productName: string; brand: string; sku: number }
  >(
    data: T
  ) => {
    const providerName = "ABC provider";
    return { providerName, ...data };
  }; //Here { productName: string; brand: string; sku: number } as constrain

  interface IProduct1 {
    productName: string;
    brand: string;
    sku: number;
    manuFacturingYear: number;
    price: number;
  }
  const product1 = createProductWithGenericFunction<IProduct1>({
    productName: "Smart Phone",
    brand: "Nokia",
    sku: 1234,
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
    sku: 9875,
    manuFacturingYear: 2015,
    price: 3000,
    color: "Gray",
  });

  //
}
