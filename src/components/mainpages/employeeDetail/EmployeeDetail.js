import React, { useContext, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import EmployeeItem from '../Utils/employeeItem/EmployeeItem';
import { GlobalState } from '../../../GlobalState';

export default function EmployeeDetail() {
  const params = useParams();
  const state = useContext(GlobalState);
  const [employees] = state.employeesAPI.employees;
  const [employeeDetail, setEmployeeDetail] = useState(null);

  useEffect(() => {
    if (params.id) {
      employees.forEach((employee) => {
        if (employee._id === params.id) setEmployeeDetail(employee);
      });
    }
  }, [params.id, employees]);

  return (
    <>
      <div className='detail'>
        {employeeDetail && (
          <div className='box-detail'>
            <h2>{employeeDetail.name}</h2>
          </div>
        )}
      </div>
      <div>
        {employeeDetail && employeeDetail.role === 'admin' && <h1>Admin</h1>}
        {employeeDetail &&
          employeeDetail.role === 'admin' &&
          employees.map((employee) => {
            return employee.role === 'worker' ? (
              <EmployeeItem key={employee._id} employee={employee} />
            ) : null;
          })}
      </div>
    </>
  );
}
