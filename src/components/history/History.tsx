import HistoryHeader from "./HistoryHeader";
import { useEffect, useState } from "react";
import { Matches } from "../../types/Matches";
import { Hamster } from "../../types/Hamster";
import "./History.css";

const History = () => {
  const [matches, setMatches] = useState<null | Matches[]>(null);
  const [hamsters, setHamsters] = useState<null | Hamster[]>(null);

  useEffect(() => {
    getMatches();
    getHamsters();
  }, []);

  async function getMatches() {
    const response = await fetch("/matches", { method: "GET" });
    const data: Matches[] = await response.json();
    setMatches(data);
  }

  async function removeMatch(id: string) {
    await fetch("/matches/" + id, { method: "DELETE" });
    getMatches();
  }

  async function getHamsters() {
    const response = await fetch("/hamsters", { method: "GET" });
    const data: Hamster[] = await response.json();
    setHamsters(data);
  }

  return (
    <div className="history-container">
      <HistoryHeader />
      <div className="matches-container">
        {matches
          ? matches.map((m) => {
              if (!hamsters) return;
              const winner = hamsters.find(
                (hamster) => hamster.id === m.winnerId
              );
              if (!winner)
                return (
                  <section className="historycard">
                    <img
                      className="delete-history"
                      onClick={() => removeMatch(m.id)}
                      src="./img/remove.svg"
                      alt="a delete cross"
                    />{" "}
                    <h4>This match does not exist</h4>
                    <img
                      className="error-img"
                      src="./img/errorhamster.svg"
                      alt="a hamster with crosses as eyes"
                    />
                  </section>
                );

              if (!hamsters) return;
              const loser = hamsters.find(
                (hamster) => hamster.id === m.loserId
              );
              if (!loser) return "";

              console.log(winner);

              return (
                <section className="historycard" key={m.id}>
                  <img
                    className="delete-history"
                    onClick={() => removeMatch(m.id)}
                    src="./img/remove.svg"
                    alt="a delete cross"
                  />
                  <h3>Winner </h3>
                  {winner.imgName.startsWith("http") ? (
                    <img
                      className="hamstercard-img"
                      src={winner.imgName}
                      alt="a hamster"
                    />
                  ) : (
                    <img
                      className="hamstercard-img"
                      src={`img/${winner.imgName}`}
                      alt="a hamster"
                    />
                  )}
                  <h4>{winner.name}</h4>
                  <h2>VS</h2>
                  <h3>Loser </h3>
                  {loser.imgName.startsWith("http") ? (
                    <img
                      className="hamstercard-img"
                      src={loser.imgName}
                      alt="a hamster"
                    />
                  ) : (
                    <img
                      className="hamstercard-img"
                      src={`img/${loser.imgName}`}
                      alt="a hamster"
                    />
                  )}
                  <h4>{loser.name}</h4>
                </section>
              );
            })
          : "Hämtar matcher från API"}
      </div>
    </div>
  );
};

export default History;
