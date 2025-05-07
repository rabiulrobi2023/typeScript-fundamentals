{
  //A basic promise which asynchronous
  const createPromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const data: string = "Somthing";
      if (data) {
        resolve(data);
      } else {
        reject("Fail to load data");
      }
    });
  };

  const showData = async () => {
    const data: string = await createPromise();
    return data;
  };
  showData().then((res) => console.log(res));

  //Data fetching asynchoronously

  type TTodo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
    status: "in-progress";
  };

  const fetchData = async (): Promise<TTodo> => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await res.json();
    return { ...data, status: "in-progress" };
  };

  fetchData().then((data) => console.log(data));

  //
}
