"use strict";
var _a, _b;
{
    const x = 40;
    if (x >= 40) {
        console.log("Pass");
    }
    else {
        console.log("Fail");
    }
    //Using ternary the above code is following
    const result = x >= 40 ? "Pass" : "Fail";
    console.log(result);
    //nullish
    //Nullish observe null and undefined
    const auth = null;
    const user = auth !== null && auth !== void 0 ? auth : "Guest";
    console.log({ user });
    const userData = {
        name: "Rabi",
        address: {
            present: "Din",
            permanent: "Dahaka"
        },
    };
    const userAddress = (_b = (_a = userData === null || userData === void 0 ? void 0 : userData.address) === null || _a === void 0 ? void 0 : _a.permanent) !== null && _b !== void 0 ? _b : "No permanent address";
    console.log({ userAddress });
}
