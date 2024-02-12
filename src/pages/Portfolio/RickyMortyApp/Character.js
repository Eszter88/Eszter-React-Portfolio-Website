import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./Character.scss";

function Character() {
  const characters = useLoaderData();
  return (
    <>
      <div className="container rickymortyChar-page" key={characters.id}>
        <h1>{characters.name}</h1>
        <img src={characters.image} alt={characters.name}></img>
        <br />
        <p>Character Status: {characters.status}</p>
        <p>Character Species: {characters.species} </p>
        <p>Character Gender: {characters.gender} </p>
      </div>
      <Link to=".." relative="path">
        <button>Rick-Morty</button>
      </Link>
    </>
  );
}

export default Character;
