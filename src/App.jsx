import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homes from './components/Home';
import Footer from './components/Footer';
// import Ourteam from './components/Ourteam';
import Contact from './components/Contact';
import './i18n/i18n';
import './App.css';
import { Ourteam } from './components/Ourteam';

function App() {
  return (
    <Router>
      <div className='flex flex-col gap-20'>
        <Navbar />

        <Routes>
          <Route path="/" element={<Homes />} />
          {/* <Route path="/ourteam" element={<Ourteam />} /> */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <div className=' px-10 w-[90%] m-auto'>
        <Ourteam/>
        </div>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
