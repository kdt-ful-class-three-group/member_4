const pokemon = require("pokemon");

let pokemonLength = pokemon.all((language = "ko"));
pokemon.all();
//=> ['Bulbasaur', …]
console.log(pokemon.all((language = "ko"))[200]);
pokemonLength.forEach((element) => {
    console.log(element);
});

// pokemon.random();
// //=> 'Snorlax'

// pokemon.getName(147);
// //=> 'Dratini'

// pokemon.getId("Dratini");
// //=> 147
