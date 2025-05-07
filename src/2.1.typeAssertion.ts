{
  //Type Assertion
  let anything: any;
  anything = 500.698;
  anything as number;

  const fToC = (value: number | string): number | string | undefined => {
    if (typeof value === "number") {
      const result = ((value - 32) * 5) / 9;
      return `C = ${result}`;
    }
    if (typeof value === "string") {
      const result = ((Number(value) - 32) * 5) / 9;
      return result;
    }
  };

 const result1 = (fToC(98.4) as string)
 console.log(result1)

 const result2 = (fToC('100') as number).toFixed(2)
 console.log(result2)
  //
}
