{
  //Utilites
  // Pick. It use to take one or more type from a exgisting type. Example
  type TUser = {
    name: string;
    id: number;
    email?: string;
  };

  type TUserName = Pick<TUser, "name">;
  type TUserNameRoll = Pick<TUser, "name" | "id">; //More than one properties

  //Ommit. It use to create a type from another type where need to reject one or more type. Example
  type TUserNameOnly = Omit<TUser, "name">;
  type TUserEmail = Omit<TUser, "name" | "id">;

  //Required. It use to create required all field of a type
  type TUserRequired = Required<TUser>;

  //Partial. It use to make all property as optional
  type TUserOptional = Partial<TUser>;

  //ReadOnly. It use that a new field cannlt be adden in a object or array

  type TUserReadOnly = Readonly<TUser>;
  const user1: TUserReadOnly = {
    name: "Rabi",
    id: 4569,
    email: "e@gmai.com",
  };

  //Record.

  type TRecord = Record<string, string>;

  const bookName: TRecord = {
    book1: "Circuit-1",
    book2: "Physics",
  };

  type TRecordAll = Record<string, unknown>;
  const student: TRecordAll = {
    name: "Rabiul",
    roll: 5350,
    isComplete: false,
  };

  //
}
