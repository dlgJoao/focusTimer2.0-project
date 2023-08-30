import state from "./state.js";
import * as timer from "./timer.js";
import * as elements from "./elements.js";
import * as sounds from "./sounds.js";

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running");

  timer.countdown();
}

export function reset() {
  state.isRunning = false;
  document.documentElement.classList.remove("running");

  timer.updateDisplay();
}

export function plusTime() {
  let minutes = Number(elements.minutes.textContent);

  minutes += 5;
  state.minutes = minutes > 60 ? 60 : minutes;
  
  timer.updateDisplay(minutes);
}

export function minusTime() {
  let minutes = Number(elements.minutes.textContent);

  minutes -= 5;
  state.minutes = minutes < 0 ? 0 : minutes;

  timer.updateDisplay(minutes);
}
