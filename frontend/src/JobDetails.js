import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import JoblyApi from "./JoblyApi";
import { UserContext } from './UserContext';

function JobDetails() {
  const { id } = useParams();
  const { currentUser } = useContext(UserContext);
  const [job, setJob] = useState(null);
  const [hasApplied, setHasApplied] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchJob() {
      try {
        const job = await JoblyApi.getJob(id);
        setJob(job);
        if (currentUser && currentUser.applications.includes(job.id)) {
          setHasApplied(true);
        }
      } catch (error) {
        console.error("Error fetching job details:", error);
      }
    }
    fetchJob();
  }, [id, currentUser]);

  async function handleApply() {
    setError(null);
    if (!currentUser) {
      setError("You have to Signup before applying for jobs!");
      return;
    }
    try {
      await JoblyApi.applyToJob(currentUser.username, job.id);
      setHasApplied(true);
    } catch (err) {
      console.error("Error applying to job:", err);
      setError(err);
    }
  }

  if (!job) return <div>Loading...</div>;

  return (
    <div className="job-details container">
      <h1>{job.title}</h1>
      <p>{job.salary ? `Salary: $${job.salary}` : "Salary: Not provided"}</p>
      <p>{job.equity ? `Equity: ${job.equity}` : "Equity: Not provided"}</p>
      <div className="company-details">
        <h2>Company Details</h2>
        <p>Name: {job.company.name}</p>
        <p>Description: {job.company.description}</p>
        <p>Employees: {job.company.numEmployees || "Not provided"}</p>
        {job.company.logoUrl && <img src={job.company.logoUrl} alt="Company Logo" />}
      </div>
      {hasApplied ? (
        <button disabled>Applied</button>
      ) : (
        <button onClick={handleApply}>Apply</button>
      )}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default JobDetails;
