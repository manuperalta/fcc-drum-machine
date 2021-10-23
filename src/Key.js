import React, { useEffect } from "react";
export default function Key(props) {
  useEffect(() => {
    function handleKeyDown(e) {
      var audio = document.getElementById(props.letter);
      if (e.key === props.letter || e.key.toUpperCase() === props.letter) {
        console.log(e.key, props.letter);
        audio.currentTime = 0;
        audio.play();
        props.setDescription(props.currentDesc);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [props]);
  useEffect(() => {
    function handleClick() {
      var audio = document.getElementById(props.letter);
      audio.play();
      props.setDescription(props.currentDesc);
    }
    document
      .getElementById(props.letter + "pad")
      .addEventListener("click", handleClick);
    return () =>
      document
        .getElementById(props.letter + "pad")
        .removeEventListener("click", handleClick);
  });
  return (
    <div className="drum-pad" id={props.letter + "pad"}>
      <h4>{props.letter}</h4>
      <audio className="clip" src={props.audiosrc} id={props.letter} />
    </div>
  );
}
