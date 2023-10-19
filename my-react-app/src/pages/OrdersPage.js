import { List } from "@mui/material";
import SingleOrder from "../components/Order/SingleOrder";
import { useEffect, useState } from "react";
import { getOrders } from "../service/orderService";
import { useAuth } from "../contexts/AuthContext";

function OrdersPage() {
const [orders, setOrders] = useState([]);
  const {isLoggedIn, setIsLoggedIn, setIsForcedLogout} = useAuth();
  useEffect(() => {
    if (isLoggedIn) {
      getOrders(setOrders,setIsLoggedIn);
    }
  }, [isLoggedIn]); // 当`isLoggedIn`或`product.product_id`发生变化时再次运行`useEffect`


  const handleCancel = (orderId) => {
    // 处理订单取消逻辑
    console.log(`Cancelled order with id: ${orderId}`);
  };

  return (
    <List sx={{ maxWidth: "80%", margin: "0 auto" }}>
      {orders.map((order) => (
        <SingleOrder order={order} handleCancel={handleCancel} />
      ))}
    </List>
  );
}

export default OrdersPage;
