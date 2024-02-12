import React from "react";
import "./RickyMorty.scss";
import { Link, useLoaderData } from "react-router-dom";

function RickyMorty() {
  const characters = useLoaderData();

  return (
    <>
      <div className="container rickymorty-page">
        <div className="text-zone">
          <h1>Ricky Morty Characters</h1>
          <div className="button-double">
            <Link to=".." relative="path">
              <button>Back</button>
            </Link>
            <Link to="/">
              <button>Home</button>
            </Link>
          </div>
        </div>
        <div className="rm-column">
          {characters.results.slice(0, 6).map((char) => {
            return (
              <Link to={char.id.toString()}>
                <div className="rm-card">
                  <li key={char.id}>
                    <p className="char-name">{char.name}</p>
                    <p>{char.species}</p>
                    <p>{char.gender}</p>
                    <p>{char.status}</p>
                    <img src={char.image} alt={char.name}></img>
                  </li>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default RickyMorty;
