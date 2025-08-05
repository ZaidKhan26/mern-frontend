import React, { useEffect, useState } from "react";

const ADMIN_PASSWORD = "zaid123"; // Used for UI login only
const ADMIN_TOKEN = "supersecrettoken123"; // Must match backend `.env`

function Admin() {
  const [applicants, setApplicants] = useState([]);
  const [authenticated, setAuthenticated] = useState(false);
  const [inputPassword, setInputPassword] = useState("");

  const fetchApplicants = () => {
    fetch("https://mern-backend-8asj.onrender.com/api/applicants", {
      headers: {
        Authorization: `Bearer ${ADMIN_TOKEN}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Unauthorized or failed fetch");
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setApplicants(data);
        } else {
          console.error("Expected array but got:", data);
          setApplicants([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching applicants:", error);
        alert("Failed to fetch applicants. Check token or backend.");
        setApplicants([]);
      });
  };

  useEffect(() => {
    if (authenticated) {
      fetchApplicants();
    }
  }, [authenticated]);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this applicant?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`https://mern-backend-8asj.onrender.com/api/applicants/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${ADMIN_TOKEN}`,
        },
      });

      if (res.ok) {
        alert("Applicant deleted successfully.");
        fetchApplicants(); // refresh the list
      } else {
        alert("Failed to delete applicant. Check token or backend.");
      }
    } catch (err) {
      console.error("Error deleting applicant:", err);
    }
  };

  const handleLogin = () => {
    if (inputPassword === ADMIN_PASSWORD) {
      setAuthenticated(true);
    } else {
      alert("Incorrect password");
    }
  };

  if (!authenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Admin Login</h2>
          <input
            type="password"
            className="border px-4 py-2 w-full mb-4"
            placeholder="Enter admin password"
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
          />
          <button
            onClick={handleLogin}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
          >
            Login
          </button>
        </div>
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
                Submitted on: {new Date(applicant.createdAt).toLocaleDateString()}
              </p>
              <button
                onClick={() => handleDelete(applicant._id)}
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Admin;
