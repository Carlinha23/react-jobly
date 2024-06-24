import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import JoblyApi from "./JoblyApi";

function CompanyDetails() {
  const { handle } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(() => {
    async function fetchCompany() {
      try {
        const company = await JoblyApi.getCompany(handle);
        setCompany(company);
      } catch (error) {
        console.error("Error fetching company details:", error);
      }
    }
    fetchCompany();
  }, [handle]);

  if (!company) return <div>Loading...</div>;

  return (
    <div>
      <h1>{company.name}</h1>
      <p>{company.description}</p>
      <ul>
        {company.jobs.map(job => (
          <li key={job.id}>{job.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default CompanyDetails;
