import React, { useState, useEffect } from "react";
import "./Letreiro.css";

export default function Letreiro(props) {
  const { phrase } = props;
  const [phraseNow, setPhraseNow] = useState("");

  const [count, setCount] = useState(0);

  const [isRendering, setIsRendering] = useState(true);

  useEffect(() => {
    const phraseLength = phrase.length;

    const timer = setInterval(() => {

      if (!isRendering) {

        setCount(0);
        setPhraseNow("");
        setIsRendering(true);
      } else {

        if (count === phraseLength) {
          setIsRendering(false);
        } else {
          setPhraseNow((prevPhraseNow) => prevPhraseNow + phrase[count]);

          setCount((prevCount) => prevCount + 1);
        }
      }
    }, 500);

    return () => clearInterval(timer); 
  }, [count, isRendering, phrase]);

  return <p className="phrase">{phraseNow}</p>;
}
