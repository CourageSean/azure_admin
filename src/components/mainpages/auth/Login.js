import React, { useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  axios.defaults.withCredentials = true;
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
      const res = await axios({
        method: 'post',
        url: 'http://localhost:5000/member/login',
        data: { ...member },
        withCredentials: 'false',
        headers: {
          Authorization: 'Bearer ', //the token is a variable which holds the token
        },
      });
      localStorage.setItem('firstLogin', true);
      console.log(res);
      document.cookie = `refreshtoken=${res.data.refreshToken};path=http://localhost:5000/member/refresh_token"`;
      window.location.href = '/';
      console.log(document.cookie, 'cookie?');
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
        />
        <div className='row'>
          <button type='submit'>Login</button>
        </div>
      </form>
    </div>
  );
}
