// import logo from './logo.svg';
import './App.css';
import React from 'react';
import * as Tone from 'tone';

export default function App() {
  const synth = new Tone.Synth().toDestination();

  function playNote(note) {
    synth.triggerAttackRelease(`${note}4`, "8n");
  }
  return (
    <div className="App">
      <div className="note-wrapper">
        <button className="note" onClick={() => playNote("C")}>
          C
        </button>
        <button className="note" onClick={() => playNote("D")}>
          D
        </button>
        <button className="note" onClick={() => playNote("E")}>
          E
        </button>
        <button className="note" onClick={() => playNote("G")}>
          G
        </button>
        <button className="note" onClick={() => playNote("A")}>
          A
        </button>
      </div>
    </div>
  );
}
// export default App;
