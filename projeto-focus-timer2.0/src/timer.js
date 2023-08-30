import state from "./state.js";
import * as elements from "./elements.js";
import * as actions from "./actions.js";

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes;
  seconds = seconds ?? state.seconds;

  elements.minutes.textContent = minutes.toString().padStart(2, "0");
  elements.seconds.textContent = seconds.toString().padStart(2, "0");
}

export function countdown() {
  if(!state.isRunning) {
    return;
  }

  let minutes = Number(elements.minutes.textContent);
  let seconds = Number(elements.seconds.textContent);

  seconds--;
  if(seconds < 0) {
    seconds = 59;
    minutes--;
  }

  if(minutes < 0) {
    actions.reset();
    return;
  }

  updateDisplay(minutes, seconds);

  setTimeout(() => countdown(), 1000);
}