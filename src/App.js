import "./styles.css";
import { useState } from "react";

var f1DriverChampion = {
  "2005": "Fernando Alonso",
  "2006": "Fernando Alonso",
  "2007": " Kimi Räikkönen",
  "2008": " Lewis Hamilton",
  "2009": "Jenson Button",
  "2010": "Sebastian Vettel",
  "2011": "Sebastian Vettel",
  "2012": "Sebastian Vettel",
  "2013": "Sebastian Vettel",
  "2014": "Lewis Hamilton",
  "2015": "Lewis Hamilton",
  "2016": "Nico Rosberg",
  "2017": "Lewis Hamilton",
  "2018": "Lewis Hamilton",
  "2019": "Lewis Hamilton",
  "2020": "Lewis Hamilton"
};

var f1DriverChampionByYear = Object.keys(f1DriverChampion);

export default function App() {
  const [name, setName] = useState("");
  const [champion, setChampion] = useState("");

  function nameHandler(event) {
    const userInput = event.target.value;

    var champion = f1DriverChampion[userInput];
    if (champion === undefined) {
      champion = "We dont have this in our Database";
    }
    setChampion(champion);
  }

  function championHandler(champion) {
    var champion = f1DriverChampion[champion];
    setChampion(champion);
  }
  return (
    <div className="App">
      <h1>Get to Know The F1 World Driver Champions by Year </h1>

      <input onChange={nameHandler} placeholder="Enter The Year" />
      <h3>The World Champion of that year is : {champion} </h3>
      <h3>By Year</h3>
      {f1DriverChampionByYear.map((champion) => {
        return (
          <h4
            onClick={() => championHandler(champion)}
            style={{ cursor: "pointer" }}
          >
            {champion}
          </h4>
        );
      })}
    </div>
  );
}
