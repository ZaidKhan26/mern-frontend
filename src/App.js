import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register"; // We'll create this next
import Admin from "./pages/Admin";       // We'll create this too
import axios from "axios";
import ViewApplicants from './pages/ViewApplicants';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/applicants" element={<ViewApplicants />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
