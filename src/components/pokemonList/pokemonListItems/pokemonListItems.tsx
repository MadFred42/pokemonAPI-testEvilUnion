import { Chip, Grid } from "@mui/material";
import React from "react";
import { Pokemons } from "../../../types/types";

interface PokemonListItemsProps {
    pokemon: Pokemons;
    clickToPickPokemon: (e: React.MouseEvent) => void;
}

export const PokemonListItems = ({ pokemon, clickToPickPokemon }: PokemonListItemsProps) => {

    return (
        <Grid id={pokemon.name} item sx={{ margin: '10px 6px 0 0', padding: 0 }}>
            <div id={pokemon.name}>
                <Chip 
                    id={pokemon.name}
                    label={pokemon.name}
                    onClick={clickToPickPokemon}
                    sx={{
                        background: '#1986EC', 
                        borderRadius: '30px', 
                        color: "white", 
                        fontFamily: '"Raleway", sans-serif',
                        fontSize: '20px', 
                        fontWeight: '500', 
                        height: '60px', 
                        lineHeight: '20px',
                        padding: '0 8.2px'
                    }} />
            </div>
        </Grid>
    );
};