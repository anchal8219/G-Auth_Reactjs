import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {FirstPage, SecondPage} from './components'

const ProjectRoutes = () => {
  return (
    // <React.Suspense fallback={<>Loading...</>}>
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} /> */}
        <Route path="/first" element={<FirstPage />} />
        <Route path="/second" element={<SecondPage />} />
      </Routes>
    </Router>
  // </React.Suspense>

  );
};
export default ProjectRoutes;
