import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import JoblyApi from "./JoblyApi";

function JobDetails() {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    async function fetchJob() {
      try {
        const job = await JoblyApi.getJob(id);
        setJob(job);
      } catch (error) {
        console.error("Error fetching job details:", error);
      }
    }
    fetchJob();
  }, [id]);

  if (!job) return <div>Loading...</div>;

  return (
    <div>
      <h1>{job.title}</h1>
      <p>{job.salary ? `Salary: $${job.salary}` : "Salary: Not provided"}</p>
      <p>{job.equity ? `Equity: ${job.equity}` : "Equity: Not provided"}</p>
      <div>
        <h2>Company Details</h2>
        <p>Name: {job.company.name}</p>
        <p>Description: {job.company.description}</p>
        <p>Employees: {job.company.numEmployees || "Not provided"}</p>
        {job.company.logoUrl && <img src={job.company.logoUrl} alt="Company Logo" />}
      </div>
    </div>
  );
}

export default JobDetails;
