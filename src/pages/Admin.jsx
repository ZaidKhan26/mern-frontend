import React, { useEffect, useState } from "react";

function Admin() {
  const [applicants, setApplicants] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      fetch("https://mern-backend-8asj.onrender.com/api/applicants")
        .then((res) => res.json())
        .then((data) => setApplicants(data))
        .catch((error) => console.error("Error fetching applicants:", error));
    }
  }, [isAuthenticated]);

  const handleLogin = () => {
    if (password === "Zaid123") {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password!");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
        <input
          type="password"
          placeholder="Enter admin password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded mb-4"
        />
        <button
          onClick={handleLogin}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Login
        </button>
      </div>
    );
  }

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
              <p>Phone: {applicant.phone}</p>
              <p>Skills: {applicant.skills}</p>
              <p>Motivation: {applicant.motivation}</p>
              <p className="text-gray-500 text-sm">
                Submitted on:{" "}
                {new Date(applicant.createdAt).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Admin;
