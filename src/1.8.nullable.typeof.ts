{
  //typeof and nullable

  const convertkmhToMs = (value: unknown) => {
    if (typeof value === "number") {
      const result = (value * 1000) / 3600;
      return result;
    }
    if (typeof value === "string") {
      const result = (Number(value) * 1000) / 3600;
      return result;
    } else {
      return "No value provided";
    }
  };

  console.log(convertkmhToMs(null));

  //
}
