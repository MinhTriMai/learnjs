let pokemonList = [
    {name: 'Bulbasaur', height: '0.7', types: ['grass', 'poison']},
    {name: 'Ivysaur', height: '1', types: ['grass', 'poison']},
    {name: 'Squirtle', height: '0.5', types: ['water']}
];
// for (let i = 0; i < pokemonList.length; i++) {
//     document.write(pokemonList[i].name + pokemonList[i].height);
    
// }

//Listing array of pokemon
for (let i=0; i<pokemonList.length; i++) {

    let pokemonName = pokemonList[i].name;
    let pokemonHeight = pokemonList[i].height;

    let note;
    if (pokemonHeight >= 1) {
        note = 'Wow, that’s big!'
    }
    
    let result = `<br>${pokemonName} (Height: ${pokemonHeight}) ${note || ''}<br>` ;
    
    document.write(result);
}