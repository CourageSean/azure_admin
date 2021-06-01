import React, { useState, useContext } from 'react';
import { GlobalState } from '../../GlobalState';
import Menu from './icon/menu.svg';
import Avatar from './icon/avatar.svg';
import User from './icon/user.svg';
import { Link } from 'react-router-dom';

export default function Header() {
  const value = useContext(GlobalState);
  return (
    <header>
      <div className='menu'>
        <ul>
          <li>
            <img src={User} alt='' width='30' />
          </li>
          <li>
            <img src={Menu} alt='' width='30' />
          </li>
        </ul>
      </div>
      <div className='logo'>
        <h1>
          <Link to='/'> Projekt</Link>
        </h1>
      </div>
      <ul>
        <li>
          <Link to='/'>Member</Link>{' '}
        </li>
        <li>
          <Link to='/login'>Login</Link>{' '}
        </li>
        <li>
          <img src={Avatar} alt='' width={30} />
        </li>
      </ul>
    </header>
  );
}
