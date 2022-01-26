export interface Pokemons {
    name: string;
    url: string;
};

interface Art {
    front_shiny: string;
};

interface Damage {
    base_stat: number | string;
}

export interface Pokemon {
    name: string;
    moves: [];
    id: number | string;
    height: number | string;
    sprites: Art;
    stats: Array<Damage>;
};