import axios from 'axios';
import React, { useEffect, useState } from 'react';

const PokemonCard = ({ url }) => {
    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        axios.get(url)
            .then(res => setPokemon(res.data))
    }, [])


    return (
        <div className='pokecard'>
            <h3>{pokemon.name}</h3>
            <br />
            <img src={pokemon.sprites.other.dream_world.front_default} alt="" />
        </div>
    );
};

export default PokemonCard;