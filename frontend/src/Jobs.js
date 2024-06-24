import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import JoblyApi from "./JoblyApi";

function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function fetchJobs() {
      try {
        const jobs = await JoblyApi.getJobs();
        setJobs(jobs);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    }
    fetchJobs();
  }, []);

  return (
    <div>
      <h1>Jobs</h1>
      <ul>
        {jobs.map(job => (
          <li key={job.id}>
            <Link to={`/jobs/${job.id}`}>{job.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Jobs;
