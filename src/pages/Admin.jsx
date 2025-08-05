import React, { useEffect, useState } from "react";

function Admin() {
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    // Replace the URL below with your deployed backend URL
    fetch("https://your-backend.onrender.com/applicants")
      .then((res) => res.json())
      .then((data) => {
        setApplicants(data);
      })
      .catch((error) => {
        console.error("Error fetching applicants:", error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Admin View</h1>
      {applicants.length === 0 ? (
        <p className="text-gray-600 text-center">No applicants yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applicants.map((applicant, index) => (
            <div key={index} className="border p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold">{applicant.name}</h2>
              <p>Email: {applicant.email}</p>
              <p>College: {applicant.college}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Admin;
