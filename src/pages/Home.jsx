import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to the Intern Portal</h1>
      <p className="mb-6 text-lg text-gray-700">Register as an Intern or view all applicants</p>

      <div className="flex gap-4">
        <Link to="/register" className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold">
          Register
        </Link>
        <Link to="/admin" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold">
          Admin View
        </Link>
      </div>
    </div>
  );
}

export default Home;
