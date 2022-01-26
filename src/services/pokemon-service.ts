import $api from "../http";

export const getPokemons = async () => {
    const response = await $api.get('/pokemon?limit=10');

    return response.data.results;
}

export const getChosenPokemon = async (pokemonName: string) => {
    const response = await $api.get(`/pokemon/${pokemonName}`)

    return response.data;
};