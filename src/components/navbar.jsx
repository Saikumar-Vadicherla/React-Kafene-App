import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
    alert('Logged Out successfully!');
  };

  return (
    <div className='navbar'>
      <Link className='logo'>
        <img className='image' src='https://edu-web-fundamentals.web.app/static/media/logo.58169365.png' alt="logo" />
        <h1 className='kafene'>Kafene</h1>
      </Link>
      <ul className='Links'>
        <li><Link className="link" to={isLoggedIn ? '/Orders' : '/'}>Orders</Link></li>
        <li><Link className="link" to={isLoggedIn ? '/Products' : '/'}>Products</Link></li>
        <li><Link className="link" to={isLoggedIn ? '/Users' : '/'}>Users</Link></li>
      </ul>
      {isLoggedIn && (
        <button
          id="logout-btn"
          className="LogoutBtn"
          onClick={handleLogout}
        >
          LogOut
        </button>
      )}
    </div>
  );
};
