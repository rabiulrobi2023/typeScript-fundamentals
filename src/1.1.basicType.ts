{
  //arimitive data type
  const name: string = "Rabiul";
  const id: number = 1001;
  const isMarried: boolean = false;
  const balance: null = null;
  const mission: undefined = undefined;

  //array
  const arr1: string[] = ["A", "B", "C"];

  //object
  const student: {
    versity: "PUB"; //literal type
    readonly district: string; //not possible to reassign
    name: string;
    id: number;
    department: string;
    session?: number; //optional type
    isCompleted: boolean;
  } = {
    versity: "PUB",
    district: "Bogura",
    name: "Rabiiul",
    id: 1000,
    department: "EEE",
    isCompleted: false,
  };

//   student.district="Bogura" //error showon. that means not to possible reassign another value

//tuple
const arr2: [string, number, boolean] = ["Rabiul", 1001, true];



}


