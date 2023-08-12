import styles from './Nav.module.css';
import SearchBar from '../SearchBar/SearchBar.jsx';
import { Link } from 'react-router-dom';
import icon from '../../assets/icon.png';
import logotipo from '../../assets/logo2.gif';
const Nav = ({ onSearch, onRandomCard }) => {
   return (
      <nav className={styles.nav}>
         <div className={styles.containerNav}>
            <Link to="/" ><img className={styles.logo} src={icon} alt=""/></Link>
            <Link to="/home" ><img className={styles.logo2} src={logotipo} alt=""/></Link>
            <Link to="/home" className={styles.btn}>Home</Link>
            <Link to="/About" className={styles.btn}>About</Link>
            <div className={styles.navBar}>
            <SearchBar onSearch={onSearch} onRandomCard={onRandomCard} />
            </div>
         </div>
      </nav>
   );
}

export default Nav;

//<Link to="/home" ><img className={styles.logo} src={logo} alt=""/></Link>