import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewApplicants = () => {
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/applicants') // or your deployed backend
      .then(res => setApplicants(res.data))
      .catch(err => console.error('Error fetching applicants:', err));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">All Applicants</h2>
      {applicants.length === 0 ? (
        <p>No applicants found.</p>
      ) : (
        <ul className="space-y-4">
          {applicants.map(applicant => (
            <li key={applicant._id} className="border p-4 rounded shadow">
              <p><strong>Name:</strong> {applicant.name}</p>
              <p><strong>Email:</strong> {applicant.email}</p>
              <p><strong>Phone:</strong> {applicant.phone}</p>
              <p><strong>Skills:</strong> {applicant.skills}</p>
              <p><strong>Motivation:</strong> {applicant.motivation}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ViewApplicants;
