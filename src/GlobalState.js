import React, { createContext, useState, useEffect } from 'react';
import EmployeesAPI from './components/api/EmployeesAPI';
import axios from 'axios';

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const [token, setToken] = useState(false);

  const refreshToken = async () => {
    try {
      const res = await axios.get(
        'http://localhost:5000/member/refresh_token',
        {
          withCredentials: true,
          credentials: 'include',
        }
      );
      setToken(res.data.accesstoken);
      console.log(token, 'token');
      console.log(res.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    const firstLogin = localStorage.getItem('firstLogin');
    if (firstLogin) refreshToken();
  }, []);

  EmployeesAPI();
  const state = {
    token: [token, setToken],
    employeesAPI: EmployeesAPI(),
  };

  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};
