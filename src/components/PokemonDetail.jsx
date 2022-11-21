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
            <div className='first-grid'>
                <img src={pokemon.sprites?.other.dream_world.front_default} alt="" className='main-picture' />
                <div className='W-and-H'>
                    <b>{pokemon.weight}</b>
                    <b>{pokemon.height}</b>
                </div>
                <div className='Name-and-id'>
                    <h3>{pokemon.name}</h3>
                    <b>{pokemon.id}</b>
                </div>
            </div>
            <div className='second-grid'>
                <h3>Types</h3>
                <div>
                    <ul className='types-full-description'>
                        {
                            pokemon.types?.map(type => (
                                <div key={type.slot}>{type.type.name}</div>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className='third-grid'>
                <h3>Abilities</h3>
                <div>
                    <ul className='abilities-full-description'>
                        {
                            pokemon.abilities?.map(ability => (
                                <div key={ability.slot}>{ability.ability?.name}</div>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className='fourth-grid'>
                <h3>Stats Base</h3>
                <div>
                    <ul>
                        {
                            pokemon.stats?.map(stat => (
                                <div key={stat.stat.name}>{stat.stat.name}{' '}{stat.base_stat}</div>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className='fifth-grid'>
                <h3>Movements</h3>
                <div>
                    <ul>
                        {
                            pokemon.moves?.map(move=>(
                                <div key={move.move.name}>{move.move.name}</div>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PokemonDetail;