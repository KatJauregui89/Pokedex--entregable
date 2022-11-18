import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { HashRouter, Link, Route, Routes } from 'react-router-dom'
import Pokemons from './components/Pokemons'
import InputName from './components/InputName'
import PokemonDetail from './components/PokemonDetail'

function App() {


  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/' element={<InputName />} />
          <Route path='/pokemons' element={<Pokemons />} />
          <Route path='/pokemons/:id' element={<PokemonDetail />} />
        </Routes>

      </HashRouter>


    </div>
  )
}

export default App
