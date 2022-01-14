import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "MEAN Stack Devloper",
          "Frontend Developer",
          "Marketing Associate",
          "Passionate Leader",
          "Creative at Heart",
          "Engineer at mind",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 12,
      }}
    />
  );
}

export default Type;
