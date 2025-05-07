{
  //
  //Parent product
  class Product {
    constructor(public name: string, public brand: string) {}

    getBrand() {
      return "I have a brand";
    }
  }

  //Inheritences
  class Laptop extends Product {
    constructor(name: string, brand: string) {
      super(name, brand);
    }
    getLaptopBrand() {
      return `I am a laptop and my brand is ${this.brand}`;
    }
  }

  class Mobile extends Product {
    constructor(name: string, brand: string) {
      super(name, brand);
    }
    getMobileBrand() {
      return `I am a mobile and my brand is ${this.brand}`;
    }
  }

  //Guard by instanceof

  //   const getProduct = (product: Product) => {
  //     if (product instanceof Laptop) {
  //       return product.getLaptopBrand();
  //     } else if (product instanceof Mobile) {
  //       return product.getMobileBrand();
  //     } else {
  //       return "Your provided product is no authenticated";
  //     }
  //   };

  //Alternative of the guard
  const isLaptop = (product: Product): product is Laptop => {
    return product instanceof Laptop;
  };

  const isMobile = (product: Product): product is Mobile =>
    product instanceof Mobile;

  const getProduct = (product: Product) => {
    if (isLaptop(product)) {
      return product.getLaptopBrand();
    } else if (isMobile(product)) {
      return product.getMobileBrand();
    } else {
      return "Your provided product is no authenticated";
    }
  };

  //Instance
  const laptop = new Laptop("Borderless Laptop", "HP");
  const mobile = new Mobile("Smart 5G Mobile", "Samsung");

  const productBrand = getProduct(mobile);
  console.log(productBrand);

  //
}
