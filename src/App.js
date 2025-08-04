import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register"; // We'll create this next
import Admin from "./pages/Admin";       // We'll create this too
import Applicants from './pages/Applicants';
import Header from './components/Header';


function App() {
  return (
    <BrowserRouter>
      <Header /> {/* 👈 Your new navigation bar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/applicants" element={<Applicants />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
