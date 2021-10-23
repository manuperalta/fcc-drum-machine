export default function Display(props) {
  let currentMode = props.displayState;
  if (props.modes.length - 1 === currentMode) currentMode = 0;
  else currentMode++;
  return (
    <div id="display">
      <h1>{props.modes[props.displayState]}</h1>
      <h2 id="sound-description">{props.descriptionState}</h2>
      <button
        onClick={() => {
          props.setDisplay(currentMode);
          props.setGroup(props.displayState);
        }}
      >
        Change soundset
      </button>
    </div>
  );
}
