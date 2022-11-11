import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link className='ps-3' to="/about">About</Link>
          <Link className='ps-3' to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;
