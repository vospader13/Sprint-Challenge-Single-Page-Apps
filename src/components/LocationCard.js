import React from "react";
import {CardText,CardTitle,Cards} from "./Style";


export default function LocationCard(props) {
  const {name, dimension,type} = props;

  return (

        <Cards>
        <CardTitle>{name}</CardTitle>
          <CardText>{type}</CardText>
          <CardText>{dimension}</CardText>
        </Cards>


  );
}