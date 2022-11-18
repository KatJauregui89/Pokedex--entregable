import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PokemonCard = ({ url }) => {
    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        axios.get(url)
            .then(res => setPokemon(res.data))
    }, [])
    return (
        <Link to={`/pokemons/${pokemon.id}`} className='pokecard'>
            <h3>{pokemon.name}</h3>
            <div><b>Types: </b>{pokemon.types?.map((type)=> type.type.name + ' ')}</div>
            <div><b>hp: </b>{pokemon.stats?.[0].base_stat}</div>
            <div><b>attack: </b>{pokemon.stats?.[1].base_stat}</div>
            <div><b>defense: </b>{pokemon.stats?.[2].base_stat}</div>
            <div><b>speed: </b>{pokemon.stats?.[5].base_stat}</div>
            <img src={pokemon.sprites?.other.dream_world.front_default} alt="" />
        </Link>
    );
};

export default PokemonCard;