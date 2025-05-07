{
  //************Generric in array**************
  type GenericArray<T> = Array<T>;
  //   const id: number[] = [101, 102, 103];
  //   const id: Array<number> = [101, 102, 103];
  const id: GenericArray<number> = [101, 102, 103];

  //   const name: string[] = ["Rabi", "Rakib", "Sakib"];
  //   const name: Array<string> = ["Rabi", "Rakib", "Sakib"];
  const name: GenericArray<string> = ["Rabi", "Rakib", "Sakib"];

  //   const isCompleted: boolean[] = [true, false, true];
  //   const isCompleted: Array<boolean> = [true, false, true];
  const isCompleted: GenericArray<boolean> = [true, false, true];

  //Generic in array of object
  const user1: GenericArray<{ name: string; roll: number }> = [
    { name: "Rabiul", roll: 1234 },
    { name: "Sakibul", roll: 1235 },
    { name: "Rkibul", roll: 1236 },
  ];

  //Alternative
  type TStudent = {
    name: string;
    roll: number;
  };
  const user2: GenericArray<TStudent> = [
    { name: "Akash", roll: 2355 },
    { name: "Bkash", roll: 2356 },
  ];

  //*****************Generic in tupple*******************
  type GenericTuple1<x, y> = [x, y];

  const studentName: GenericTuple1<string, string> = ["Rabil", "Munif"];
  type GenericTuple2<name, roll, isPass> = [name, roll, isPass];
  const studentResult: GenericTuple2<string, number, boolean> = [
    "Rabi",
    5350,
    true,
  ];

  //
}
