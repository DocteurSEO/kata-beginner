const pokemons = [ {name : 'pikachu' , type : 'eletric'}, {name : 'Randoudou', type : 'dodo'}]
const ul = document.querySelector('ul')

for (i of pokemons){
    ul.innerHTML += '<b>'+i.name +'</b><br>' + i.type +'<br><br><br>' 
}
