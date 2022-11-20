import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PokemonCard from './PokemonCard';

const Pokemons = () => {

    const userName = useSelector(state => state.username);
    const [pokemons, setPokemons] = useState([]);
    const [page, setPage] = useState(1)
    const pokemonsPerPage = 16
    const lastIndex = page * pokemonsPerPage
    const totalPages = Math.ceil(pokemons.length / pokemonsPerPage)

    const firstIndex = lastIndex - pokemonsPerPage

    const pokemonPaginated = pokemons.slice(firstIndex, lastIndex)

    const pages = []

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154')
            .then(res => setPokemons(res.data.results))
    }, [])

    for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
    }
    return (
        <div>
            <h1>Pokemons</h1>
            <p>Welcome {userName}!</p>
            <ul className='pokemons'>
                {pokemonPaginated.map(pokemon => (
                    <li key={pokemon.name}>
                        <PokemonCard url={pokemon.url} />
                    </li>
                    // <li key={pokemon.name}>{pokemon.url}</li>
                ))}
            </ul>
            <button
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
            >adios</button>
            <div>
                {pages.map((number) => (
                    <button key={number} onClick={() => setPage(number)}>{number}</button>
                ))}
            </div>
            <button
                onClick={() => setPage(page + 1)}
                disabled={page === totalPages}
            >hola</button>
        </div>
    );
};

export default Pokemons;