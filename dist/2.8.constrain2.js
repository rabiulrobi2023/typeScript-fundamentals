"use strict";
{
    //
    const getPropertyValue = (obj, key) => {
        return obj[key];
    };
    const user = {
        name: "Rabiul",
        age: 20,
        gender: "male",
    };
    const name = getPropertyValue(user, 'age');
    const age = getPropertyValue(user, 'age');
    const gender = getPropertyValue(user, 'gender');
    console.log(name, age, gender);
    //
}
