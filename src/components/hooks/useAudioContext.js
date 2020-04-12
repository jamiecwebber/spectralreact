import { createContext, useContext } from "react";

window.AudioContext = window.AudioContext || window.webkitAudioContext || null;
if (!window.AudioContext) {
  throw new Error(
    'Could not find AudioContext. This may be because your browser does not support Web Audio.');
}

const audioContext = new AudioContext();
const context = createContext({ audioContext });

export default () => useContext(context);