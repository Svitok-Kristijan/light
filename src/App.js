import React, {useState} from "react";
import "./App.css";
import lamp from "./lampe.png";
import lampOff from "./lightOff.png";

function App() {
  const [isLight, setIsLight] = useState(false);

  const handleLight = () => {
    setIsLight(!isLight);
  };

  return (
    <div className={`App ${isLight ? "light" : "dark"}`}>
      <h1>Hello to you turn light {isLight ? "on" : "off"}</h1>
      {!isLight && (
        <img src={lampOff} onClick={handleLight} className="theme" />
      )}
      {isLight && <img onClick={handleLight} src={lamp} className="image" />}
      <p>Bok Miha</p>
    </div>
  );
}

export default App;
