{
  //
  type TUser = null;
  type TMember1 = TUser extends boolean ? boolean : string; //HereTMember1 string type
  const member1: TMember1 = "Logout";

  type TMember2 = TUser extends null ? boolean : undefined; //Here TMember2 boolean type
  const member2: TMember2 = true;

  type TMyProperties = {
    car: boolean;
    byke: boolean;
    truk: boolean;
  };

  type TCheckProperty<T> = T extends keyof TMyProperties
    ? "Found" | "Yes"
    : null; //String literature

  type THaveCar = TCheckProperty<"car">; //Here THaveCar type is union of string
  type THavePlane = TCheckProperty<"plane">; //Here THavePlane type is null

  //
}
