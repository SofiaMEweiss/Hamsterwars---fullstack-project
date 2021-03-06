import React from "react";
import { useEffect, useState } from "react";
import { Hamster } from "../../types/Hamster";
import HamsterInfo from "./HamsterInfo";
import "./HamsterCard.css";

const HamsterCard = () => {
  const [hamsters, setHamsters] = useState<null | Hamster[]>(null);

  useEffect(() => {
    getHamsters();
  }, []);

  async function getHamsters() {
    const response = await fetch("/hamsters", { method: "GET" });
    const data: Hamster[] = await response.json();
    setHamsters(data);
  }

  async function removeHamster(id: string) {
    await fetch("/hamsters/" + id, { method: "DELETE" });
    getHamsters();
  }

  return (
    <div className="hamster-container">
      {hamsters ? (
        hamsters.map((h) => (
          <section className="hamstercard" key={h.id}>
            <img
              className="delete-hamster"
              onClick={() => removeHamster(h.id)}
              src="./img/remove.svg"
              alt="a delete cross"
            />
            {h.imgName.startsWith("http") ? (
              <img
                className="hamstercard-img"
                src={h.imgName}
                alt="a hamster"
              />
            ) : (
              <img
                className="hamstercard-img"
                src={`img/${h.imgName}`}
                alt="a hamster"
              />
            )}
            <h3>{h.name}</h3>
            <HamsterInfo hamster={h} />
          </section>
        ))
      ) : (
        <div className="gallery-error-message">
          <p>Hämtar hamstrar från API</p>
        </div>
      )}
    </div>
  );
};

export default HamsterCard;
