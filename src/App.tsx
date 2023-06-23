import HelpScout, { NOTIFICATION_TYPES } from "@helpscout/javascript-sdk";
import { Button, DefaultStyle, Heading } from "@helpscout/ui-kit";
import { useEffect, useState,} from "react";
import './App.css';


function App() {
  let audio = new Audio('./static/a.mp3')
  
  
  const [userEmail, setUserEmail] = useState<string | undefined>(
    "unknown user"
  );
/*
  useEffect(() => {
    HelpScout.getApplicationContext().then(({ user }) =>
      setUserEmail(user?.email)
    );
  }, []); */

  function playAudio() {
    audio.play();
    console.log("woo");
  }

  return (
    <div className="App">
      <DefaultStyle />
      <button size="sm" onClick={playAudio}>
        EASY
      </button>
    </div>
  );
}

export default App;
