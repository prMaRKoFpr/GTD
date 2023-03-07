import './Header.scss';
import Profile from '../profile/Profile';
import logo from './data/logo.svg'

const Header = () => {
  return (
    <div className="Header">
      <img src={logo} alt="LOGO" />
      <Profile />
    </div>
  );
}

export default Header;
