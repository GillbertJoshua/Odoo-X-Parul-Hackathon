import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './Components/Navbar';
import { Footer } from './Components/Footer';
import { Home } from './pages/Home'; 


const About = () => <div style={{ padding: '20px', color: 'white' }}><h1>About Page</h1></div>;
const Dashboard = () => <div style={{ padding: '20px', color: 'white' }}><h1>Dashboard Page</h1></div>;

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <main style={{ minHeight: '80vh' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
