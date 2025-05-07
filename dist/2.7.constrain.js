"use strict";
{
    //Constarin: It means to fixed some field with type for a function
    const createProductWithGenericFunction = (data) => {
        const providerName = "ABC provider";
        return Object.assign({ providerName }, data);
    }; //Here { productName: string; brand: string; sku: number } as constrain
    const product1 = createProductWithGenericFunction({
        productName: "Smart Phone",
        brand: "Nokia",
        sku: 1234,
        manuFacturingYear: 2015,
        price: 3000,
    });
    const product2 = createProductWithGenericFunction({
        productName: "Laptop",
        brand: "HP",
        sku: 9875,
        manuFacturingYear: 2015,
        price: 3000,
        color: "Gray",
    });
    //
}
