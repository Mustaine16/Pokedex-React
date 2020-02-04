const localData = [
  {
    id: 1,
    name: "bulbasaur",
    types: [
      {
        slot: 2,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
      },
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 2,
    name: "ivysaur",
    types: [
      {
        slot: 2,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
      },
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 3,
    name: "venusaur",
    types: [
      {
        slot: 2,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
      },
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 4,
    name: "charmander",
    types: [
      {
        slot: 1,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }
      }
    ]
  },
  {
    id: 5,
    name: "charmeleon",
    types: [
      {
        slot: 1,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }
      }
    ]
  },
  {
    id: 6,
    name: "charizard",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }
      }
    ]
  },
  {
    id: 7,
    name: "squirtle",
    types: [
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 8,
    name: "wartortle",
    types: [
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 9,
    name: "blastoise",
    types: [
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 10,
    name: "caterpie",
    types: [
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 11,
    name: "metapod",
    types: [
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 12,
    name: "butterfree",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 13,
    name: "weedle",
    types: [
      {
        slot: 2,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
      },
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 14,
    name: "kakuna",
    types: [
      {
        slot: 2,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
      },
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 15,
    name: "beedrill",
    types: [
      {
        slot: 2,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
      },
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 16,
    name: "pidgey",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 17,
    name: "pidgeotto",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 18,
    name: "pidgeot",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 19,
    name: "rattata",
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 20,
    name: "raticate",
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 21,
    name: "spearow",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 22,
    name: "fearow",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 23,
    name: "ekans",
    types: [
      {
        slot: 1,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
      }
    ]
  },
  {
    id: 24,
    name: "arbok",
    types: [
      {
        slot: 1,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
      }
    ]
  },
  {
    id: 25,
    name: "pikachu",
    types: [
      {
        slot: 1,
        type: { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }
      }
    ]
  },
  {
    id: 26,
    name: "raichu",
    types: [
      {
        slot: 1,
        type: { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }
      }
    ]
  },
  {
    id: 27,
    name: "sandshrew",
    types: [
      {
        slot: 1,
        type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }
      }
    ]
  },
  {
    id: 28,
    name: "sandslash",
    types: [
      {
        slot: 1,
        type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }
      }
    ]
  },
  {
    id: 29,
    name: "nidoran-f",
    types: [
      {
        slot: 1,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
      }
    ]
  },
  {
    id: 30,
    name: "nidorina",
    types: [
      {
        slot: 1,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
      }
    ]
  },
  {
    id: 31,
    name: "nidoqueen",
    types: [
      {
        slot: 2,
        type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }
      },
      {
        slot: 1,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
      }
    ]
  },
  {
    id: 32,
    name: "nidoran-m",
    types: [
      {
        slot: 1,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
      }
    ]
  },
  {
    id: 33,
    name: "nidorino",
    types: [
      {
        slot: 1,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
      }
    ]
  },
  {
    id: 34,
    name: "nidoking",
    types: [
      {
        slot: 2,
        type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }
      },
      {
        slot: 1,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
      }
    ]
  },
  {
    id: 35,
    name: "clefairy",
    types: [
      {
        slot: 1,
        type: { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" }
      }
    ]
  },
  {
    id: 36,
    name: "clefable",
    types: [
      {
        slot: 1,
        type: { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" }
      }
    ]
  },
  {
    id: 37,
    name: "vulpix",
    types: [
      {
        slot: 1,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }
      }
    ]
  },
  {
    id: 38,
    name: "ninetales",
    types: [
      {
        slot: 1,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }
      }
    ]
  },
  {
    id: 39,
    name: "jigglypuff",
    types: [
      {
        slot: 2,
        type: { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" }
      },
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 40,
    name: "wigglytuff",
    types: [
      {
        slot: 2,
        type: { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" }
      },
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 41,
    name: "zubat",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
      }
    ]
  },
  {
    id: 42,
    name: "golbat",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
      }
    ]
  },
  {
    id: 43,
    name: "oddish",
    types: [
      {
        slot: 2,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
      },
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 44,
    name: "gloom",
    types: [
      {
        slot: 2,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
      },
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 45,
    name: "vileplume",
    types: [
      {
        slot: 2,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
      },
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 46,
    name: "paras",
    types: [
      {
        slot: 2,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      },
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 47,
    name: "parasect",
    types: [
      {
        slot: 2,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      },
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 48,
    name: "venonat",
    types: [
      {
        slot: 2,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
      },
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 49,
    name: "venomoth",
    types: [
      {
        slot: 2,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
      },
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 50,
    name: "diglett",
    types: [
      {
        slot: 1,
        type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }
      }
    ]
  },
  {
    id: 51,
    name: "dugtrio",
    types: [
      {
        slot: 1,
        type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }
      }
    ]
  },
  {
    id: 52,
    name: "meowth",
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 53,
    name: "persian",
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 54,
    name: "psyduck",
    types: [
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 55,
    name: "golduck",
    types: [
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 56,
    name: "mankey",
    types: [
      {
        slot: 1,
        type: { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }
      }
    ]
  },
  {
    id: 57,
    name: "primeape",
    types: [
      {
        slot: 1,
        type: { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }
      }
    ]
  },
  {
    id: 58,
    name: "growlithe",
    types: [
      {
        slot: 1,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }
      }
    ]
  },
  {
    id: 59,
    name: "arcanine",
    types: [
      {
        slot: 1,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }
      }
    ]
  },
  {
    id: 60,
    name: "poliwag",
    types: [
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 61,
    name: "poliwhirl",
    types: [
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 62,
    name: "poliwrath",
    types: [
      {
        slot: 2,
        type: { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }
      },
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 63,
    name: "abra",
    types: [
      {
        slot: 1,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      }
    ]
  },
  {
    id: 64,
    name: "kadabra",
    types: [
      {
        slot: 1,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      }
    ]
  },
  {
    id: 65,
    name: "alakazam",
    types: [
      {
        slot: 1,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      }
    ]
  },
  {
    id: 66,
    name: "machop",
    types: [
      {
        slot: 1,
        type: { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }
      }
    ]
  },
  {
    id: 67,
    name: "machoke",
    types: [
      {
        slot: 1,
        type: { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }
      }
    ]
  },
  {
    id: 68,
    name: "machamp",
    types: [
      {
        slot: 1,
        type: { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }
      }
    ]
  },
  {
    id: 69,
    name: "bellsprout",
    types: [
      {
        slot: 2,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
      },
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 70,
    name: "weepinbell",
    types: [
      {
        slot: 2,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
      },
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 71,
    name: "victreebel",
    types: [
      {
        slot: 2,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
      },
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 72,
    name: "tentacool",
    types: [
      {
        slot: 2,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
      },
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 73,
    name: "tentacruel",
    types: [
      {
        slot: 2,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
      },
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 74,
    name: "geodude",
    types: [
      {
        slot: 2,
        type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }
      },
      {
        slot: 1,
        type: { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }
      }
    ]
  },
  {
    id: 75,
    name: "graveler",
    types: [
      {
        slot: 2,
        type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }
      },
      {
        slot: 1,
        type: { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }
      }
    ]
  },
  {
    id: 76,
    name: "golem",
    types: [
      {
        slot: 2,
        type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }
      },
      {
        slot: 1,
        type: { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }
      }
    ]
  },
  {
    id: 77,
    name: "ponyta",
    types: [
      {
        slot: 1,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }
      }
    ]
  },
  {
    id: 78,
    name: "rapidash",
    types: [
      {
        slot: 1,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }
      }
    ]
  },
  {
    id: 79,
    name: "slowpoke",
    types: [
      {
        slot: 2,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      },
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 80,
    name: "slowbro",
    types: [
      {
        slot: 2,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      },
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 81,
    name: "magnemite",
    types: [
      {
        slot: 2,
        type: { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" }
      },
      {
        slot: 1,
        type: { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }
      }
    ]
  },
  {
    id: 82,
    name: "magneton",
    types: [
      {
        slot: 2,
        type: { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" }
      },
      {
        slot: 1,
        type: { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }
      }
    ]
  },
  {
    id: 83,
    name: "farfetchd",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 84,
    name: "doduo",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 85,
    name: "dodrio",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 86,
    name: "seel",
    types: [
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 87,
    name: "dewgong",
    types: [
      {
        slot: 2,
        type: { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" }
      },
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 88,
    name: "grimer",
    types: [
      {
        slot: 1,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
      }
    ]
  },
  {
    id: 89,
    name: "muk",
    types: [
      {
        slot: 1,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
      }
    ]
  },
  {
    id: 90,
    name: "shellder",
    types: [
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 91,
    name: "cloyster",
    types: [
      {
        slot: 2,
        type: { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" }
      },
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 92,
    name: "gastly",
    types: [
      {
        slot: 2,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
      },
      {
        slot: 1,
        type: { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" }
      }
    ]
  },
  {
    id: 93,
    name: "haunter",
    types: [
      {
        slot: 2,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
      },
      {
        slot: 1,
        type: { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" }
      }
    ]
  },
  {
    id: 94,
    name: "gengar",
    types: [
      {
        slot: 2,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
      },
      {
        slot: 1,
        type: { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" }
      }
    ]
  },
  {
    id: 95,
    name: "onix",
    types: [
      {
        slot: 2,
        type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }
      },
      {
        slot: 1,
        type: { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }
      }
    ]
  },
  {
    id: 96,
    name: "drowzee",
    types: [
      {
        slot: 1,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      }
    ]
  },
  {
    id: 97,
    name: "hypno",
    types: [
      {
        slot: 1,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      }
    ]
  },
  {
    id: 98,
    name: "krabby",
    types: [
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 99,
    name: "kingler",
    types: [
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 100,
    name: "voltorb",
    types: [
      {
        slot: 1,
        type: { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }
      }
    ]
  },
  {
    id: 101,
    name: "electrode",
    types: [
      {
        slot: 1,
        type: { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }
      }
    ]
  },
  {
    id: 102,
    name: "exeggcute",
    types: [
      {
        slot: 2,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      },
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 103,
    name: "exeggutor",
    types: [
      {
        slot: 2,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      },
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 104,
    name: "cubone",
    types: [
      {
        slot: 1,
        type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }
      }
    ]
  },
  {
    id: 105,
    name: "marowak",
    types: [
      {
        slot: 1,
        type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }
      }
    ]
  },
  {
    id: 106,
    name: "hitmonlee",
    types: [
      {
        slot: 1,
        type: { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }
      }
    ]
  },
  {
    id: 107,
    name: "hitmonchan",
    types: [
      {
        slot: 1,
        type: { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }
      }
    ]
  },
  {
    id: 108,
    name: "lickitung",
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 109,
    name: "koffing",
    types: [
      {
        slot: 1,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
      }
    ]
  },
  {
    id: 110,
    name: "weezing",
    types: [
      {
        slot: 1,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
      }
    ]
  },
  {
    id: 111,
    name: "rhyhorn",
    types: [
      {
        slot: 2,
        type: { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }
      },
      {
        slot: 1,
        type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }
      }
    ]
  },
  {
    id: 112,
    name: "rhydon",
    types: [
      {
        slot: 2,
        type: { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }
      },
      {
        slot: 1,
        type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }
      }
    ]
  },
  {
    id: 113,
    name: "chansey",
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 114,
    name: "tangela",
    types: [
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 115,
    name: "kangaskhan",
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 116,
    name: "horsea",
    types: [
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 117,
    name: "seadra",
    types: [
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 118,
    name: "goldeen",
    types: [
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 119,
    name: "seaking",
    types: [
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 120,
    name: "staryu",
    types: [
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 121,
    name: "starmie",
    types: [
      {
        slot: 2,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      },
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 122,
    name: "mr-mime",
    types: [
      {
        slot: 2,
        type: { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" }
      },
      {
        slot: 1,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      }
    ]
  },
  {
    id: 123,
    name: "scyther",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 124,
    name: "jynx",
    types: [
      {
        slot: 2,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      },
      {
        slot: 1,
        type: { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" }
      }
    ]
  },
  {
    id: 125,
    name: "electabuzz",
    types: [
      {
        slot: 1,
        type: { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }
      }
    ]
  },
  {
    id: 126,
    name: "magmar",
    types: [
      {
        slot: 1,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }
      }
    ]
  },
  {
    id: 127,
    name: "pinsir",
    types: [
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 128,
    name: "tauros",
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 129,
    name: "magikarp",
    types: [
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 130,
    name: "gyarados",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 131,
    name: "lapras",
    types: [
      {
        slot: 2,
        type: { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" }
      },
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 132,
    name: "ditto",
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 133,
    name: "eevee",
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 134,
    name: "vaporeon",
    types: [
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 135,
    name: "jolteon",
    types: [
      {
        slot: 1,
        type: { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }
      }
    ]
  },
  {
    id: 136,
    name: "flareon",
    types: [
      {
        slot: 1,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }
      }
    ]
  },
  {
    id: 137,
    name: "porygon",
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 138,
    name: "omanyte",
    types: [
      {
        slot: 2,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      },
      {
        slot: 1,
        type: { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }
      }
    ]
  },
  {
    id: 139,
    name: "omastar",
    types: [
      {
        slot: 2,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      },
      {
        slot: 1,
        type: { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }
      }
    ]
  },
  {
    id: 140,
    name: "kabuto",
    types: [
      {
        slot: 2,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      },
      {
        slot: 1,
        type: { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }
      }
    ]
  },
  {
    id: 141,
    name: "kabutops",
    types: [
      {
        slot: 2,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      },
      {
        slot: 1,
        type: { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }
      }
    ]
  },
  {
    id: 142,
    name: "aerodactyl",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }
      }
    ]
  },
  {
    id: 143,
    name: "snorlax",
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 144,
    name: "articuno",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" }
      }
    ]
  },
  {
    id: 145,
    name: "zapdos",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }
      }
    ]
  },
  {
    id: 146,
    name: "moltres",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }
      }
    ]
  },
  {
    id: 147,
    name: "dratini",
    types: [
      {
        slot: 1,
        type: { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" }
      }
    ]
  },
  {
    id: 148,
    name: "dragonair",
    types: [
      {
        slot: 1,
        type: { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" }
      }
    ]
  },
  {
    id: 149,
    name: "dragonite",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" }
      }
    ]
  },
  {
    id: 150,
    name: "mewtwo",
    types: [
      {
        slot: 1,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      }
    ]
  },
  {
    id: 151,
    name: "mew",
    types: [
      {
        slot: 1,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      }
    ]
  },
  {
    id: 152,
    name: "chikorita",
    types: [
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 153,
    name: "bayleef",
    types: [
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 154,
    name: "meganium",
    types: [
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 155,
    name: "cyndaquil",
    types: [
      {
        slot: 1,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }
      }
    ]
  },
  {
    id: 156,
    name: "quilava",
    types: [
      {
        slot: 1,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }
      }
    ]
  },
  {
    id: 157,
    name: "typhlosion",
    types: [
      {
        slot: 1,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }
      }
    ]
  },
  {
    id: 158,
    name: "totodile",
    types: [
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 159,
    name: "croconaw",
    types: [
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 160,
    name: "feraligatr",
    types: [
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 161,
    name: "sentret",
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 162,
    name: "furret",
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 163,
    name: "hoothoot",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 164,
    name: "noctowl",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 165,
    name: "ledyba",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 166,
    name: "ledian",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 167,
    name: "spinarak",
    types: [
      {
        slot: 2,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
      },
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 168,
    name: "ariados",
    types: [
      {
        slot: 2,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
      },
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 169,
    name: "crobat",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
      }
    ]
  },
  {
    id: 170,
    name: "chinchou",
    types: [
      {
        slot: 2,
        type: { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }
      },
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 171,
    name: "lanturn",
    types: [
      {
        slot: 2,
        type: { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }
      },
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 172,
    name: "pichu",
    types: [
      {
        slot: 1,
        type: { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }
      }
    ]
  },
  {
    id: 173,
    name: "cleffa",
    types: [
      {
        slot: 1,
        type: { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" }
      }
    ]
  },
  {
    id: 174,
    name: "igglybuff",
    types: [
      {
        slot: 2,
        type: { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" }
      },
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 175,
    name: "togepi",
    types: [
      {
        slot: 1,
        type: { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" }
      }
    ]
  },
  {
    id: 176,
    name: "togetic",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" }
      }
    ]
  },
  {
    id: 177,
    name: "natu",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      }
    ]
  },
  {
    id: 178,
    name: "xatu",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      }
    ]
  },
  {
    id: 179,
    name: "mareep",
    types: [
      {
        slot: 1,
        type: { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }
      }
    ]
  },
  {
    id: 180,
    name: "flaaffy",
    types: [
      {
        slot: 1,
        type: { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }
      }
    ]
  },
  {
    id: 181,
    name: "ampharos",
    types: [
      {
        slot: 1,
        type: { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }
      }
    ]
  },
  {
    id: 182,
    name: "bellossom",
    types: [
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 183,
    name: "marill",
    types: [
      {
        slot: 2,
        type: { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" }
      },
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 184,
    name: "azumarill",
    types: [
      {
        slot: 2,
        type: { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" }
      },
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 185,
    name: "sudowoodo",
    types: [
      {
        slot: 1,
        type: { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }
      }
    ]
  },
  {
    id: 186,
    name: "politoed",
    types: [
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 187,
    name: "hoppip",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 188,
    name: "skiploom",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 189,
    name: "jumpluff",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 190,
    name: "aipom",
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 191,
    name: "sunkern",
    types: [
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 192,
    name: "sunflora",
    types: [
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 193,
    name: "yanma",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 194,
    name: "wooper",
    types: [
      {
        slot: 2,
        type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }
      },
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 195,
    name: "quagsire",
    types: [
      {
        slot: 2,
        type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }
      },
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 196,
    name: "espeon",
    types: [
      {
        slot: 1,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      }
    ]
  },
  {
    id: 197,
    name: "umbreon",
    types: [
      {
        slot: 1,
        type: { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" }
      }
    ]
  },
  {
    id: 198,
    name: "murkrow",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" }
      }
    ]
  },
  {
    id: 199,
    name: "slowking",
    types: [
      {
        slot: 2,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      },
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 200,
    name: "misdreavus",
    types: [
      {
        slot: 1,
        type: { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" }
      }
    ]
  },
  {
    id: 201,
    name: "unown",
    types: [
      {
        slot: 1,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      }
    ]
  },
  {
    id: 202,
    name: "wobbuffet",
    types: [
      {
        slot: 1,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      }
    ]
  },
  {
    id: 203,
    name: "girafarig",
    types: [
      {
        slot: 2,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      },
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 204,
    name: "pineco",
    types: [
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 205,
    name: "forretress",
    types: [
      {
        slot: 2,
        type: { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" }
      },
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 206,
    name: "dunsparce",
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 207,
    name: "gligar",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }
      }
    ]
  },
  {
    id: 208,
    name: "steelix",
    types: [
      {
        slot: 2,
        type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }
      },
      {
        slot: 1,
        type: { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" }
      }
    ]
  },
  {
    id: 209,
    name: "snubbull",
    types: [
      {
        slot: 1,
        type: { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" }
      }
    ]
  },
  {
    id: 210,
    name: "granbull",
    types: [
      {
        slot: 1,
        type: { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" }
      }
    ]
  },
  {
    id: 211,
    name: "qwilfish",
    types: [
      {
        slot: 2,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
      },
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 212,
    name: "scizor",
    types: [
      {
        slot: 2,
        type: { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" }
      },
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 213,
    name: "shuckle",
    types: [
      {
        slot: 2,
        type: { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }
      },
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 214,
    name: "heracross",
    types: [
      {
        slot: 2,
        type: { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }
      },
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 215,
    name: "sneasel",
    types: [
      {
        slot: 2,
        type: { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" }
      },
      {
        slot: 1,
        type: { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" }
      }
    ]
  },
  {
    id: 216,
    name: "teddiursa",
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 217,
    name: "ursaring",
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 218,
    name: "slugma",
    types: [
      {
        slot: 1,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }
      }
    ]
  },
  {
    id: 219,
    name: "magcargo",
    types: [
      {
        slot: 2,
        type: { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }
      },
      {
        slot: 1,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }
      }
    ]
  },
  {
    id: 220,
    name: "swinub",
    types: [
      {
        slot: 2,
        type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }
      },
      {
        slot: 1,
        type: { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" }
      }
    ]
  },
  {
    id: 221,
    name: "piloswine",
    types: [
      {
        slot: 2,
        type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }
      },
      {
        slot: 1,
        type: { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" }
      }
    ]
  },
  {
    id: 222,
    name: "corsola",
    types: [
      {
        slot: 2,
        type: { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }
      },
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 223,
    name: "remoraid",
    types: [
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 224,
    name: "octillery",
    types: [
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 225,
    name: "delibird",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" }
      }
    ]
  },
  {
    id: 226,
    name: "mantine",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 227,
    name: "skarmory",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" }
      }
    ]
  },
  {
    id: 228,
    name: "houndour",
    types: [
      {
        slot: 2,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }
      },
      {
        slot: 1,
        type: { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" }
      }
    ]
  },
  {
    id: 229,
    name: "houndoom",
    types: [
      {
        slot: 2,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }
      },
      {
        slot: 1,
        type: { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" }
      }
    ]
  },
  {
    id: 230,
    name: "kingdra",
    types: [
      {
        slot: 2,
        type: { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" }
      },
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 231,
    name: "phanpy",
    types: [
      {
        slot: 1,
        type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }
      }
    ]
  },
  {
    id: 232,
    name: "donphan",
    types: [
      {
        slot: 1,
        type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }
      }
    ]
  },
  {
    id: 233,
    name: "porygon2",
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 234,
    name: "stantler",
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 235,
    name: "smeargle",
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 236,
    name: "tyrogue",
    types: [
      {
        slot: 1,
        type: { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }
      }
    ]
  },
  {
    id: 237,
    name: "hitmontop",
    types: [
      {
        slot: 1,
        type: { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }
      }
    ]
  },
  {
    id: 238,
    name: "smoochum",
    types: [
      {
        slot: 2,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      },
      {
        slot: 1,
        type: { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" }
      }
    ]
  },
  {
    id: 239,
    name: "elekid",
    types: [
      {
        slot: 1,
        type: { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }
      }
    ]
  },
  {
    id: 240,
    name: "magby",
    types: [
      {
        slot: 1,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }
      }
    ]
  },
  {
    id: 241,
    name: "miltank",
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 242,
    name: "blissey",
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 243,
    name: "raikou",
    types: [
      {
        slot: 1,
        type: { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }
      }
    ]
  },
  {
    id: 244,
    name: "entei",
    types: [
      {
        slot: 1,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }
      }
    ]
  },
  {
    id: 245,
    name: "suicune",
    types: [
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 246,
    name: "larvitar",
    types: [
      {
        slot: 2,
        type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }
      },
      {
        slot: 1,
        type: { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }
      }
    ]
  },
  {
    id: 247,
    name: "pupitar",
    types: [
      {
        slot: 2,
        type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }
      },
      {
        slot: 1,
        type: { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }
      }
    ]
  },
  {
    id: 248,
    name: "tyranitar",
    types: [
      {
        slot: 2,
        type: { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" }
      },
      {
        slot: 1,
        type: { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }
      }
    ]
  },
  {
    id: 249,
    name: "lugia",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      }
    ]
  },
  {
    id: 250,
    name: "ho-oh",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }
      }
    ]
  },
  {
    id: 251,
    name: "celebi",
    types: [
      {
        slot: 2,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      },
      {
        slot: 1,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      }
    ]
  },
  {
    id: 252,
    name: "treecko",
    types: [
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 253,
    name: "grovyle",
    types: [
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 254,
    name: "sceptile",
    types: [
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 255,
    name: "torchic",
    types: [
      {
        slot: 1,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }
      }
    ]
  },
  {
    id: 256,
    name: "combusken",
    types: [
      {
        slot: 2,
        type: { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }
      },
      {
        slot: 1,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }
      }
    ]
  },
  {
    id: 257,
    name: "blaziken",
    types: [
      {
        slot: 2,
        type: { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }
      },
      {
        slot: 1,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }
      }
    ]
  },
  {
    id: 258,
    name: "mudkip",
    types: [
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 259,
    name: "marshtomp",
    types: [
      {
        slot: 2,
        type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }
      },
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 260,
    name: "swampert",
    types: [
      {
        slot: 2,
        type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }
      },
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 261,
    name: "poochyena",
    types: [
      {
        slot: 1,
        type: { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" }
      }
    ]
  },
  {
    id: 262,
    name: "mightyena",
    types: [
      {
        slot: 1,
        type: { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" }
      }
    ]
  },
  {
    id: 263,
    name: "zigzagoon",
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 264,
    name: "linoone",
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 265,
    name: "wurmple",
    types: [
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 266,
    name: "silcoon",
    types: [
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 267,
    name: "beautifly",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 268,
    name: "cascoon",
    types: [
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 269,
    name: "dustox",
    types: [
      {
        slot: 2,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
      },
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 270,
    name: "lotad",
    types: [
      {
        slot: 2,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      },
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 271,
    name: "lombre",
    types: [
      {
        slot: 2,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      },
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 272,
    name: "ludicolo",
    types: [
      {
        slot: 2,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      },
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 273,
    name: "seedot",
    types: [
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 274,
    name: "nuzleaf",
    types: [
      {
        slot: 2,
        type: { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" }
      },
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 275,
    name: "shiftry",
    types: [
      {
        slot: 2,
        type: { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" }
      },
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 276,
    name: "taillow",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 277,
    name: "swellow",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 278,
    name: "wingull",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 279,
    name: "pelipper",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 280,
    name: "ralts",
    types: [
      {
        slot: 2,
        type: { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" }
      },
      {
        slot: 1,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      }
    ]
  },
  {
    id: 281,
    name: "kirlia",
    types: [
      {
        slot: 2,
        type: { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" }
      },
      {
        slot: 1,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      }
    ]
  },
  {
    id: 282,
    name: "gardevoir",
    types: [
      {
        slot: 2,
        type: { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" }
      },
      {
        slot: 1,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      }
    ]
  },
  {
    id: 283,
    name: "surskit",
    types: [
      {
        slot: 2,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      },
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 284,
    name: "masquerain",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 285,
    name: "shroomish",
    types: [
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 286,
    name: "breloom",
    types: [
      {
        slot: 2,
        type: { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }
      },
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 287,
    name: "slakoth",
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 288,
    name: "vigoroth",
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 289,
    name: "slaking",
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 290,
    name: "nincada",
    types: [
      {
        slot: 2,
        type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }
      },
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 291,
    name: "ninjask",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 292,
    name: "shedinja",
    types: [
      {
        slot: 2,
        type: { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" }
      },
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 293,
    name: "whismur",
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 294,
    name: "loudred",
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 295,
    name: "exploud",
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 296,
    name: "makuhita",
    types: [
      {
        slot: 1,
        type: { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }
      }
    ]
  },
  {
    id: 297,
    name: "hariyama",
    types: [
      {
        slot: 1,
        type: { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }
      }
    ]
  },
  {
    id: 298,
    name: "azurill",
    types: [
      {
        slot: 2,
        type: { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" }
      },
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 299,
    name: "nosepass",
    types: [
      {
        slot: 1,
        type: { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }
      }
    ]
  },
  {
    id: 300,
    name: "skitty",
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 301,
    name: "delcatty",
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 302,
    name: "sableye",
    types: [
      {
        slot: 2,
        type: { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" }
      },
      {
        slot: 1,
        type: { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" }
      }
    ]
  },
  {
    id: 303,
    name: "mawile",
    types: [
      {
        slot: 2,
        type: { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" }
      },
      {
        slot: 1,
        type: { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" }
      }
    ]
  },
  {
    id: 304,
    name: "aron",
    types: [
      {
        slot: 2,
        type: { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }
      },
      {
        slot: 1,
        type: { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" }
      }
    ]
  },
  {
    id: 305,
    name: "lairon",
    types: [
      {
        slot: 2,
        type: { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }
      },
      {
        slot: 1,
        type: { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" }
      }
    ]
  },
  {
    id: 306,
    name: "aggron",
    types: [
      {
        slot: 2,
        type: { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }
      },
      {
        slot: 1,
        type: { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" }
      }
    ]
  },
  {
    id: 307,
    name: "meditite",
    types: [
      {
        slot: 2,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      },
      {
        slot: 1,
        type: { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }
      }
    ]
  },
  {
    id: 308,
    name: "medicham",
    types: [
      {
        slot: 2,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      },
      {
        slot: 1,
        type: { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }
      }
    ]
  },
  {
    id: 309,
    name: "electrike",
    types: [
      {
        slot: 1,
        type: { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }
      }
    ]
  },
  {
    id: 310,
    name: "manectric",
    types: [
      {
        slot: 1,
        type: { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }
      }
    ]
  },
  {
    id: 311,
    name: "plusle",
    types: [
      {
        slot: 1,
        type: { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }
      }
    ]
  },
  {
    id: 312,
    name: "minun",
    types: [
      {
        slot: 1,
        type: { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }
      }
    ]
  },
  {
    id: 313,
    name: "volbeat",
    types: [
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 314,
    name: "illumise",
    types: [
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 315,
    name: "roselia",
    types: [
      {
        slot: 2,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
      },
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 316,
    name: "gulpin",
    types: [
      {
        slot: 1,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
      }
    ]
  },
  {
    id: 317,
    name: "swalot",
    types: [
      {
        slot: 1,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
      }
    ]
  },
  {
    id: 318,
    name: "carvanha",
    types: [
      {
        slot: 2,
        type: { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" }
      },
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 319,
    name: "sharpedo",
    types: [
      {
        slot: 2,
        type: { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" }
      },
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 320,
    name: "wailmer",
    types: [
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 321,
    name: "wailord",
    types: [
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 322,
    name: "numel",
    types: [
      {
        slot: 2,
        type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }
      },
      {
        slot: 1,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }
      }
    ]
  },
  {
    id: 323,
    name: "camerupt",
    types: [
      {
        slot: 2,
        type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }
      },
      {
        slot: 1,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }
      }
    ]
  },
  {
    id: 324,
    name: "torkoal",
    types: [
      {
        slot: 1,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }
      }
    ]
  },
  {
    id: 325,
    name: "spoink",
    types: [
      {
        slot: 1,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      }
    ]
  },
  {
    id: 326,
    name: "grumpig",
    types: [
      {
        slot: 1,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      }
    ]
  },
  {
    id: 327,
    name: "spinda",
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 328,
    name: "trapinch",
    types: [
      {
        slot: 1,
        type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }
      }
    ]
  },
  {
    id: 329,
    name: "vibrava",
    types: [
      {
        slot: 2,
        type: { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" }
      },
      {
        slot: 1,
        type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }
      }
    ]
  },
  {
    id: 330,
    name: "flygon",
    types: [
      {
        slot: 2,
        type: { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" }
      },
      {
        slot: 1,
        type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }
      }
    ]
  },
  {
    id: 331,
    name: "cacnea",
    types: [
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 332,
    name: "cacturne",
    types: [
      {
        slot: 2,
        type: { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" }
      },
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 333,
    name: "swablu",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 334,
    name: "altaria",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" }
      }
    ]
  },
  {
    id: 335,
    name: "zangoose",
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 336,
    name: "seviper",
    types: [
      {
        slot: 1,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
      }
    ]
  },
  {
    id: 337,
    name: "lunatone",
    types: [
      {
        slot: 2,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      },
      {
        slot: 1,
        type: { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }
      }
    ]
  },
  {
    id: 338,
    name: "solrock",
    types: [
      {
        slot: 2,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      },
      {
        slot: 1,
        type: { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }
      }
    ]
  },
  {
    id: 339,
    name: "barboach",
    types: [
      {
        slot: 2,
        type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }
      },
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 340,
    name: "whiscash",
    types: [
      {
        slot: 2,
        type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }
      },
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 341,
    name: "corphish",
    types: [
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 342,
    name: "crawdaunt",
    types: [
      {
        slot: 2,
        type: { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" }
      },
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 343,
    name: "baltoy",
    types: [
      {
        slot: 2,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      },
      {
        slot: 1,
        type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }
      }
    ]
  },
  {
    id: 344,
    name: "claydol",
    types: [
      {
        slot: 2,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      },
      {
        slot: 1,
        type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }
      }
    ]
  },
  {
    id: 345,
    name: "lileep",
    types: [
      {
        slot: 2,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      },
      {
        slot: 1,
        type: { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }
      }
    ]
  },
  {
    id: 346,
    name: "cradily",
    types: [
      {
        slot: 2,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      },
      {
        slot: 1,
        type: { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }
      }
    ]
  },
  {
    id: 347,
    name: "anorith",
    types: [
      {
        slot: 2,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      },
      {
        slot: 1,
        type: { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }
      }
    ]
  },
  {
    id: 348,
    name: "armaldo",
    types: [
      {
        slot: 2,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      },
      {
        slot: 1,
        type: { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }
      }
    ]
  },
  {
    id: 349,
    name: "feebas",
    types: [
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 350,
    name: "milotic",
    types: [
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 351,
    name: "castform",
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 352,
    name: "kecleon",
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 353,
    name: "shuppet",
    types: [
      {
        slot: 1,
        type: { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" }
      }
    ]
  },
  {
    id: 354,
    name: "banette",
    types: [
      {
        slot: 1,
        type: { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" }
      }
    ]
  },
  {
    id: 355,
    name: "duskull",
    types: [
      {
        slot: 1,
        type: { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" }
      }
    ]
  },
  {
    id: 356,
    name: "dusclops",
    types: [
      {
        slot: 1,
        type: { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" }
      }
    ]
  },
  {
    id: 357,
    name: "tropius",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 358,
    name: "chimecho",
    types: [
      {
        slot: 1,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      }
    ]
  },
  {
    id: 359,
    name: "absol",
    types: [
      {
        slot: 1,
        type: { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" }
      }
    ]
  },
  {
    id: 360,
    name: "wynaut",
    types: [
      {
        slot: 1,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      }
    ]
  },
  {
    id: 361,
    name: "snorunt",
    types: [
      {
        slot: 1,
        type: { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" }
      }
    ]
  },
  {
    id: 362,
    name: "glalie",
    types: [
      {
        slot: 1,
        type: { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" }
      }
    ]
  },
  {
    id: 363,
    name: "spheal",
    types: [
      {
        slot: 2,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      },
      {
        slot: 1,
        type: { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" }
      }
    ]
  },
  {
    id: 364,
    name: "sealeo",
    types: [
      {
        slot: 2,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      },
      {
        slot: 1,
        type: { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" }
      }
    ]
  },
  {
    id: 365,
    name: "walrein",
    types: [
      {
        slot: 2,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      },
      {
        slot: 1,
        type: { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" }
      }
    ]
  },
  {
    id: 366,
    name: "clamperl",
    types: [
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 367,
    name: "huntail",
    types: [
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 368,
    name: "gorebyss",
    types: [
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 369,
    name: "relicanth",
    types: [
      {
        slot: 2,
        type: { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }
      },
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 370,
    name: "luvdisc",
    types: [
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 371,
    name: "bagon",
    types: [
      {
        slot: 1,
        type: { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" }
      }
    ]
  },
  {
    id: 372,
    name: "shelgon",
    types: [
      {
        slot: 1,
        type: { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" }
      }
    ]
  },
  {
    id: 373,
    name: "salamence",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" }
      }
    ]
  },
  {
    id: 374,
    name: "beldum",
    types: [
      {
        slot: 2,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      },
      {
        slot: 1,
        type: { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" }
      }
    ]
  },
  {
    id: 375,
    name: "metang",
    types: [
      {
        slot: 2,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      },
      {
        slot: 1,
        type: { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" }
      }
    ]
  },
  {
    id: 376,
    name: "metagross",
    types: [
      {
        slot: 2,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      },
      {
        slot: 1,
        type: { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" }
      }
    ]
  },
  {
    id: 377,
    name: "regirock",
    types: [
      {
        slot: 1,
        type: { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }
      }
    ]
  },
  {
    id: 378,
    name: "regice",
    types: [
      {
        slot: 1,
        type: { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" }
      }
    ]
  },
  {
    id: 379,
    name: "registeel",
    types: [
      {
        slot: 1,
        type: { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" }
      }
    ]
  },
  {
    id: 380,
    name: "latias",
    types: [
      {
        slot: 2,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      },
      {
        slot: 1,
        type: { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" }
      }
    ]
  },
  {
    id: 381,
    name: "latios",
    types: [
      {
        slot: 2,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      },
      {
        slot: 1,
        type: { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" }
      }
    ]
  },
  {
    id: 382,
    name: "kyogre",
    types: [
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 383,
    name: "groudon",
    types: [
      {
        slot: 1,
        type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }
      }
    ]
  },
  {
    id: 384,
    name: "rayquaza",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" }
      }
    ]
  },
  {
    id: 385,
    name: "jirachi",
    types: [
      {
        slot: 2,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      },
      {
        slot: 1,
        type: { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" }
      }
    ]
  },
  {
    id: 386,
    name: "deoxys-normal",
    types: [
      {
        slot: 1,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      }
    ]
  },
  {
    id: 387,
    name: "turtwig",
    types: [
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 388,
    name: "grotle",
    types: [
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 389,
    name: "torterra",
    types: [
      {
        slot: 2,
        type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }
      },
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 390,
    name: "chimchar",
    types: [
      {
        slot: 1,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }
      }
    ]
  },
  {
    id: 391,
    name: "monferno",
    types: [
      {
        slot: 2,
        type: { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }
      },
      {
        slot: 1,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }
      }
    ]
  },
  {
    id: 392,
    name: "infernape",
    types: [
      {
        slot: 2,
        type: { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }
      },
      {
        slot: 1,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }
      }
    ]
  },
  {
    id: 393,
    name: "piplup",
    types: [
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 394,
    name: "prinplup",
    types: [
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 395,
    name: "empoleon",
    types: [
      {
        slot: 2,
        type: { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" }
      },
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 396,
    name: "starly",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 397,
    name: "staravia",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 398,
    name: "staraptor",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 399,
    name: "bidoof",
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 400,
    name: "bibarel",
    types: [
      {
        slot: 2,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      },
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 401,
    name: "kricketot",
    types: [
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 402,
    name: "kricketune",
    types: [
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 403,
    name: "shinx",
    types: [
      {
        slot: 1,
        type: { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }
      }
    ]
  },
  {
    id: 404,
    name: "luxio",
    types: [
      {
        slot: 1,
        type: { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }
      }
    ]
  },
  {
    id: 405,
    name: "luxray",
    types: [
      {
        slot: 1,
        type: { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }
      }
    ]
  },
  {
    id: 406,
    name: "budew",
    types: [
      {
        slot: 2,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
      },
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 407,
    name: "roserade",
    types: [
      {
        slot: 2,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
      },
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 408,
    name: "cranidos",
    types: [
      {
        slot: 1,
        type: { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }
      }
    ]
  },
  {
    id: 409,
    name: "rampardos",
    types: [
      {
        slot: 1,
        type: { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }
      }
    ]
  },
  {
    id: 410,
    name: "shieldon",
    types: [
      {
        slot: 2,
        type: { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" }
      },
      {
        slot: 1,
        type: { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }
      }
    ]
  },
  {
    id: 411,
    name: "bastiodon",
    types: [
      {
        slot: 2,
        type: { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" }
      },
      {
        slot: 1,
        type: { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }
      }
    ]
  },
  {
    id: 412,
    name: "burmy",
    types: [
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 413,
    name: "wormadam-plant",
    types: [
      {
        slot: 2,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      },
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 414,
    name: "mothim",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 415,
    name: "combee",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 416,
    name: "vespiquen",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 417,
    name: "pachirisu",
    types: [
      {
        slot: 1,
        type: { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }
      }
    ]
  },
  {
    id: 418,
    name: "buizel",
    types: [
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 419,
    name: "floatzel",
    types: [
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 420,
    name: "cherubi",
    types: [
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 421,
    name: "cherrim",
    types: [
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 422,
    name: "shellos",
    types: [
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 423,
    name: "gastrodon",
    types: [
      {
        slot: 2,
        type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }
      },
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 424,
    name: "ambipom",
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 425,
    name: "drifloon",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" }
      }
    ]
  },
  {
    id: 426,
    name: "drifblim",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" }
      }
    ]
  },
  {
    id: 427,
    name: "buneary",
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 428,
    name: "lopunny",
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 429,
    name: "mismagius",
    types: [
      {
        slot: 1,
        type: { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" }
      }
    ]
  },
  {
    id: 430,
    name: "honchkrow",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" }
      }
    ]
  },
  {
    id: 431,
    name: "glameow",
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 432,
    name: "purugly",
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 433,
    name: "chingling",
    types: [
      {
        slot: 1,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      }
    ]
  },
  {
    id: 434,
    name: "stunky",
    types: [
      {
        slot: 2,
        type: { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" }
      },
      {
        slot: 1,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
      }
    ]
  },
  {
    id: 435,
    name: "skuntank",
    types: [
      {
        slot: 2,
        type: { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" }
      },
      {
        slot: 1,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
      }
    ]
  },
  {
    id: 436,
    name: "bronzor",
    types: [
      {
        slot: 2,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      },
      {
        slot: 1,
        type: { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" }
      }
    ]
  },
  {
    id: 437,
    name: "bronzong",
    types: [
      {
        slot: 2,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      },
      {
        slot: 1,
        type: { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" }
      }
    ]
  },
  {
    id: 438,
    name: "bonsly",
    types: [
      {
        slot: 1,
        type: { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }
      }
    ]
  },
  {
    id: 439,
    name: "mime-jr",
    types: [
      {
        slot: 2,
        type: { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" }
      },
      {
        slot: 1,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      }
    ]
  },
  {
    id: 440,
    name: "happiny",
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 441,
    name: "chatot",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 442,
    name: "spiritomb",
    types: [
      {
        slot: 2,
        type: { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" }
      },
      {
        slot: 1,
        type: { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" }
      }
    ]
  },
  {
    id: 443,
    name: "gible",
    types: [
      {
        slot: 2,
        type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }
      },
      {
        slot: 1,
        type: { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" }
      }
    ]
  },
  {
    id: 444,
    name: "gabite",
    types: [
      {
        slot: 2,
        type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }
      },
      {
        slot: 1,
        type: { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" }
      }
    ]
  },
  {
    id: 445,
    name: "garchomp",
    types: [
      {
        slot: 2,
        type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }
      },
      {
        slot: 1,
        type: { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" }
      }
    ]
  },
  {
    id: 446,
    name: "munchlax",
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 447,
    name: "riolu",
    types: [
      {
        slot: 1,
        type: { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }
      }
    ]
  },
  {
    id: 448,
    name: "lucario",
    types: [
      {
        slot: 2,
        type: { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" }
      },
      {
        slot: 1,
        type: { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }
      }
    ]
  },
  {
    id: 449,
    name: "hippopotas",
    types: [
      {
        slot: 1,
        type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }
      }
    ]
  },
  {
    id: 450,
    name: "hippowdon",
    types: [
      {
        slot: 1,
        type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }
      }
    ]
  },
  {
    id: 451,
    name: "skorupi",
    types: [
      {
        slot: 2,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      },
      {
        slot: 1,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
      }
    ]
  },
  {
    id: 452,
    name: "drapion",
    types: [
      {
        slot: 2,
        type: { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" }
      },
      {
        slot: 1,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
      }
    ]
  },
  {
    id: 453,
    name: "croagunk",
    types: [
      {
        slot: 2,
        type: { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }
      },
      {
        slot: 1,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
      }
    ]
  },
  {
    id: 454,
    name: "toxicroak",
    types: [
      {
        slot: 2,
        type: { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }
      },
      {
        slot: 1,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
      }
    ]
  },
  {
    id: 455,
    name: "carnivine",
    types: [
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 456,
    name: "finneon",
    types: [
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 457,
    name: "lumineon",
    types: [
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 458,
    name: "mantyke",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 459,
    name: "snover",
    types: [
      {
        slot: 2,
        type: { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" }
      },
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 460,
    name: "abomasnow",
    types: [
      {
        slot: 2,
        type: { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" }
      },
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 461,
    name: "weavile",
    types: [
      {
        slot: 2,
        type: { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" }
      },
      {
        slot: 1,
        type: { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" }
      }
    ]
  },
  {
    id: 462,
    name: "magnezone",
    types: [
      {
        slot: 2,
        type: { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" }
      },
      {
        slot: 1,
        type: { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }
      }
    ]
  },
  {
    id: 463,
    name: "lickilicky",
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 464,
    name: "rhyperior",
    types: [
      {
        slot: 2,
        type: { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }
      },
      {
        slot: 1,
        type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }
      }
    ]
  },
  {
    id: 465,
    name: "tangrowth",
    types: [
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 466,
    name: "electivire",
    types: [
      {
        slot: 1,
        type: { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }
      }
    ]
  },
  {
    id: 467,
    name: "magmortar",
    types: [
      {
        slot: 1,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }
      }
    ]
  },
  {
    id: 468,
    name: "togekiss",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" }
      }
    ]
  },
  {
    id: 469,
    name: "yanmega",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 470,
    name: "leafeon",
    types: [
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 471,
    name: "glaceon",
    types: [
      {
        slot: 1,
        type: { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" }
      }
    ]
  },
  {
    id: 472,
    name: "gliscor",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }
      }
    ]
  },
  {
    id: 473,
    name: "mamoswine",
    types: [
      {
        slot: 2,
        type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }
      },
      {
        slot: 1,
        type: { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" }
      }
    ]
  },
  {
    id: 474,
    name: "porygon-z",
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 475,
    name: "gallade",
    types: [
      {
        slot: 2,
        type: { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }
      },
      {
        slot: 1,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      }
    ]
  },
  {
    id: 476,
    name: "probopass",
    types: [
      {
        slot: 2,
        type: { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" }
      },
      {
        slot: 1,
        type: { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }
      }
    ]
  },
  {
    id: 477,
    name: "dusknoir",
    types: [
      {
        slot: 1,
        type: { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" }
      }
    ]
  },
  {
    id: 478,
    name: "froslass",
    types: [
      {
        slot: 2,
        type: { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" }
      },
      {
        slot: 1,
        type: { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" }
      }
    ]
  },
  {
    id: 479,
    name: "rotom",
    types: [
      {
        slot: 2,
        type: { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" }
      },
      {
        slot: 1,
        type: { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }
      }
    ]
  },
  {
    id: 480,
    name: "uxie",
    types: [
      {
        slot: 1,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      }
    ]
  },
  {
    id: 481,
    name: "mesprit",
    types: [
      {
        slot: 1,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      }
    ]
  },
  {
    id: 482,
    name: "azelf",
    types: [
      {
        slot: 1,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      }
    ]
  },
  {
    id: 483,
    name: "dialga",
    types: [
      {
        slot: 2,
        type: { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" }
      },
      {
        slot: 1,
        type: { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" }
      }
    ]
  },
  {
    id: 484,
    name: "palkia",
    types: [
      {
        slot: 2,
        type: { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" }
      },
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 485,
    name: "heatran",
    types: [
      {
        slot: 2,
        type: { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" }
      },
      {
        slot: 1,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }
      }
    ]
  },
  {
    id: 486,
    name: "regigigas",
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 487,
    name: "giratina-altered",
    types: [
      {
        slot: 2,
        type: { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" }
      },
      {
        slot: 1,
        type: { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" }
      }
    ]
  },
  {
    id: 488,
    name: "cresselia",
    types: [
      {
        slot: 1,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      }
    ]
  },
  {
    id: 489,
    name: "phione",
    types: [
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 490,
    name: "manaphy",
    types: [
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 491,
    name: "darkrai",
    types: [
      {
        slot: 1,
        type: { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" }
      }
    ]
  },
  {
    id: 492,
    name: "shaymin-land",
    types: [
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 493,
    name: "arceus",
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 494,
    name: "victini",
    types: [
      {
        slot: 2,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }
      },
      {
        slot: 1,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      }
    ]
  },
  {
    id: 495,
    name: "snivy",
    types: [
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 496,
    name: "servine",
    types: [
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 497,
    name: "serperior",
    types: [
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 498,
    name: "tepig",
    types: [
      {
        slot: 1,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }
      }
    ]
  },
  {
    id: 499,
    name: "pignite",
    types: [
      {
        slot: 2,
        type: { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }
      },
      {
        slot: 1,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }
      }
    ]
  },
  {
    id: 500,
    name: "emboar",
    types: [
      {
        slot: 2,
        type: { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }
      },
      {
        slot: 1,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }
      }
    ]
  },
  {
    id: 501,
    name: "oshawott",
    types: [
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 502,
    name: "dewott",
    types: [
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 503,
    name: "samurott",
    types: [
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 504,
    name: "patrat",
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 505,
    name: "watchog",
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 506,
    name: "lillipup",
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 507,
    name: "herdier",
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 508,
    name: "stoutland",
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 509,
    name: "purrloin",
    types: [
      {
        slot: 1,
        type: { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" }
      }
    ]
  },
  {
    id: 510,
    name: "liepard",
    types: [
      {
        slot: 1,
        type: { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" }
      }
    ]
  },
  {
    id: 511,
    name: "pansage",
    types: [
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 512,
    name: "simisage",
    types: [
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 513,
    name: "pansear",
    types: [
      {
        slot: 1,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }
      }
    ]
  },
  {
    id: 514,
    name: "simisear",
    types: [
      {
        slot: 1,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }
      }
    ]
  },
  {
    id: 515,
    name: "panpour",
    types: [
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 516,
    name: "simipour",
    types: [
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 517,
    name: "munna",
    types: [
      {
        slot: 1,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      }
    ]
  },
  {
    id: 518,
    name: "musharna",
    types: [
      {
        slot: 1,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      }
    ]
  },
  {
    id: 519,
    name: "pidove",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 520,
    name: "tranquill",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 521,
    name: "unfezant",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 522,
    name: "blitzle",
    types: [
      {
        slot: 1,
        type: { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }
      }
    ]
  },
  {
    id: 523,
    name: "zebstrika",
    types: [
      {
        slot: 1,
        type: { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }
      }
    ]
  },
  {
    id: 524,
    name: "roggenrola",
    types: [
      {
        slot: 1,
        type: { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }
      }
    ]
  },
  {
    id: 525,
    name: "boldore",
    types: [
      {
        slot: 1,
        type: { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }
      }
    ]
  },
  {
    id: 526,
    name: "gigalith",
    types: [
      {
        slot: 1,
        type: { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }
      }
    ]
  },
  {
    id: 527,
    name: "woobat",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      }
    ]
  },
  {
    id: 528,
    name: "swoobat",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      }
    ]
  },
  {
    id: 529,
    name: "drilbur",
    types: [
      {
        slot: 1,
        type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }
      }
    ]
  },
  {
    id: 530,
    name: "excadrill",
    types: [
      {
        slot: 2,
        type: { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" }
      },
      {
        slot: 1,
        type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }
      }
    ]
  },
  {
    id: 531,
    name: "audino",
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 532,
    name: "timburr",
    types: [
      {
        slot: 1,
        type: { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }
      }
    ]
  },
  {
    id: 533,
    name: "gurdurr",
    types: [
      {
        slot: 1,
        type: { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }
      }
    ]
  },
  {
    id: 534,
    name: "conkeldurr",
    types: [
      {
        slot: 1,
        type: { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }
      }
    ]
  },
  {
    id: 535,
    name: "tympole",
    types: [
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 536,
    name: "palpitoad",
    types: [
      {
        slot: 2,
        type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }
      },
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 537,
    name: "seismitoad",
    types: [
      {
        slot: 2,
        type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }
      },
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 538,
    name: "throh",
    types: [
      {
        slot: 1,
        type: { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }
      }
    ]
  },
  {
    id: 539,
    name: "sawk",
    types: [
      {
        slot: 1,
        type: { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }
      }
    ]
  },
  {
    id: 540,
    name: "sewaddle",
    types: [
      {
        slot: 2,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      },
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 541,
    name: "swadloon",
    types: [
      {
        slot: 2,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      },
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 542,
    name: "leavanny",
    types: [
      {
        slot: 2,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      },
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 543,
    name: "venipede",
    types: [
      {
        slot: 2,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
      },
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 544,
    name: "whirlipede",
    types: [
      {
        slot: 2,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
      },
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 545,
    name: "scolipede",
    types: [
      {
        slot: 2,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
      },
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 546,
    name: "cottonee",
    types: [
      {
        slot: 2,
        type: { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" }
      },
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 547,
    name: "whimsicott",
    types: [
      {
        slot: 2,
        type: { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" }
      },
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 548,
    name: "petilil",
    types: [
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 549,
    name: "lilligant",
    types: [
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 550,
    name: "basculin-red-striped",
    types: [
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 551,
    name: "sandile",
    types: [
      {
        slot: 2,
        type: { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" }
      },
      {
        slot: 1,
        type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }
      }
    ]
  },
  {
    id: 552,
    name: "krokorok",
    types: [
      {
        slot: 2,
        type: { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" }
      },
      {
        slot: 1,
        type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }
      }
    ]
  },
  {
    id: 553,
    name: "krookodile",
    types: [
      {
        slot: 2,
        type: { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" }
      },
      {
        slot: 1,
        type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }
      }
    ]
  },
  {
    id: 554,
    name: "darumaka",
    types: [
      {
        slot: 1,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }
      }
    ]
  },
  {
    id: 555,
    name: "darmanitan-standard",
    types: [
      {
        slot: 1,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }
      }
    ]
  },
  {
    id: 556,
    name: "maractus",
    types: [
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 557,
    name: "dwebble",
    types: [
      {
        slot: 2,
        type: { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }
      },
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 558,
    name: "crustle",
    types: [
      {
        slot: 2,
        type: { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }
      },
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 559,
    name: "scraggy",
    types: [
      {
        slot: 2,
        type: { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }
      },
      {
        slot: 1,
        type: { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" }
      }
    ]
  },
  {
    id: 560,
    name: "scrafty",
    types: [
      {
        slot: 2,
        type: { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }
      },
      {
        slot: 1,
        type: { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" }
      }
    ]
  },
  {
    id: 561,
    name: "sigilyph",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      }
    ]
  },
  {
    id: 562,
    name: "yamask",
    types: [
      {
        slot: 1,
        type: { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" }
      }
    ]
  },
  {
    id: 563,
    name: "cofagrigus",
    types: [
      {
        slot: 1,
        type: { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" }
      }
    ]
  },
  {
    id: 564,
    name: "tirtouga",
    types: [
      {
        slot: 2,
        type: { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }
      },
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 565,
    name: "carracosta",
    types: [
      {
        slot: 2,
        type: { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }
      },
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 566,
    name: "archen",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }
      }
    ]
  },
  {
    id: 567,
    name: "archeops",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }
      }
    ]
  },
  {
    id: 568,
    name: "trubbish",
    types: [
      {
        slot: 1,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
      }
    ]
  },
  {
    id: 569,
    name: "garbodor",
    types: [
      {
        slot: 1,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
      }
    ]
  },
  {
    id: 570,
    name: "zorua",
    types: [
      {
        slot: 1,
        type: { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" }
      }
    ]
  },
  {
    id: 571,
    name: "zoroark",
    types: [
      {
        slot: 1,
        type: { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" }
      }
    ]
  },
  {
    id: 572,
    name: "minccino",
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 573,
    name: "cinccino",
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 574,
    name: "gothita",
    types: [
      {
        slot: 1,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      }
    ]
  },
  {
    id: 575,
    name: "gothorita",
    types: [
      {
        slot: 1,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      }
    ]
  },
  {
    id: 576,
    name: "gothitelle",
    types: [
      {
        slot: 1,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      }
    ]
  },
  {
    id: 577,
    name: "solosis",
    types: [
      {
        slot: 1,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      }
    ]
  },
  {
    id: 578,
    name: "duosion",
    types: [
      {
        slot: 1,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      }
    ]
  },
  {
    id: 579,
    name: "reuniclus",
    types: [
      {
        slot: 1,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      }
    ]
  },
  {
    id: 580,
    name: "ducklett",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 581,
    name: "swanna",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 582,
    name: "vanillite",
    types: [
      {
        slot: 1,
        type: { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" }
      }
    ]
  },
  {
    id: 583,
    name: "vanillish",
    types: [
      {
        slot: 1,
        type: { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" }
      }
    ]
  },
  {
    id: 584,
    name: "vanilluxe",
    types: [
      {
        slot: 1,
        type: { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" }
      }
    ]
  },
  {
    id: 585,
    name: "deerling",
    types: [
      {
        slot: 2,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      },
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 586,
    name: "sawsbuck",
    types: [
      {
        slot: 2,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      },
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 587,
    name: "emolga",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }
      }
    ]
  },
  {
    id: 588,
    name: "karrablast",
    types: [
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 589,
    name: "escavalier",
    types: [
      {
        slot: 2,
        type: { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" }
      },
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 590,
    name: "foongus",
    types: [
      {
        slot: 2,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
      },
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 591,
    name: "amoonguss",
    types: [
      {
        slot: 2,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
      },
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 592,
    name: "frillish",
    types: [
      {
        slot: 2,
        type: { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" }
      },
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 593,
    name: "jellicent",
    types: [
      {
        slot: 2,
        type: { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" }
      },
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 594,
    name: "alomomola",
    types: [
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 595,
    name: "joltik",
    types: [
      {
        slot: 2,
        type: { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }
      },
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 596,
    name: "galvantula",
    types: [
      {
        slot: 2,
        type: { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }
      },
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 597,
    name: "ferroseed",
    types: [
      {
        slot: 2,
        type: { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" }
      },
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 598,
    name: "ferrothorn",
    types: [
      {
        slot: 2,
        type: { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" }
      },
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 599,
    name: "klink",
    types: [
      {
        slot: 1,
        type: { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" }
      }
    ]
  },
  {
    id: 600,
    name: "klang",
    types: [
      {
        slot: 1,
        type: { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" }
      }
    ]
  },
  {
    id: 601,
    name: "klinklang",
    types: [
      {
        slot: 1,
        type: { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" }
      }
    ]
  },
  {
    id: 602,
    name: "tynamo",
    types: [
      {
        slot: 1,
        type: { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }
      }
    ]
  },
  {
    id: 603,
    name: "eelektrik",
    types: [
      {
        slot: 1,
        type: { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }
      }
    ]
  },
  {
    id: 604,
    name: "eelektross",
    types: [
      {
        slot: 1,
        type: { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }
      }
    ]
  },
  {
    id: 605,
    name: "elgyem",
    types: [
      {
        slot: 1,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      }
    ]
  },
  {
    id: 606,
    name: "beheeyem",
    types: [
      {
        slot: 1,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      }
    ]
  },
  {
    id: 607,
    name: "litwick",
    types: [
      {
        slot: 2,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }
      },
      {
        slot: 1,
        type: { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" }
      }
    ]
  },
  {
    id: 608,
    name: "lampent",
    types: [
      {
        slot: 2,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }
      },
      {
        slot: 1,
        type: { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" }
      }
    ]
  },
  {
    id: 609,
    name: "chandelure",
    types: [
      {
        slot: 2,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }
      },
      {
        slot: 1,
        type: { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" }
      }
    ]
  },
  {
    id: 610,
    name: "axew",
    types: [
      {
        slot: 1,
        type: { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" }
      }
    ]
  },
  {
    id: 611,
    name: "fraxure",
    types: [
      {
        slot: 1,
        type: { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" }
      }
    ]
  },
  {
    id: 612,
    name: "haxorus",
    types: [
      {
        slot: 1,
        type: { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" }
      }
    ]
  },
  {
    id: 613,
    name: "cubchoo",
    types: [
      {
        slot: 1,
        type: { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" }
      }
    ]
  },
  {
    id: 614,
    name: "beartic",
    types: [
      {
        slot: 1,
        type: { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" }
      }
    ]
  },
  {
    id: 615,
    name: "cryogonal",
    types: [
      {
        slot: 1,
        type: { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" }
      }
    ]
  },
  {
    id: 616,
    name: "shelmet",
    types: [
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 617,
    name: "accelgor",
    types: [
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 618,
    name: "stunfisk",
    types: [
      {
        slot: 2,
        type: { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }
      },
      {
        slot: 1,
        type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }
      }
    ]
  },
  {
    id: 619,
    name: "mienfoo",
    types: [
      {
        slot: 1,
        type: { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }
      }
    ]
  },
  {
    id: 620,
    name: "mienshao",
    types: [
      {
        slot: 1,
        type: { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }
      }
    ]
  },
  {
    id: 621,
    name: "druddigon",
    types: [
      {
        slot: 1,
        type: { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" }
      }
    ]
  },
  {
    id: 622,
    name: "golett",
    types: [
      {
        slot: 2,
        type: { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" }
      },
      {
        slot: 1,
        type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }
      }
    ]
  },
  {
    id: 623,
    name: "golurk",
    types: [
      {
        slot: 2,
        type: { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" }
      },
      {
        slot: 1,
        type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }
      }
    ]
  },
  {
    id: 624,
    name: "pawniard",
    types: [
      {
        slot: 2,
        type: { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" }
      },
      {
        slot: 1,
        type: { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" }
      }
    ]
  },
  {
    id: 625,
    name: "bisharp",
    types: [
      {
        slot: 2,
        type: { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" }
      },
      {
        slot: 1,
        type: { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" }
      }
    ]
  },
  {
    id: 626,
    name: "bouffalant",
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 627,
    name: "rufflet",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 628,
    name: "braviary",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 629,
    name: "vullaby",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" }
      }
    ]
  },
  {
    id: 630,
    name: "mandibuzz",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" }
      }
    ]
  },
  {
    id: 631,
    name: "heatmor",
    types: [
      {
        slot: 1,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }
      }
    ]
  },
  {
    id: 632,
    name: "durant",
    types: [
      {
        slot: 2,
        type: { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" }
      },
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 633,
    name: "deino",
    types: [
      {
        slot: 2,
        type: { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" }
      },
      {
        slot: 1,
        type: { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" }
      }
    ]
  },
  {
    id: 634,
    name: "zweilous",
    types: [
      {
        slot: 2,
        type: { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" }
      },
      {
        slot: 1,
        type: { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" }
      }
    ]
  },
  {
    id: 635,
    name: "hydreigon",
    types: [
      {
        slot: 2,
        type: { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" }
      },
      {
        slot: 1,
        type: { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" }
      }
    ]
  },
  {
    id: 636,
    name: "larvesta",
    types: [
      {
        slot: 2,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }
      },
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 637,
    name: "volcarona",
    types: [
      {
        slot: 2,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }
      },
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 638,
    name: "cobalion",
    types: [
      {
        slot: 2,
        type: { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }
      },
      {
        slot: 1,
        type: { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" }
      }
    ]
  },
  {
    id: 639,
    name: "terrakion",
    types: [
      {
        slot: 2,
        type: { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }
      },
      {
        slot: 1,
        type: { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }
      }
    ]
  },
  {
    id: 640,
    name: "virizion",
    types: [
      {
        slot: 2,
        type: { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }
      },
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 641,
    name: "tornadus-incarnate",
    types: [
      {
        slot: 1,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      }
    ]
  },
  {
    id: 642,
    name: "thundurus-incarnate",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }
      }
    ]
  },
  {
    id: 643,
    name: "reshiram",
    types: [
      {
        slot: 2,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }
      },
      {
        slot: 1,
        type: { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" }
      }
    ]
  },
  {
    id: 644,
    name: "zekrom",
    types: [
      {
        slot: 2,
        type: { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }
      },
      {
        slot: 1,
        type: { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" }
      }
    ]
  },
  {
    id: 645,
    name: "landorus-incarnate",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }
      }
    ]
  },
  {
    id: 646,
    name: "kyurem",
    types: [
      {
        slot: 2,
        type: { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" }
      },
      {
        slot: 1,
        type: { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" }
      }
    ]
  },
  {
    id: 647,
    name: "keldeo-ordinary",
    types: [
      {
        slot: 2,
        type: { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }
      },
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 648,
    name: "meloetta-aria",
    types: [
      {
        slot: 2,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      },
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 649,
    name: "genesect",
    types: [
      {
        slot: 2,
        type: { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" }
      },
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 650,
    name: "chespin",
    types: [
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 651,
    name: "quilladin",
    types: [
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 652,
    name: "chesnaught",
    types: [
      {
        slot: 2,
        type: { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }
      },
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 653,
    name: "fennekin",
    types: [
      {
        slot: 1,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }
      }
    ]
  },
  {
    id: 654,
    name: "braixen",
    types: [
      {
        slot: 1,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }
      }
    ]
  },
  {
    id: 655,
    name: "delphox",
    types: [
      {
        slot: 2,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      },
      {
        slot: 1,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }
      }
    ]
  },
  {
    id: 656,
    name: "froakie",
    types: [
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 657,
    name: "frogadier",
    types: [
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 658,
    name: "greninja",
    types: [
      {
        slot: 2,
        type: { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" }
      },
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 659,
    name: "bunnelby",
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 660,
    name: "diggersby",
    types: [
      {
        slot: 2,
        type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }
      },
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 661,
    name: "fletchling",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 662,
    name: "fletchinder",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }
      }
    ]
  },
  {
    id: 663,
    name: "talonflame",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }
      }
    ]
  },
  {
    id: 664,
    name: "scatterbug",
    types: [
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 665,
    name: "spewpa",
    types: [
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 666,
    name: "vivillon",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 667,
    name: "litleo",
    types: [
      {
        slot: 2,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      },
      {
        slot: 1,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }
      }
    ]
  },
  {
    id: 668,
    name: "pyroar",
    types: [
      {
        slot: 2,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      },
      {
        slot: 1,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }
      }
    ]
  },
  {
    id: 669,
    name: "flabebe",
    types: [
      {
        slot: 1,
        type: { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" }
      }
    ]
  },
  {
    id: 670,
    name: "floette",
    types: [
      {
        slot: 1,
        type: { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" }
      }
    ]
  },
  {
    id: 671,
    name: "florges",
    types: [
      {
        slot: 1,
        type: { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" }
      }
    ]
  },
  {
    id: 672,
    name: "skiddo",
    types: [
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 673,
    name: "gogoat",
    types: [
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 674,
    name: "pancham",
    types: [
      {
        slot: 1,
        type: { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }
      }
    ]
  },
  {
    id: 675,
    name: "pangoro",
    types: [
      {
        slot: 2,
        type: { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" }
      },
      {
        slot: 1,
        type: { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }
      }
    ]
  },
  {
    id: 676,
    name: "furfrou",
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 677,
    name: "espurr",
    types: [
      {
        slot: 1,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      }
    ]
  },
  {
    id: 678,
    name: "meowstic-male",
    types: [
      {
        slot: 1,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      }
    ]
  },
  {
    id: 679,
    name: "honedge",
    types: [
      {
        slot: 2,
        type: { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" }
      },
      {
        slot: 1,
        type: { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" }
      }
    ]
  },
  {
    id: 680,
    name: "doublade",
    types: [
      {
        slot: 2,
        type: { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" }
      },
      {
        slot: 1,
        type: { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" }
      }
    ]
  },
  {
    id: 681,
    name: "aegislash-shield",
    types: [
      {
        slot: 2,
        type: { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" }
      },
      {
        slot: 1,
        type: { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" }
      }
    ]
  },
  {
    id: 682,
    name: "spritzee",
    types: [
      {
        slot: 1,
        type: { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" }
      }
    ]
  },
  {
    id: 683,
    name: "aromatisse",
    types: [
      {
        slot: 1,
        type: { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" }
      }
    ]
  },
  {
    id: 684,
    name: "swirlix",
    types: [
      {
        slot: 1,
        type: { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" }
      }
    ]
  },
  {
    id: 685,
    name: "slurpuff",
    types: [
      {
        slot: 1,
        type: { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" }
      }
    ]
  },
  {
    id: 686,
    name: "inkay",
    types: [
      {
        slot: 2,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      },
      {
        slot: 1,
        type: { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" }
      }
    ]
  },
  {
    id: 687,
    name: "malamar",
    types: [
      {
        slot: 2,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      },
      {
        slot: 1,
        type: { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" }
      }
    ]
  },
  {
    id: 688,
    name: "binacle",
    types: [
      {
        slot: 2,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      },
      {
        slot: 1,
        type: { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }
      }
    ]
  },
  {
    id: 689,
    name: "barbaracle",
    types: [
      {
        slot: 2,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      },
      {
        slot: 1,
        type: { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }
      }
    ]
  },
  {
    id: 690,
    name: "skrelp",
    types: [
      {
        slot: 2,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      },
      {
        slot: 1,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
      }
    ]
  },
  {
    id: 691,
    name: "dragalge",
    types: [
      {
        slot: 2,
        type: { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" }
      },
      {
        slot: 1,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
      }
    ]
  },
  {
    id: 692,
    name: "clauncher",
    types: [
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 693,
    name: "clawitzer",
    types: [
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 694,
    name: "helioptile",
    types: [
      {
        slot: 2,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      },
      {
        slot: 1,
        type: { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }
      }
    ]
  },
  {
    id: 695,
    name: "heliolisk",
    types: [
      {
        slot: 2,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      },
      {
        slot: 1,
        type: { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }
      }
    ]
  },
  {
    id: 696,
    name: "tyrunt",
    types: [
      {
        slot: 2,
        type: { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" }
      },
      {
        slot: 1,
        type: { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }
      }
    ]
  },
  {
    id: 697,
    name: "tyrantrum",
    types: [
      {
        slot: 2,
        type: { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" }
      },
      {
        slot: 1,
        type: { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }
      }
    ]
  },
  {
    id: 698,
    name: "amaura",
    types: [
      {
        slot: 2,
        type: { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" }
      },
      {
        slot: 1,
        type: { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }
      }
    ]
  },
  {
    id: 699,
    name: "aurorus",
    types: [
      {
        slot: 2,
        type: { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" }
      },
      {
        slot: 1,
        type: { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }
      }
    ]
  },
  {
    id: 700,
    name: "sylveon",
    types: [
      {
        slot: 1,
        type: { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" }
      }
    ]
  },
  {
    id: 701,
    name: "hawlucha",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }
      }
    ]
  },
  {
    id: 702,
    name: "dedenne",
    types: [
      {
        slot: 2,
        type: { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" }
      },
      {
        slot: 1,
        type: { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }
      }
    ]
  },
  {
    id: 703,
    name: "carbink",
    types: [
      {
        slot: 2,
        type: { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" }
      },
      {
        slot: 1,
        type: { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }
      }
    ]
  },
  {
    id: 704,
    name: "goomy",
    types: [
      {
        slot: 1,
        type: { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" }
      }
    ]
  },
  {
    id: 705,
    name: "sliggoo",
    types: [
      {
        slot: 1,
        type: { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" }
      }
    ]
  },
  {
    id: 706,
    name: "goodra",
    types: [
      {
        slot: 1,
        type: { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" }
      }
    ]
  },
  {
    id: 707,
    name: "klefki",
    types: [
      {
        slot: 2,
        type: { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" }
      },
      {
        slot: 1,
        type: { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" }
      }
    ]
  },
  {
    id: 708,
    name: "phantump",
    types: [
      {
        slot: 2,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      },
      {
        slot: 1,
        type: { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" }
      }
    ]
  },
  {
    id: 709,
    name: "trevenant",
    types: [
      {
        slot: 2,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      },
      {
        slot: 1,
        type: { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" }
      }
    ]
  },
  {
    id: 710,
    name: "pumpkaboo-average",
    types: [
      {
        slot: 2,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      },
      {
        slot: 1,
        type: { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" }
      }
    ]
  },
  {
    id: 711,
    name: "gourgeist-average",
    types: [
      {
        slot: 2,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      },
      {
        slot: 1,
        type: { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" }
      }
    ]
  },
  {
    id: 712,
    name: "bergmite",
    types: [
      {
        slot: 1,
        type: { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" }
      }
    ]
  },
  {
    id: 713,
    name: "avalugg",
    types: [
      {
        slot: 1,
        type: { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" }
      }
    ]
  },
  {
    id: 714,
    name: "noibat",
    types: [
      {
        slot: 2,
        type: { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" }
      },
      {
        slot: 1,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      }
    ]
  },
  {
    id: 715,
    name: "noivern",
    types: [
      {
        slot: 2,
        type: { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" }
      },
      {
        slot: 1,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      }
    ]
  },
  {
    id: 716,
    name: "xerneas",
    types: [
      {
        slot: 1,
        type: { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" }
      }
    ]
  },
  {
    id: 717,
    name: "yveltal",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" }
      }
    ]
  },
  {
    id: 718,
    name: "zygarde",
    types: [
      {
        slot: 2,
        type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }
      },
      {
        slot: 1,
        type: { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" }
      }
    ]
  },
  {
    id: 719,
    name: "diancie",
    types: [
      {
        slot: 2,
        type: { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" }
      },
      {
        slot: 1,
        type: { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }
      }
    ]
  },
  {
    id: 720,
    name: "hoopa",
    types: [
      {
        slot: 2,
        type: { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" }
      },
      {
        slot: 1,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      }
    ]
  },
  {
    id: 721,
    name: "volcanion",
    types: [
      {
        slot: 2,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      },
      {
        slot: 1,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }
      }
    ]
  },
  {
    id: 722,
    name: "rowlet",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 723,
    name: "dartrix",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 724,
    name: "decidueye",
    types: [
      {
        slot: 2,
        type: { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" }
      },
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 725,
    name: "litten",
    types: [
      {
        slot: 1,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }
      }
    ]
  },
  {
    id: 726,
    name: "torracat",
    types: [
      {
        slot: 1,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }
      }
    ]
  },
  {
    id: 727,
    name: "incineroar",
    types: [
      {
        slot: 2,
        type: { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" }
      },
      {
        slot: 1,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }
      }
    ]
  },
  {
    id: 728,
    name: "popplio",
    types: [
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 729,
    name: "brionne",
    types: [
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 730,
    name: "primarina",
    types: [
      {
        slot: 2,
        type: { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" }
      },
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 731,
    name: "pikipek",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 732,
    name: "trumbeak",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 733,
    name: "toucannon",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 734,
    name: "yungoos",
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 735,
    name: "gumshoos",
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 736,
    name: "grubbin",
    types: [
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 737,
    name: "charjabug",
    types: [
      {
        slot: 2,
        type: { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }
      },
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 738,
    name: "vikavolt",
    types: [
      {
        slot: 2,
        type: { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }
      },
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 739,
    name: "crabrawler",
    types: [
      {
        slot: 1,
        type: { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }
      }
    ]
  },
  {
    id: 740,
    name: "crabominable",
    types: [
      {
        slot: 2,
        type: { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" }
      },
      {
        slot: 1,
        type: { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }
      }
    ]
  },
  {
    id: 741,
    name: "oricorio-baile",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }
      }
    ]
  },
  {
    id: 742,
    name: "cutiefly",
    types: [
      {
        slot: 2,
        type: { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" }
      },
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 743,
    name: "ribombee",
    types: [
      {
        slot: 2,
        type: { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" }
      },
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 744,
    name: "rockruff",
    types: [
      {
        slot: 1,
        type: { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }
      }
    ]
  },
  {
    id: 745,
    name: "lycanroc-midday",
    types: [
      {
        slot: 1,
        type: { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }
      }
    ]
  },
  {
    id: 746,
    name: "wishiwashi-solo",
    types: [
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 747,
    name: "mareanie",
    types: [
      {
        slot: 2,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      },
      {
        slot: 1,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
      }
    ]
  },
  {
    id: 748,
    name: "toxapex",
    types: [
      {
        slot: 2,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      },
      {
        slot: 1,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
      }
    ]
  },
  {
    id: 749,
    name: "mudbray",
    types: [
      {
        slot: 1,
        type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }
      }
    ]
  },
  {
    id: 750,
    name: "mudsdale",
    types: [
      {
        slot: 1,
        type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }
      }
    ]
  },
  {
    id: 751,
    name: "dewpider",
    types: [
      {
        slot: 2,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      },
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 752,
    name: "araquanid",
    types: [
      {
        slot: 2,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      },
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 753,
    name: "fomantis",
    types: [
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 754,
    name: "lurantis",
    types: [
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 755,
    name: "morelull",
    types: [
      {
        slot: 2,
        type: { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" }
      },
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 756,
    name: "shiinotic",
    types: [
      {
        slot: 2,
        type: { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" }
      },
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 757,
    name: "salandit",
    types: [
      {
        slot: 2,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }
      },
      {
        slot: 1,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
      }
    ]
  },
  {
    id: 758,
    name: "salazzle",
    types: [
      {
        slot: 2,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }
      },
      {
        slot: 1,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
      }
    ]
  },
  {
    id: 759,
    name: "stufful",
    types: [
      {
        slot: 2,
        type: { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }
      },
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 760,
    name: "bewear",
    types: [
      {
        slot: 2,
        type: { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }
      },
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 761,
    name: "bounsweet",
    types: [
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 762,
    name: "steenee",
    types: [
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 763,
    name: "tsareena",
    types: [
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 764,
    name: "comfey",
    types: [
      {
        slot: 1,
        type: { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" }
      }
    ]
  },
  {
    id: 765,
    name: "oranguru",
    types: [
      {
        slot: 2,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      },
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 766,
    name: "passimian",
    types: [
      {
        slot: 1,
        type: { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }
      }
    ]
  },
  {
    id: 767,
    name: "wimpod",
    types: [
      {
        slot: 2,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      },
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 768,
    name: "golisopod",
    types: [
      {
        slot: 2,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      },
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 769,
    name: "sandygast",
    types: [
      {
        slot: 2,
        type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }
      },
      {
        slot: 1,
        type: { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" }
      }
    ]
  },
  {
    id: 770,
    name: "palossand",
    types: [
      {
        slot: 2,
        type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" }
      },
      {
        slot: 1,
        type: { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" }
      }
    ]
  },
  {
    id: 771,
    name: "pyukumuku",
    types: [
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 772,
    name: "type-null",
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 773,
    name: "silvally",
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 774,
    name: "minior-meteor",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }
      }
    ]
  },
  {
    id: 775,
    name: "komala",
    types: [
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 776,
    name: "turtonator",
    types: [
      {
        slot: 2,
        type: { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" }
      },
      {
        slot: 1,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }
      }
    ]
  },
  {
    id: 777,
    name: "togedemaru",
    types: [
      {
        slot: 2,
        type: { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" }
      },
      {
        slot: 1,
        type: { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }
      }
    ]
  },
  {
    id: 778,
    name: "mimikyu",
    types: [
      {
        slot: 2,
        type: { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" }
      },
      {
        slot: 1,
        type: { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" }
      }
    ]
  },
  {
    id: 779,
    name: "bruxish",
    types: [
      {
        slot: 2,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      },
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 780,
    name: "drampa",
    types: [
      {
        slot: 2,
        type: { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" }
      },
      {
        slot: 1,
        type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" }
      }
    ]
  },
  {
    id: 781,
    name: "dhelmise",
    types: [
      {
        slot: 2,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      },
      {
        slot: 1,
        type: { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" }
      }
    ]
  },
  {
    id: 782,
    name: "jangmo-o",
    types: [
      {
        slot: 1,
        type: { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" }
      }
    ]
  },
  {
    id: 783,
    name: "hakamo-o",
    types: [
      {
        slot: 2,
        type: { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }
      },
      {
        slot: 1,
        type: { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" }
      }
    ]
  },
  {
    id: 784,
    name: "kommo-o",
    types: [
      {
        slot: 2,
        type: { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }
      },
      {
        slot: 1,
        type: { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" }
      }
    ]
  },
  {
    id: 785,
    name: "tapu-koko",
    types: [
      {
        slot: 2,
        type: { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" }
      },
      {
        slot: 1,
        type: { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }
      }
    ]
  },
  {
    id: 786,
    name: "tapu-lele",
    types: [
      {
        slot: 2,
        type: { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" }
      },
      {
        slot: 1,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      }
    ]
  },
  {
    id: 787,
    name: "tapu-bulu",
    types: [
      {
        slot: 2,
        type: { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" }
      },
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 788,
    name: "tapu-fini",
    types: [
      {
        slot: 2,
        type: { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" }
      },
      {
        slot: 1,
        type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" }
      }
    ]
  },
  {
    id: 789,
    name: "cosmog",
    types: [
      {
        slot: 1,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      }
    ]
  },
  {
    id: 790,
    name: "cosmoem",
    types: [
      {
        slot: 1,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      }
    ]
  },
  {
    id: 791,
    name: "solgaleo",
    types: [
      {
        slot: 2,
        type: { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" }
      },
      {
        slot: 1,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      }
    ]
  },
  {
    id: 792,
    name: "lunala",
    types: [
      {
        slot: 2,
        type: { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" }
      },
      {
        slot: 1,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      }
    ]
  },
  {
    id: 793,
    name: "nihilego",
    types: [
      {
        slot: 2,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
      },
      {
        slot: 1,
        type: { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }
      }
    ]
  },
  {
    id: 794,
    name: "buzzwole",
    types: [
      {
        slot: 2,
        type: { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }
      },
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 795,
    name: "pheromosa",
    types: [
      {
        slot: 2,
        type: { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }
      },
      {
        slot: 1,
        type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" }
      }
    ]
  },
  {
    id: 796,
    name: "xurkitree",
    types: [
      {
        slot: 1,
        type: { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }
      }
    ]
  },
  {
    id: 797,
    name: "celesteela",
    types: [
      {
        slot: 2,
        type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" }
      },
      {
        slot: 1,
        type: { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" }
      }
    ]
  },
  {
    id: 798,
    name: "kartana",
    types: [
      {
        slot: 2,
        type: { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" }
      },
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" }
      }
    ]
  },
  {
    id: 799,
    name: "guzzlord",
    types: [
      {
        slot: 2,
        type: { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" }
      },
      {
        slot: 1,
        type: { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" }
      }
    ]
  },
  {
    id: 800,
    name: "necrozma",
    types: [
      {
        slot: 1,
        type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" }
      }
    ]
  },
  {
    id: 801,
    name: "magearna",
    types: [
      {
        slot: 2,
        type: { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" }
      },
      {
        slot: 1,
        type: { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" }
      }
    ]
  },
  {
    id: 802,
    name: "marshadow",
    types: [
      {
        slot: 2,
        type: { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" }
      },
      {
        slot: 1,
        type: { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" }
      }
    ]
  },
  {
    id: 803,
    name: "poipole",
    types: [
      {
        slot: 1,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
      }
    ]
  },
  {
    id: 804,
    name: "naganadel",
    types: [
      {
        slot: 2,
        type: { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" }
      },
      {
        slot: 1,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" }
      }
    ]
  },
  {
    id: 805,
    name: "stakataka",
    types: [
      {
        slot: 2,
        type: { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" }
      },
      {
        slot: 1,
        type: { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" }
      }
    ]
  },
  {
    id: 806,
    name: "blacephalon",
    types: [
      {
        slot: 2,
        type: { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" }
      },
      {
        slot: 1,
        type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" }
      }
    ]
  },
  {
    id: 807,
    name: "zeraora",
    types: [
      {
        slot: 1,
        type: { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" }
      }
    ]
  }
];

export default localData;
