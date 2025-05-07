{
  //Static means a class control centerly although it called by different instances
  class Counter {
    static count: number = 0;
    // If need not to receive any parameter, need not to create constructor
    // increment() {
    //   Counter.count += 1; //When a property be static, the property cannot be access by this. It access by class name
    //   return Counter.count;
    // }
    static increment() {
      Counter.count += 1; //We can also make a method as static
      return Counter.count;
    }

    decrement() {
      Counter.count -= 1;
      return Counter.count;
    }
  }

  //   const increment1 = new Counter();
  //   console.log(increment1.increment());
  console.log(Counter.increment()); //If the method be static need not create instance. You can called the method directly

  //   const increment2 = new Counter();
  //   console.log(increment2.increment());
  console.log(Counter.increment());
  //   //
}
