import React from 'react';
import AuthService from '../../utils/auth';
import { Link } from 'react-router-dom';

function Nav() {
  function showNav() {
    if (AuthService.loggedIn()) {
      return (
        <ul className='flex-row'>
          <li className='mx-1'>
            <Link to="/profile">
              My Profile
            </Link>
          </li>
          <li className='mx-1'>
            <a href='/' onClick={() => AuthService.logout()}>
              Logout
            </a>  
          </li> 
        </ul>
      );
    } else {
      return (
        <ul className='flex-row'>
          <li className='mx-2'>
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className='mx-2'>
            <Link to="/login">
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