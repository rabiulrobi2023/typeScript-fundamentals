{
  //never
  //never means a function that never returned anything

  const neverFuntion = (message: string):never => {
    throw new Error(message);
  };

  neverFuntion("I do not never return anything");

  //
}
