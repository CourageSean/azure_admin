import React, { useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const [member, setMember] = useState({
    email: '',
    password: '',
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setMember({ ...member, [name]: value });
  };
  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(member);
      await axios.post('http://localhost:5000/member/login', { ...member });
      localStorage.setItem('firstLogin', true);
      window.location.href = '/';
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  return (
    <div className='login-page'>
      <form onSubmit={loginSubmit}>
        <h2>Login</h2>
        <input
          type='email'
          name='email'
          required
          placeholder='Email'
          value={member.email}
          onChange={onChangeInput}
        />
        <input
          type='password'
          name='password'
          required
          placeholder='Password'
          value={member.password}
          onChange={onChangeInput}
          required
          autoComplete='on'
        />
        <div className='row'>
          <button type='submit'>Login</button>
        </div>
      </form>
    </div>
  );
}
