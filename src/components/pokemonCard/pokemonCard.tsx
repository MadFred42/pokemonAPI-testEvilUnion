import { Card } from "@mui/material";
import { Pokemon } from "../../types/types";
import PokemonCardItems from "./pokemonCardItems";

export interface PokemonCardProps {
    pokemon: Pokemon;
}

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
    return (
        <Card sx={{
            background: '#000000',
            borderRadius: 0,
            height: '500px',
            width: '484px',
        }}>
            <PokemonCardItems pokemon={pokemon} />
        </Card>
    );
};