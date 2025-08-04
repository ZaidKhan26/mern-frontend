import { useEffect, useState } from "react";
import axios from "axios";

function Applicants() {
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    axios.get("https://mern-backend-8asj.onrender.com/api/applicants")
      .then((res) => {
        console.log("Fetched applicants:", res.data);
        if (Array.isArray(res.data)) {
          setApplicants(res.data);
        } else {
          setApplicants([]);
        }
      })
      .catch((err) => {
        console.error("Error fetching applicants:", err);
        setApplicants([]);
      });
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Applicants</h2>
      {Array.isArray(applicants) && applicants.length > 0 ? (
        applicants.map((applicant) => (
          <div key={applicant._id} className="border p-2 mb-2 rounded">
            <p><strong>Name:</strong> {applicant.name}</p>
            <p><strong>Email:</strong> {applicant.email}</p>
            <p><strong>College:</strong> {applicant.college}</p>
          </div>
        ))
      ) : (
        <p>No applicants found.</p>
      )}
    </div>
  );
}

export default Applicants;
