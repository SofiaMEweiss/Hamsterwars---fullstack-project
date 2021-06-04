import { Link } from "react-router-dom";
import "./StartContent.css";

const StartContent = () => (
  <div className="start-container">
    <section className="left-section">
      <section>
        <h2>This is </h2>
        <h1>Hamster Wars</h1>
        <p>
          A long time ago in a galaxy far, far away.... <br />
          <br />
          The great battle of the greatest hamster begun.
          <br />
          It was neither about strength, intelligence or even swiftness.
          <br />
          Climbing to the top would simply be dependant on one thing.
          <br />
          Which hamster was the cutest hamster of them all?
        </p>
        <p className="highlight-paragraph">
          It’s all up to you Human, to decide which Hamster will prevail in
          Hamster Wars!
        </p>
      </section>
    </section>
    <section className="right-section">
      <Link to="/battle">
        <button>battle</button>
      </Link>
    </section>
  </div>
);

export default StartContent;
