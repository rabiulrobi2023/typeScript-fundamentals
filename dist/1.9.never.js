"use strict";
{
    //never
    //never means a function that never returned anything
    const neverFuntion = (message) => {
        throw new Error(message);
    };
    neverFuntion("I do not never return anything");
    //
}
