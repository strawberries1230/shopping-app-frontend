import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // useNavigate,
  Navigate
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeRouter from "./routers/HomeRouter";
import NotFound from "./pages/NotFound";
// import { useState, useEffect } from "react";

// function RedirectToHome() {
//   let navigate = useNavigate();
//   navigate("/home");
//   return null; // This component does not render anything
// }

function App() {

  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home/*" element={<HomeRouter />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
