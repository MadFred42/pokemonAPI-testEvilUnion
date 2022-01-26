import React, { useEffect, useState } from "react";
import PokemonListItems from "./pokemonListItems";
import * as pokemonService from '../../services/pokemon-service';
import { Box, Grid } from "@mui/material";
import { Pokemon, Pokemons } from "../../types/types";
import PokemonCard from "../pokemonCard";

export const PokemonList = () => {
    const [pokemons, setPokemons] = useState([]);
    const [chosenPokemon, setChosenPokemon]: Pokemon | any = useState({});

    useEffect(() => {
      pokemonService.getPokemons()
        .then(pokemons => setPokemons(pokemons));
    }, []);
  
    const clickToPickPokemon = async (event: React.MouseEvent) => {
        const target = event.target as HTMLElement;
        if (!target.id) {
            const pokemon = await pokemonService.getChosenPokemon(target.parentElement!.id);
            setChosenPokemon(pokemon);
        } else {
            const pokemon = await pokemonService.getChosenPokemon(target.id);
            setChosenPokemon(pokemon);
        }
    }

    return (
        <Box sx={{
            display: 'flex', 
            margin: '0', 
            flexDirection: 'row', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            width: '980px'
        }}>
            <Grid 
                container
                sx={{ height: '100%', width: '484px' }}>
                { pokemons.map((pokemon: Pokemons) => (
                    <PokemonListItems key={pokemon.name} clickToPickPokemon={clickToPickPokemon} pokemon={pokemon} />
                    )) }
            </Grid>
            <PokemonCard pokemon={chosenPokemon} />
        </Box>
    );
};