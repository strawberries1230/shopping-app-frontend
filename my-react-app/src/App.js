import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Footer from "./components/Footer";
import HomeRouter from "./routers/HomeRouter";
import ProductRouter from "./routers/ProductRouter";
import OrderRouter from "./routers/OrderRouter";
import NotFound from "./pages/NotFound";
import { Box } from "@mui/material";
import { AuthProvider } from "./contexts/AuthContext";
import { AuthToastProvider } from "./contexts/AuthToastContext";

function App() {
  return (
    <AuthProvider>
           <AuthToastProvider>
      <Router>
        <Box
          sx={{ display: "flex", flexDirection: "column", minHeight: "100%" }}
        >
          {/* flex:1, push the footer to the bottom */}
          <main style={{ flex: 1 }}>
              <ResponsiveAppBar />

            <Routes>
         
                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route path="/home/*" element={<HomeRouter />} />
       
              {/* <Route path="/" element={<Navigate to="/home" replace />} />
              <Route
                path="/home/*"
                element={
                  <AuthToastProvider>
                    <HomeRouter />
                  </AuthToastProvider>
                }
              /> */}
              <Route path="/product/*" element={<ProductRouter />} />

              <Route path="/order/*" element={<OrderRouter />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </Box>
      </Router>
      </AuthToastProvider>
    </AuthProvider>
  );
}

export default App;
