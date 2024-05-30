export async function getPokemons(){
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=00&limit=10')
    const data = await res.json()
    return data.results
}

export async function PokemonsInfo(url){
    const res = await fetch(url)
    const data = await res.json()
    return data
}