import { useState } from "react";
import "./AddNewHamster.css";

const AddNewHamster = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [favFood, setFavFood] = useState("");
  const [loves, setLoves] = useState("");
  const [imgName, setImgName] = useState("");

  const [controlledName, setControlledName] = useState("");
  const [controlledAge, setControlledAge] = useState("");
  const [controlledFavFood, setControlledFavFood] = useState("");
  const [controlledLoves, setControlledLoves] = useState("");
  const [controlledImgName, setControlledImgName] = useState("");

  const [nameTouched, setNameTouched] = useState(false);
  const [ageTouched, setAgeTouched] = useState(false);
  const [favFoodTouched, setFavFoodTouched] = useState(false);
  const [lovesTouched, setLovesTouched] = useState(false);
  const [imgNameTouched, setImgNameTouched] = useState(false);

  //Validering name
  let nameIsValid: boolean = true;
  let nameErrorMessage: string = "";
  if (name === "") {
    nameIsValid = false;
    nameErrorMessage = "Vänligen skriv din hamsters namn";
  }

  let nameClass = "";
  if (nameTouched) {
    nameClass = nameIsValid ? "valid" : "error";
  }

  //Validering age
  const allowedAgeCharacters = "0123456789";
  let ageIsValid: boolean = true;
  let ageErrorMessage: string = "";
  if (age === "") {
    ageIsValid = false;
    ageErrorMessage = "Vänligen skriv din hamsters ålder";
  } else if (
    !age.split("").every((char) => allowedAgeCharacters.includes(char))
  ) {
    ageIsValid = false;
    ageErrorMessage = "Vänligen skriv din hamsters ålder med siffror";
  }

  let ageClass = "";
  if (ageTouched) {
    ageClass = ageIsValid ? "valid" : "error";
  }

  //Validering favfood
  let favFoodIsValid: boolean = true;
  let favFoodErrorMessage: string = "";
  if (favFood === "") {
    favFoodIsValid = false;
    favFoodErrorMessage = "Vänligen skriv din hamsters favoritmat";
  }

  let favFoodClass = "";
  if (favFoodTouched) {
    favFoodClass = favFoodIsValid ? "valid" : "error";
  }

  //Validering loves
  let lovesIsValid: boolean = true;
  let lovesErrorMessage: string = "";
  if (loves === "") {
    lovesIsValid = false;
    lovesErrorMessage = "Vänligen skriv vad din hamster älskar";
  }

  let lovesClass = "";
  if (lovesTouched) {
    lovesClass = lovesIsValid ? "valid" : "error";
  }

  //Validering imgName
  let imgNameIsValid: boolean = true;
  let imgNameErrorMessage: string = "";
  if (imgName === "") {
    imgNameIsValid = false;
    imgNameErrorMessage = "Vänligen ange en URL till en bild på en hamster";
  }

  let imgNameClass = "";
  if (imgNameTouched) {
    imgNameClass = imgNameIsValid ? "valid" : "error";
  }

  //Validering av att alla inputfält är ifyllda
  let formIsInvalid =
    !nameIsValid ||
    !ageIsValid ||
    !favFoodIsValid ||
    !lovesIsValid ||
    !imgNameIsValid;

  async function postHamster() {
    const newHamster = {
      name: controlledName,
      age: Number(controlledAge),
      favFood: controlledFavFood,
      loves: controlledLoves,
      imgName: controlledImgName,
      wins: 0,
      defeats: 0,
      games: 0,
    };

    await fetch("/hamsters", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newHamster),
    });
  }

  return (
    <div className="add-new-hamster-container">
      <div className="form-container">
        <h3>Add a new hamster </h3>
        <section>
          <label>
            Name <br />
            <input
              type="text"
              onBlur={() => setNameTouched(true)}
              onChange={(event) => {
                console.log("Controlled change", event.target.value);
                setName(event.target.value);
                setControlledName(event.target.value);
              }}
              value={name}
              className={nameClass}
            />
          </label>
          {nameTouched ? (
            <div className="message-hidden">{nameErrorMessage}</div>
          ) : null}
        </section>
        <section>
          <label>
            Age <br />
            <input
              type="text"
              onBlur={() => setAgeTouched(true)}
              onChange={(event) => {
                console.log("Controlled change", event.target.value);
                setAge(event.target.value);
                setControlledAge(event.target.value);
              }}
              value={age}
              className={ageClass}
            />
          </label>
          {ageTouched ? (
            <div className="message-hidden">{ageErrorMessage}</div>
          ) : null}
        </section>
        <section>
          <label>
            Favorite food <br />
            <input
              type="text"
              onBlur={() => setFavFoodTouched(true)}
              onChange={(event) => {
                console.log("Controlled change", event.target.value);
                setFavFood(event.target.value);
                setControlledFavFood(event.target.value);
              }}
              value={favFood}
              className={favFoodClass}
            />
          </label>
          {favFoodTouched ? (
            <div className="message-hidden">{favFoodErrorMessage}</div>
          ) : null}
        </section>
        <section>
          <label>
            Loves <br />
            <input
              type="text"
              onBlur={() => setLovesTouched(true)}
              onChange={(event) => {
                console.log("Controlled change", event.target.value);
                setLoves(event.target.value);
                setControlledLoves(event.target.value);
              }}
              value={loves}
              className={lovesClass}
            />
          </label>
          {lovesTouched ? (
            <div className="message-hidden">{lovesErrorMessage}</div>
          ) : null}
        </section>
        <section>
          <label>
            Image <br />
            <input
              type="text"
              onBlur={() => setImgNameTouched(true)}
              onChange={(event) => {
                console.log("Controlled change", event.target.value);
                setImgName(event.target.value);
                setControlledImgName(event.target.value);
              }}
              value={imgName}
              className={imgNameClass}
            />
          </label>
          {imgNameTouched ? (
            <div className="message-hidden">{imgNameErrorMessage}</div>
          ) : null}
        </section>
        <div>
          <button disabled={formIsInvalid} onClick={postHamster}>
            Add new champion
          </button>
        </div>
      </div>
      <div className="preview-container">
        <h3>Your new champion</h3>
        <p>
          <span>Namn: </span>
          {controlledName}
        </p>
        <p>
          <span>Ålder: </span>
          {controlledAge}
        </p>
        <p>
          <span>Favoritmat: </span>
          {controlledFavFood}
        </p>
        <p>
          <span>Älskar: </span>
          {controlledLoves}
        </p>
        <p>
          <img src={controlledImgName} alt="" />
        </p>
      </div>
    </div>
  );
};

export default AddNewHamster;
