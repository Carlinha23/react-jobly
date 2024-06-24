import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import JoblyApi from "./JoblyApi";


function Companies() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    async function fetchCompanies() {
      try {
        const companies = await JoblyApi.getCompanies();
        setCompanies(companies);
      } catch (error) {
        console.error("Error fetching companies:", error);
      }
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
