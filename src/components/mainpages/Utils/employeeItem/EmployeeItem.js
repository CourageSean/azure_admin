import React from 'react';
import { Link } from 'react-router-dom';

export default function EmployeeItem({ employee }) {
  return (
    <div className='employee_card'>
      <Link to={`/employee/${employee._id}`}>
        <div className='employee_box'>
          <h2>{employee.name} </h2>
          <p>{employee.email} </p>
        </div>
      </Link>
    </div>
  );
}
