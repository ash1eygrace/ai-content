import './App.css';
import "react-bootstrap/dist/react-bootstrap.min.js"
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import Navigation from './components/Navigation';
import Home from './components/Home';
import ProductDescription from './components/ProductDescription';
import BlogIntro from './components/BlogIntro';
import CompanyBio from './components/CompanyBio';
import LinkedInJobDescription from './components/LinkedInJobDescription';



function App() {
  return (
    <Router>
      <div className="App">
        <Navigation/>

      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/product-description" element={<ProductDescription/>} />
        <Route path="/blog-intro" element={<BlogIntro/>} />
        <Route path="/company-bio" element={<CompanyBio/>} />
        <Route path="/li-job-description" element={<LinkedInJobDescription/>} />
      </Routes>

      </div>
    </Router>
  );
}

export default App;
