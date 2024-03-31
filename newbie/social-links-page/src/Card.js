import React from "react";
import "./Card.css";
import img from "./images/avatar-jessica.jpeg";

function Card(props) {
  return (
    <div class="card">
      <img src={img} alt="Woman" />
      <h1 class="text-white">{props.name}</h1>
      <h2 class="text-green">{props.location}</h2>
      <p class="text-white">{props.description}</p>
      <div class="container-links">
        {Object.entries(props.links).map((key) => {
          return (
            <a class="text-white" href={key[1]}>
              {key[0]}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Card;
