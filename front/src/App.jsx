import { useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav.jsx';
import axios from 'axios';
import { Routes, Route, useLocation } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import  Form  from './components/Form/Form';

const App = () => {
   const API_Key = 'henrym-hx-asandoval';
   const [characters, setCharacters] = useState([]);
   const onSearch = (id) => {

      if (!id && isNaN(id)) alert('Ingrese un ID');
      if (characters.some(chart => chart.id === Number(id))) return alert('El personaje ya existe');

      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         }
      });
   }

   const onClose = (id) => {
      const characterFilter = characters.filter((character) => character.id !== Number(id));
      setCharacters(characterFilter);
   }
   const handleRandomCard = () => {
      axios('https://rickandmortyapi.com/api/character').then(({ data }) => {
         const randomCharacter = data.results[Math.floor(Math.random() * data.results.length)];
         if (randomCharacter) {
            setCharacters((oldChars) => [...oldChars, randomCharacter]);
         }
      });
   }

   return (
      <div className='_App'>
        
       <Nav onSearch={onSearch} onRandomCard={handleRandomCard} />
         <Routes>
            <Route path='/' element={<Form/>} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About/>} />
            <Route path='/detail/:id' element={<Detail/>} />
         </Routes>
      </div>
   )
}

export default App;