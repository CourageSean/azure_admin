import React, { useContext, useEffect } from 'react';
import { GlobalState } from '../../../GlobalState';
import EmployeeItem from '../Utils/employeeItem/EmployeeItem';
import Loading from '../Utils/loading/Loading';
import axios from 'axios';

export default function Employees() {
  const state = useContext(GlobalState);
  const [employees] = state.employeesAPI.employees;
  console.log(employees);

  // const refreshToken = async () => {
  //   try {
  //     const token = await axios.get(
  //       'http://localhost:5000/member/refresh_token'
  //     );
  //     console.log(token, 'token');
  //   } catch (error) {
  //     console.log(error.response);
  //   }
  // };

  // useEffect(() => {
  //   refreshToken();
  // }, []);

  return (
    <div className='employees'>
      {employees.map((employee) => {
        return <EmployeeItem key={employee._id} employee={employee} />;
      })}
      {employees.length === 0 && <Loading />}
    </div>
  );
}
