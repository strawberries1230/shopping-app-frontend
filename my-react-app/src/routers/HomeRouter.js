import React from "react";
import { Route, Routes } from "react-router-dom";
// import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import LandingPage from "../pages/LandingPage";
function HomeRouter() {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default HomeRouter;
