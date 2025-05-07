{
  //Type alias
  type TUser = {
    name: string;
    id: number;
    password: string;
  };
  //Interface
  interface IUser {
    name: string;
    id: number;
    password: string;
  }

  const user1: TUser = {
    name: "Rabi",
    id: 1234,
    password: "pass1234",
  };

  const user2: IUser = {
    name: "Rabi2",
    id: 1235,
    password: "pass1234",
  };

  // Extend type using another type
  type TUserExendByType = TUser & {
    role: "Admin" | "Member";
    isDeleted: boolean;
  };



  const user3: TUserExendByType = {
    name: "Rabi3",
    id: 1236,
    password: "pass123",
    role: "Admin",
    isDeleted: false,
  };


  //Extend interface using another interface

  interface IUserExtendByInterface extends IUser {
    role: "Admin" | "Member";
    isDeleted: boolean;
  }
  const user4: IUserExtendByInterface = {
    name: "Rabi4",
    id: 1236,
    password: "pass123",
    role: "Member",
    isDeleted: true,
  };

  //Convert or extends type into interface

  interface IUserByConvertTypeAliasIntoInterface extends TUser {
    isActive: boolean;
    status: "in-progress" | "block";
  }

  const user5: IUserByConvertTypeAliasIntoInterface = {
    name: "Rabi4",
    id: 1236,
    password: "pass123",
    isActive: true,
    status: "in-progress",
  };
}
