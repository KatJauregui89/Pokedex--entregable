import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PokemonCard = ({ url }) => {
    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        axios.get(url)
            .then(res => setPokemon(res.data))
    }, [])

    console.log(pokemon);
    return (
        <Link to={`/pokemons/${pokemon.id}`} className='pokecard'>
            <h3>{pokemon.name}</h3>
            <br />
            <img src={pokemon.sprites?.other.dream_world.front_default} alt="" />
        </Link>
    );
};

export default PokemonCard;