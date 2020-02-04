import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <p>Pokémon© and Pokémon character names are trademarks of Nintendo©.</p>
      <p>
        This Pokedex consumes the{" "}
        <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer">
          PokeApi
        </a>
      </p>
      <p>Created by Ezequiel</p>
      <div className="github">
        <img
          src="img/GitHub-Mark-32px.png"
          alt="Github Logo"
          className="git-logo"
        />
        <a
          href="https://github.com/Mustaine16"
          target="_blank"
          rel="noopener noreferrer">
          {" "}
          See my GitHub!
        </a>
      </div>
    </footer>
  );
}

export default Footer;
