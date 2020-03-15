import React from "react";

const Sprite = ({ id, name, showCaption = false }) => {
  return (
    <figure className="asset ev">
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
      {/* Show caption in Evolution Row */}
     { showCaption && <figcaption>{name}</figcaption>}
    </figure>
  );
};

export default Sprite;
