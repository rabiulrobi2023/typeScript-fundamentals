{
  //
  //Passing single 

  interface IDeveloper<T> {
    name: string;
    computer: {
      brand: string;
      model: string;
    };
    stopWatch: T;
  }

  interface IDev1StopWatch {
    brand: string;
    model: string;
  }

  const developer1: IDeveloper<IDev1StopWatch> = {
    name: "Rabiul",
    computer: {
      brand: "HP",
      model: "Eletebook7",
    },
    stopWatch: {
      brand: "Rolex",
      model: "9868x",
    },
  };

  type TDev2Stopwatch = {
    brand: string;
    model: string;
    herdTrack: boolean;
    sleepTrack: boolean;
  };

  const developer2: IDeveloper<TDev2Stopwatch> = {
    name: "Rakibul",
    computer: {
      brand: "ASUS",
      model: "5983S",
    },
    stopWatch: {
      brand: "CASIO",
      model: "CASI98",
      herdTrack: true,
      sleepTrack: false
    },
  };

  //
}
