import axios from "./util/axios.customzie";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const fetchHelloWorld = async () => {
      const res = await axios.get(`/v1/api`);
      console.log(">>>> check res", res);
    };
    fetchHelloWorld();
  }, []);

  return <>hell World</>;
}

export default App;
