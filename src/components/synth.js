import * as Tone from "tone";
import React from 'react';

export default function Synth(){
  const synth = new Tone.Synth().toDestination();
  const now = Tone.now()
  synth.triggerAttack("C4", now)
  synth.triggerRelease(now + 1)
  return(
    <>
      <h1>placeholder</h1>
    </>
  )
}



// event listener to trigger, Tone.start
// Tone.start() returns a promise, the audio will be ready only after that promise is resolved. 