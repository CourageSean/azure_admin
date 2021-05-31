import React, { useContext } from 'react';
import { GlobalState } from '../../../GlobalState';
import EmployeeItem from '../Utils/employeeItem/EmployeeItem';
import Loading from '../Utils/loading/Loading';

export default function Employees() {
  const state = useContext(GlobalState);
  const [employees] = state.employeesAPI.employees;
  console.log(employees);
  return (
    <div className='employees'>
      {employees.map((employee) => {
        return <EmployeeItem key={employee._id} employee={employee} />;
      })}
      {employees.length === 0 && <Loading />}
    </div>
  );
}
