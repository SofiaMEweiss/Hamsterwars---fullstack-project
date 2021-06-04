import StatisticsHeader from "./StatisticsHeader";
import { useEffect, useState } from "react";
import { Hamster } from "../../types/Hamster";
import "./Statistics.css";

const Statistics = () => {
  const [winners, setWinners] = useState<null | Hamster[]>(null);
  const [losers, setLosers] = useState<null | Hamster[]>(null);

  useEffect(() => {
    getWinners();
    getLosers();
  }, []);

  async function getWinners() {
    const response = await fetch("/winners", { method: "GET" });
    const data: Hamster[] = await response.json();
    setWinners(data);
  }

  async function getLosers() {
    const response = await fetch("/losers", { method: "GET" });
    const data: Hamster[] = await response.json();
    setLosers(data);
  }

  return (
    <div className="statistics-container">
      <StatisticsHeader />
      <div className="winner-container">
        <h3>TOP 5 winners</h3>
        {winners ? (
          winners.map((w) => (
            <section className="top-fivecard" key={w.id2}>
              {w.imgName.startsWith("http") ? (
                <img className="winner-img" src={w.imgName} alt="a hamster" />
              ) : (
                <img
                  className="winner-img"
                  src={`img/${w.imgName}`}
                  alt="a hamster"
                />
              )}
              <h4>{w.name}</h4>
              <p>
                <span>Wins:</span> {w.wins}
              </p>
            </section>
          ))
        ) : (
          <div className="statistics-error-message">
            <p>Hämta de 5 hamstar med flest vinster</p>
          </div>
        )}
      </div>
      <div className="winner-container">
        <h3>TOP 5 Losers</h3>
        {losers ? (
          losers.map((l) => (
            <section className="top-fivecard" key={l.id2}>
              {l.imgName.startsWith("http") ? (
                <img className="winner-img" src={l.imgName} alt="a hamster" />
              ) : (
                <img
                  className="winner-img"
                  src={`img/${l.imgName}`}
                  alt="a hamster"
                />
              )}
              <h4>{l.name}</h4>
              <p>
                <span>Defeats:</span> {l.defeats}
              </p>
            </section>
          ))
        ) : (
          <div className="statistics-error-message">
            <p>Hämta de 5 hamstar med flest förluster</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Statistics;
