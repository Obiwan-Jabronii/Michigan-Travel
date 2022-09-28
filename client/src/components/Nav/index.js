import React from 'react';
import AuthService from '../../utils/auth';
import { Link } from 'react-router-dom';

function Nav() {
  function showNav() {
    if (AuthService.loggedIn()) {
      return (
        <ul className='flex-row'>
          <li className='mx-3'>
            <Link to="/profile" style={{ fontSize: '25px'}}>
              My Profile
            </Link>
          </li>
          <li className='mx-3' >
            <a href='/' onClick={() => AuthService.logout()} style={{ fontSize: '25px'}}>
              Logout
            </a>  
          </li> 
        </ul>
      );
    } else {
      return (
        <ul className='flex-row'>
          <li className='mx-3'>
            <Link to="/signup" style={{ fontSize: '25px'}}>
              Signup
            </Link>
          </li>
          <li className='mx-3'>
            <Link to="/login" style={{ fontSize: '25px'}}>
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className='flex-row mx-2'>
      <h1>
        <Link to="/">
          The Michigan Traveler
        </Link>
      </h1>

      <nav>
        {showNav()}
      </nav>
    </header>
  );
}

export default Nav;