import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PokemonCard from './PokemonCard';

const Pokemons = () => {

    const userName = useSelector(state => state.username);

    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/')
            // Al hacer la paginaciòn traer todos los pokemones, offset 0 limit 1154
            .then(res => setPokemons(res.data.results))
    }, [])

    console.log(pokemons);
    return (
        <div>
            <h1>Pokemons</h1>
            <p>Welcome {userName}!</p>
            <ul>
                {pokemons.map(pokemon => (
                    <PokemonCard url={pokemon.url} />
                    // <li key={pokemon.name}>{pokemon.url}</li>
                ))}
            </ul>
        </div>
    );
};

export default Pokemons;