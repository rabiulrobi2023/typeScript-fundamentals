{
  //OPP inheritance.
  //Parent class
  class Person {
    name: string;
    age: number;
    address: string;
    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
    getSleep(hour: string) {
      return `${this.name} whose age is ${this.age} sleep daily ${hour}`;
    }
  }

  //Create classes extends the parent class and add property that call inheritance

  class Student extends Person {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }

  class Teacher extends Person {
    designation: string;
    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address), (this.designation = designation);
    }

    getClassHour(hour: string) {
      return `${this.name} whose age is ${this.age} and designation is ${this.designation} get class ${hour} per day`;
    }
  }

  const student1 = new Student("Rabiul Islam", 25, "Dinajpur");
  console.log(student1.getSleep("06:00"));

  const teacher1 = new Teacher("Tojammel", 55, "Birampur", "Instructor");
  console.log(teacher1.getClassHour("08:00"));
  //
}
