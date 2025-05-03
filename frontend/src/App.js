import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import {PokemonData} from './components/PokemonData';
import Color from './components/Color';
import Search from './components/Search';
import Type from './components/Type';
import Generation from './components/Generation';
import Layout from './components/Layout';


function App() {
  useEffect(() => {
    document.title = 'PokeInfo';
  }, []);

  return (

    <>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="pokemon" element={<PokemonData />} />
      <Route path="color" element={<Color />} />
      <Route path="search" element={<Search />} />
      <Route path="type" element={<Type />} />
      <Route path="generation" element={<Generation />} />
      <Route path="/pokemon-list" element={<PokemonData />} />
      </Route>
    </Routes>
    </>
  )
}


export default App;
