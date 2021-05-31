import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Employees from './employees/Employees';
import Login from './auth/Login';
import Register from './auth/Register';
import EmployeeDetail from './employeeDetail/EmployeeDetail';
import NotFound from './Utils/not_found/NotFound';

export default function Pages() {
  return (
    <Switch>
      <Route path='/' exact component={Employees} />
      <Route path='/login' exact component={Login} />
      <Route path='/register' exact component={Register} />
      <Route path='/employee/:id' exact component={EmployeeDetail} />
      <Route path='*' exact component={NotFound} />
    </Switch>
  );
}
