import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register"; 
import Admin from "./pages/Admin";       
import Applicants from './pages/Applicants';
import Header from './components/Header';


function App() {
  return (
    <BrowserRouter>
      <Header /> {/* 👈 Navigation bar */}
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
