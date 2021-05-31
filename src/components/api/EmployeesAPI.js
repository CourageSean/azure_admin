import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function EmployeesAPI() {
  const [employees, setEmployees] = useState([]);
  const getEmployees = async () => {
    const res = await axios.get('http://localhost:5000/api/employee');
    setEmployees(res.data.employees);
  };
  useEffect(() => {
    getEmployees();
  }, []);
  return {
    employees: [employees, setEmployees],
  };
}
