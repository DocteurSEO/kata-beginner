
function fetchKantoPokemon(){
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=20`)
    .then(response => response.json())
    .then(allpokemon =>displayPokemon(allpokemon.results))
  }
  fetchKantoPokemon()
const ul = document.querySelector('ul')

function displayPokemon (pokemons){

    for (i of pokemons){
        console.log(i)
        ul.innerHTML += ` <br> <b>${i.name}</b> <br>` 
    }

}

