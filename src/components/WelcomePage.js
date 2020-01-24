import React from "react";
import {DIV,Cards} from "./Style"



export default function WelcomePage() {
  return (
    <Cards>

      <DIV>
        <img
          className="img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
    </DIV>

    </Cards>
  );
}