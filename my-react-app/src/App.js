import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // useNavigate,
  Navigate,
} from "react-router-dom";
// import Header from "./components/Header";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Footer from "./components/Footer";
import HomeRouter from "./routers/HomeRouter";
import ProductRouter from "./routers/ProductRouter";
import NotFound from "./pages/NotFound";
import { Box } from "@mui/material";
import OrderRouter from "./routers/OrderRouter";
// import { useState, useEffect } from "react";

// function RedirectToHome() {
//   let navigate = useNavigate();
//   navigate("/home");
//   return null; // This component does not render anything
// }

function App() {
  return (
    <Router>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100%'}}>

      {/* <Container component="main" sx={{ flex: "1", padding: 0, margin:0}}> */}
      <main style={{ flex: 1 }}>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/product/*" element={<ProductRouter />} />
          <Route path="/home/*" element={<HomeRouter />} />
          <Route path="/order/*" element={<OrderRouter />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      {/* </Container> */}
      </main>

      <Footer />
      </Box>
    </Router>
  );
}

export default App;
