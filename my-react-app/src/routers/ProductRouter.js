import React from "react";
import { Route, Routes} from "react-router-dom";
import ProductDetails from "../pages/ProductDetails";
import WatchList from "../pages/WatchList";
import BuyerProductStat from "../pages/BuyerProductStat";
import { Navigate } from "react-router-dom";
import AllProducts from "../pages/AllProducts";

function ProductRouter() {
  return (
    <Routes>
      <Route path="/" element={<AllProducts />} />
      {/* <Route path="/" element={<Navigate to="/10" replace />} /> */}
      <Route path="/:id" element={<ProductDetails />} />

      <Route path="/watchlist" element={<WatchList />} />
      <Route path="/stat" element={<BuyerProductStat />} />
    </Routes>
  );
}

export default ProductRouter;
