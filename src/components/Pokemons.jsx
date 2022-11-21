import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PokemonCard from './PokemonCard';

const Pokemons = () => {

    const userName = useSelector(state => state.username);
    const [pokemons, setPokemons] = useState([]);
    const [page, setPage] = useState(1)
    const [filter, setFilter] = useState('')

    //pagination
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
        <div className='pokedex-container'>
            <h1>Pokedex</h1>
            <p>Welcome {userName}!, here you can find your favorite pokemon</p>

            <div className='pokedex-forms'>
                <div className='check-container'>
                    <label htmlFor="check-box" className='lbl-switch' id='prueba'></label>
                    <input type="checkbox" id='check-box'/>
                </div>

                <section>
                    
                    <select id='types' onChange={(e)=>{setFilter(e.target.value)}}>
                        <option value="">All pokemons</option>
                        <option value="Normal" >Normal</option>
                        <option value="fighting" >fighting</option>
                        <option value="flying" >flying</option>
                        <option value="poison" >poison</option>
                        <option value="ground" >ground</option>
                        <option value="rock" >rock</option>
                        <option value="bug" >bug</option>
                        <option value="ghost" >ghost</option>
                        <option value="steel" >steel</option>
                        <option value="fire" >fire</option>
                        <option value="water" >water</option>
                        <option value="grass" >grass</option>
                        <option value="electric" >electric</option>
                        <option value="psychic" >psychic</option>
                        <option value="ice" >ice</option>
                        <option value="dragon" >dragon</option>
                        <option value="dark" >dark</option>
                        <option value="fairy" >fairy</option>
                        <option value="unknown" >unknown</option>
                        <option value="shadow" >shadow</option>

                    </select>
                </section>
            </div>


            <ul className='pokemons'>
                {pokemonPaginated.map(pokemon => (
                    <li key={pokemon.name}>
                        <PokemonCard url={pokemon.url}/>
                    </li>
                    // <li key={pokemon.name}>{pokemon.url}</li>
                ))}
            </ul>
            <button
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
            >prev</button>
            <div>
                {pages.map((number) => (
                    <button key={number} onClick={() => setPage(number)}>{number}</button>
                ))}
            </div>
            <button
                onClick={() => setPage(page + 1)}
                disabled={page === totalPages}
            >next</button>
        </div>
    );
};

export default Pokemons;