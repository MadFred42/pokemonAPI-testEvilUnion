import { CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { useFirstCapitalLetter } from "../../../hooks/useFirstCapitalLetter";
import { PokemonCardProps } from "../pokemonCard";

const typographyStyle = {
    fontFamily: '"Raleway", sans-serif',
    fontSize: '17px',
    fontWeight: '500',
    letterSpacing: '0px',
    lineHeight: '25px',
    marginBottom: '1px',
    padding: 0,
};

export const PokemonCardItems = ({ pokemon }: PokemonCardProps) => {
    const name = useFirstCapitalLetter(pokemon.name);
    
    if (Object.keys(pokemon).length === 0) {
        return <></>;
    }
    
    return (
        <>
            <CardHeader 
                sx={{
                    color: '#A0A0A0', 
                    height: '48px', 
                    margin: '44px 0 0 44px', 
                    padding: 0, 
                    width: '396px'
                }}
                title={`${name}`}
                titleTypographyProps={{ 
                    fontFamily: '"Raleway", sans-serif',
                    fontSize: '48px',
                    fontWeight: '700',
                    lineHeight: '100%',
                }} />
            <CardMedia 
                alt='badge'
                component='img'
                image={`${pokemon.sprites.front_shiny}`} 
                sx={{
                    height: '200px',
                    margin: '44px 0 0 44px',
                    width: '397px',
                }} />
            <CardContent
                sx={{
                    alignSelf: 'stretch',
                    color: '#A0A0A0',
                    height: '104px',
                    margin: '45px 0 16px 44px',
                    padding: 0,
                }}
            >
                <Typography sx={typographyStyle}>Снялся в {pokemon.moves.length} сериях</Typography>
                <Typography sx={typographyStyle}>Id: {pokemon.id}</Typography>
                <Typography sx={typographyStyle}>height: {pokemon.height}</Typography>
                <Typography sx={typographyStyle}>attack: {pokemon.stats[1].base_stat}</Typography>
            </CardContent>
        </>
    );
};