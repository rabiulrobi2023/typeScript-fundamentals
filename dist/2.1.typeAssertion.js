"use strict";
{
    //Type Assertion
    let anything;
    anything = 500.698;
    anything;
    const fToC = (value) => {
        if (typeof value === "number") {
            const result = ((value - 32) * 5) / 9;
            return `C = ${result}`;
        }
        if (typeof value === "string") {
            const result = ((Number(value) - 32) * 5) / 9;
            return result;
        }
    };
    const result1 = fToC(98.4);
    console.log(result1);
    const result2 = fToC('100').toFixed(2);
    console.log(result2);
    //
}
