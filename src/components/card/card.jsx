import React, { useState } from "react";

function Card(props) {
  return (
    <div key={props.member.id} className="card-item">
      <p>Member's name: {props.member.name}</p>
      <img className="img" src={props.member.image} alt={props.member.image} />
    </div>
  );
}
export default Card;
