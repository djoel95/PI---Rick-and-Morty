import { useState } from 'react';
import style from './SearchBar.module.css';

export default function SearchBar(props) {
  const { onSearch, onRandomCard } = props;
  const [id, setId] = useState('');

  const handleChange = (event) => {
    setId(event.target.value);
  }

  const handleRandomCard = () => {
    onRandomCard();
  }

  return (
    <div className={style.searchBar}>
      <input
        type="search"
        onChange={handleChange}
        value={id}
        placeholder='Buscar personaje'
      />
      <button onClick={() => onSearch(id)}>Agregar</button>
      <button onClick={handleRandomCard}>Random</button>
    </div>
  );
}