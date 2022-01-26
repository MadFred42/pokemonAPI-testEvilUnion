import { Container } from "@mui/material";
import Header from "../components/header";
import PokemonList from "../components/pokemonList";

export const MainPage = () => {
    
    return (
        <Container
          sx={{
            background: '#131313',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '0 auto',
          }}
        >
            <Header />
            <PokemonList />
        </Container>
    )
};