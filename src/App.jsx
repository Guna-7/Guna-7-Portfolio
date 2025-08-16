import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile.jsx';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import './styles/Common.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Profile />} /> {/* Landing Page */}
          <Route path="/home" element={<Home />} /> {/* Moved Home */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
