import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function fetchJobs() {
      const result = await axios.get('/jobs');
      setJobs(result.data.jobs);
    }
    fetchJobs();
  }, []);

  return (
    <div>
      <h1>Jobs</h1>
      <ul>
        {jobs.map(job => (
          <li key={job.id}>{job.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Jobs;
