import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PokemonDetail = () => {
    const { id } = useParams()
    const [pokemon, setPokemon] = useState({})
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(res => setPokemon(res.data))
    }, [])

    return (
        <div className='pokemon-full-description'>
            <div>
                <img src={pokemon.sprites?.other.dream_world.front_default} alt="" />
                <div>
                    <b>{pokemon.weight}</b>
                    <b>{pokemon.height}</b>
                </div>
                <div>
                    <b>{pokemon.name}</b>
                    <b>{pokemon.id}</b>
                </div>
            </div>
        </div>
    );
};

export default PokemonDetail;