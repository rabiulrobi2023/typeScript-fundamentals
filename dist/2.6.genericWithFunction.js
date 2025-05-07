"use strict";
{
    //
    const createArryWithGeneric = (parms) => {
        return [parms];
    };
    const stringArray = createArryWithGeneric("Banglasesh");
    const booleanArray = createArryWithGeneric(true);
    const arrayOfObject = createArryWithGeneric({
        name: "Rabiul",
        id: 1234,
    });
    //Tuple with generic function
    const createTupleFunctionWithGeneric = (params1, params2) => {
        return [params1, params2];
    };
    const toupleArray = createTupleFunctionWithGeneric(1101, true);
    //Object with generic fuction
    const createProductWithGenericFunction = (data) => {
        const providerName = "ABC provider";
        return Object.assign({ providerName }, data);
    };
    const product1 = createProductWithGenericFunction({
        productName: "Smart Phone",
        brand: "Nokia",
        manuFacturingYear: 2015,
        price: 3000,
    });
    const product2 = createProductWithGenericFunction({
        productName: "Laptop",
        brand: "HP",
        manuFacturingYear: 2015,
        price: 3000,
        color: "Gray",
    });
    console.log(product1, product2);
    //
}
