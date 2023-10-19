import React from "react";
import { Route, Routes } from "react-router-dom";
import OrdersPage from "../pages/OrdersPage";
import OrderDetailPage from "../pages/OrderDetailPage";

function OrderRouter() {
  return (
    <Routes>
      <Route path="/" element={<OrdersPage />} />
      <Route path="/detail/:order_id" element={<OrderDetailPage />} />
    </Routes>
  );
}

export default OrderRouter;
