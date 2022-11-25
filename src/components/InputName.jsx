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
        <div className='home-container'>
            <div className='home-image-container'>
                <h1> <b> Hello trainer! </b> </h1>
                <img src="https://www.seekpng.com/png/full/201-2011786_red-by-xous-54-red-pokemon-trainer-png.png" alt="" />
            </div>
            <p>Give me your name to start</p>
            <div className='home-input-container'>
                <input className='input-home' type="text" onChange={e => setUsername(e.target.value)} value={username} />
                <button className='input-btn' onClick={enterName}>Enter</button>
            </div>
        </div>
    );
};

export default InputName;