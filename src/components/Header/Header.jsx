import { Link } from "react-router-dom";
import Logo from '../../img/glass-of-beer.png'
import './Header.scss';

export const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img className='header__logo' src={Logo} alt="logo" />
      </Link>
      <h1 className="header__title">Beer Recipes</h1>
    </header>
  );
};