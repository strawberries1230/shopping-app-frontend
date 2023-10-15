// src/routers/HomeRouter.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Register from '../pages/Register';

function HomeRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/register" element={<Register />} />
            {/* <Route path="about" element={<About />} /> */}
        </Routes>
    );
}

export default HomeRouter;

