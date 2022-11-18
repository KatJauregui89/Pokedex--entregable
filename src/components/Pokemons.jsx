import React from 'react';
import { useSelector } from 'react-redux';

const Pokemons = () => {

    const userName = useSelector(state => state.username)

    return (
        <div>
            <h1>Pokemons</h1>
            <p>Welcome {userName}!</p>
        </div>
    );
};

export default Pokemons;