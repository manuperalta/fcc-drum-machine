import "./styles.css";
import React, { useState } from "react";
import {
  SOUNDSETS,
  DISPLAYMODES,
  SOUNDDESCRIPTIONS,
  keyArr
} from "./sounds.js";
import Display from "./Display.js";
import Key from "./Key.js";

export default function App() {
  let [displayState, setDisplay] = useState(0);
  let [soundGroup, setGroup] = useState(SOUNDSETS[0]);
  let [descriptionState, setDescription] = useState("sound description");
  let mappedKey = (keyArr, displayState) => {
    let arr = [];
    for (let i = 0; i < keyArr.length; i++) {
      arr.push(
        <Key
          key={keyArr[i]}
          letter={keyArr[i]}
          mode={displayState}
          audiosrc={SOUNDSETS[displayState][i]}
          setDescription={setDescription}
          currentDesc={SOUNDDESCRIPTIONS[displayState][i]}
        />
      );
    }
    return arr;
  };
  return (
    <div className="App">
      <Display
        setDisplay={setDisplay}
        displayState={displayState}
        descriptionState={descriptionState}
        soundGroup={soundGroup}
        setGroup={setGroup}
        modes={DISPLAYMODES}
      />
      <div id="drum-machine">{mappedKey(keyArr, displayState)}</div>
    </div>
  );
}
