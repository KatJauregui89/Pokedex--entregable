import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const PokemonDetail = () => {
    const { id } = useParams()
    const [pokemon, setPokemon] = useState({})
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(res => setPokemon(res.data))
    }, [])

    return (
        <div className='pokemon-details'>

            <div className='header'>
                <img
                    src="https://logos-marcas.com/wp-content/uploads/2020/05/Pokemon-Logo.png"
                    alt=""
                    className='pokemon-image'
                />
            </div>
            <div className='pokemon-full-description'>
                <div className='first-grid'>
                    <img src={pokemon.sprites?.other.dream_world.front_default} alt="" className='main-picture' />
                    <div className='W-and-H'>
                        <div>
                            <b>{pokemon.weight}</b><br />
                            <span>weight</span>
                        </div>
                        <div>
                            <b>{pokemon.height}</b><br />
                            <span>height</span>
                        </div>
                    </div>
                    <div className='Name-and-id'>
                        <h3 className='text-shadow title-size'>{pokemon.name}</h3>
                        <b>{pokemon.id}</b>
                    </div>
                </div>
                <div className='second-grid'>
                    <h3 className='text-shadow'>Types</h3>
                    <div>
                        <ul className='types-full-description'>
                            {
                                pokemon.types?.map(type => (
                                    <div className='types-box' key={type.slot}>{type.type.name}</div>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className='third-grid'>
                    <h3 className='text-shadow'>Abilities</h3>
                    <div>
                        <ul className='abilities-full-description'>
                            {
                                pokemon.abilities?.map(ability => (
                                    <div className='ability-box' key={ability.slot}>{ability.ability?.name}</div>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className='fourth-grid'>
                    <h3 className='text-shadow'>Stats Base</h3>
                    <div className='main-stats-container'>
                        {
                            pokemon.stats?.map(stat => (
                                <div key={stat.stat.name} className='stats-bars'>
                                    <b>{stat.stat.name}</b>
                                    <div className='bar-container'>
                                        <div className="progress-bars" style={{ width: `${stat.base_stat / 1.5}%` }}>
                                            {stat.base_stat}/150</div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
                <div className='fifth-grid'>
                    <h3 className='text-shadow'>Movements</h3>
                    <div>
                        {
                            pokemon.moves?.map(move => (
                                <div key={move.move.name} className='move'>
                                    {move.move.name}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PokemonDetail;