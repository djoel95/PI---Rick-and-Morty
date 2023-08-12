import style from '../Card/Card.module.css';
import { Link } from 'react-router-dom';

const Card =  ({ name, status, species, gender, image, onClose, id }) => { 
  return (
    <div className={style.cardStyle}>
      <button className={style.btnCard} onClick = {() => onClose(id)} >X</button>
      <Link to = {`/detail/${id}`}><h2>
      <img className={style.cardImage} src={image} alt='imagenCard' />
        </h2></Link>
      <h2>{name}</h2>
      
    </div>
  );
}

export default Card;