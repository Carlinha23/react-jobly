import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Companies() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    async function fetchCompanies() {
      const result = await axios.get('/companies');
      setCompanies(result.data.companies);
    }
    fetchCompanies();
  }, []);

  return (
    <div>
      <h1>Companies</h1>
      <ul>
        {companies.map(company => (
          <li key={company.handle}>
            <Link to={`/companies/${company.handle}`}>{company.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Companies;
