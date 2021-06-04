import { useEffect, useState } from "react";
import ErrorHandling from "./ErrorHandling";
import StartContent from "./StartContent";
import "./Start.css";

const Start = () => {
  const [hamsters, setHamsters] = useState<null | any[]>(null);

  useEffect(() => {
    async function get() {
      const response = await fetch("/hamsters", { method: "GET" });
      const data: string[] = await response.json();
      setHamsters(data);
    }
    get();
  }, []);

  return (
    <div className="start-wrapper">
      {hamsters ? <StartContent /> : <ErrorHandling />}
    </div>
  );
};

export default Start;
