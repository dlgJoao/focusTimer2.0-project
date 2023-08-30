import state from './state.js';
import * as events from './events.js';
import * as timer from './timer.js';

export function start(minutes, seconds) {
  state.minutes = minutes ?? startState.minutes;
  state.seconds = seconds ?? startState.seconds;

  events.registerControls();

  timer.updateDisplay();
}