{
  //
  class Product {
    name: string; //Properties which by default public
    brand: string;
    price: number;

    constructor(name: string, brand: string, price: number) {
      (this.name = name), (this.brand = brand), (this.price = price);
    }

    //Method which like as function
    viewProduct() {
      console.log(
        `The name of product ${this.name}, brand ${this.brand} and price ${this.price}`
      );
    }
  }

  const mobile = new Product("Nokia smart phone", "Nokia", 3000);
  const laptop = new Product("HP 14 Inchi Lpatop", "HP", 450000);
  laptop.viewProduct(); //Called method

  //Create class by a alternative way

  class Student {
    constructor(
      public name: string,
      public roll: number,
      public gpa: number
    ) //If you use public keyword in constrtor nedd not decrare propeties and  need not initiate it
    {}
    viewStudent() {
      return `The name of student ${this.name} id ${this.roll} gets GPA ${this.gpa}`;
    }
  }

  const student1 = new Student("Rabiul Islam", 5350, 3.98).viewStudent();
  console.log(student1);

  //
}
