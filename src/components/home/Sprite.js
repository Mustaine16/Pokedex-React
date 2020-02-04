import React from "react";

const Sprite = ({ id, name }) => {
  return (
    <figure className="asset">
      <img
        src={`${
          id < 722
            ? `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${name}.png`
            : `https://img.pokemondb.net/sprites/ultra-sun-ultra-moon/normal/${name}.png`
        }
          `}
        className={`sprite-${name}`}
        alt={name}
        loading="lazy"
      />
    </figure>
  );
};

export default Sprite;
