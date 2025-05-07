{
  //Union

  //Union between string
  type TBloodGroup = "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  const myBloodGroup: TBloodGroup = "O+";

  //Union between number
  type TId = 1001 | 1002 | 1003;
  const id: TId = 1003;

  //Union between union
  type TIdVsBlood = TBloodGroup | TId;
  const blood: TIdVsBlood = "O+";

  //Interjection
  type TIdentity = {
    name: string;
    email: string;
    phone: number;
    bloodGroup: TBloodGroup;
  };

  type TEducation = {
    institute: string;
    passingYear: number;
    gpa: number;
  };

  type TStudent = TIdentity & TEducation;

  const student: TStudent = {
    name: "Rabiul",
    email: "mdrabi@gmail.com",
    phone: 1756582,
    bloodGroup: "O+",
    institute: "DPI",
    passingYear: 2011,
    gpa: 3.83,
  };
}
