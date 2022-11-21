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
                    <b>{pokemon.name}</b>
                    <b>{pokemon.id}</b>
                </div>
            </div>
            <div>
                <div>Types</div>
                <div>
                    <ul>
                        {
                            pokemon.types?.map(type => (
                                <div key={type.slot}>{type.type.name}</div>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div>
                <div>Abilities</div>
                <div>
                    <ul>
                        {
                            pokemon.abilities?.map(ability => (
                                <div key={ability.slot}>{ability.ability?.name}</div>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div>
                <div>Stats Base</div>
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
            <div>
                <div>Movements</div>
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