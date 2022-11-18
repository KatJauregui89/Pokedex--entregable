import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeName } from '../store/slices/username.slice';

const InputName = () => {
    const [username, setUsername] = useState('')

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const enterName = () => {
        dispatch(changeName(username))
        navigate('/pokemons')
    }

    return (
        <div>
            <h1>Input Name</h1>
            <input type="text" onChange={e => setUsername(e.target.value)} value={username} />
            <button onClick={enterName}>Enter</button>
        </div>
    );
};

export default InputName;