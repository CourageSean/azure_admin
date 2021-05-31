import React, { createContext, useState } from 'react';
import EmployeesAPI from './components/api/EmployeesAPI';

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const [token, setToken] = useState(false);

  EmployeesAPI();
  const state = {
    token: [token, setToken],
    employeesAPI: EmployeesAPI(),
  };

  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};
