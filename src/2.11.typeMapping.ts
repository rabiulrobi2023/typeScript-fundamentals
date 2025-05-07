{
  //Conversion one type to another type
  type TArea1 = {
    h: number;
    w: number;
  };

  //convert it number type to string type
  type TArea2 = {
    h: string;
    w: string;
  }; //Not better solution

  //Alternative
  type TArea3 = {
    [key in "h" | "w"]: string;
  }; //Not recommanded

  //Alternative
  type TArea4 = {
    [key in keyof TArea1]: string;
  }; //Recommanded

  //If you want to change the value of type dinamically use generic type
  //Example

  type TAreaDinamic<T> = {
    [key in keyof T]: T[keyof T];
  };

  const area: TAreaDinamic<{ h: string; w: number }> = {
    h: "10",
    w: 100,
  };

  //
}
