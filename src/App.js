import './App.css';
import 'react-bootstrap/dist/react-bootstrap.min.js';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navigation from './components/common/Navigation';
import Home from './components/pages/Home';
import Generators from './components/generators/Generators';
import GeneratorComponent from './components/generators/Generator';

import { generatorList } from './data/generatorList';

function App() {
  const blogIdeasData = generatorList[0];
  const productDescriptionData = generatorList[1];
  const companyBioData = generatorList[2];
  const seoBlogIntroData = generatorList[3];
  const linkedInJobDescriptionData = generatorList[4];
  const tldrData = generatorList[5];
 

  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/generators" element={<Generators />} />
          <Route path="/blog-ideas" element={<GeneratorComponent generatorData={blogIdeasData} />} />
          <Route path="/product-description" element={<GeneratorComponent generatorData={productDescriptionData} />}/>
          <Route path="/company-bio" element={<GeneratorComponent generatorData={companyBioData} />}/>
          <Route path="/seo-blog-intro" element={<GeneratorComponent generatorData={seoBlogIntroData} />}/>
          <Route path="/linkedin-job-description" element={<GeneratorComponent generatorData={linkedInJobDescriptionData} />}/>
          <Route path="/tldr" element={<GeneratorComponent generatorData={tldrData} />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
