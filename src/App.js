import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./scss/style.scss"
import HomePage from "./components/home/Home";
import Head from "./components/head/Head";

function App() {
  return (
    <>
      <Head />
        <Router>
          <div className="container">
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </div>
        {/* <Footer /> */}
        </Router>
    </>
  );
}

export default App;
