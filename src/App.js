import "./App.css";
import { useState } from "react";
import ShowHeroes from "./components/showHeroes";
import { ButtonToggle } from "reactstrap";
import AddHero from "./components/addHero";
import heroes from "./model/heros.json";

function App() {
  const [toggle, setToggle] = useState(false);
  const [heroesCollection, setHeroes] = useState(heroes);
  return (
    <div>
      <ButtonToggle color="info" onClick={() => setToggle(true)}>
        {" "}
        Add a hero
      </ButtonToggle>
      {toggle ? (
        <AddHero toggle={setToggle} />
      ) : (
        <ShowHeroes heroesCollection={heroesCollection} />
      )}
    </div>
  );
}

export default App;
