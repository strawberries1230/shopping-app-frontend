// src/routers/HomeRouter.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Product from '../pages/Product';
import WatchList from '../pages/WatchList';
import BuyerProductStat from '../pages/BuyerProductStat';

function ProductRouter() {
    return (
        <Routes>
            <Route path="/" element={<Product />} />
            <Route path="/watchlist" element={<WatchList />} />
            <Route path="/stat" element={<BuyerProductStat />} />
        </Routes>
    );
}

export default ProductRouter;