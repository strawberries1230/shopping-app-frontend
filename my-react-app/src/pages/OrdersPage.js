import { List } from "@mui/material";
import SingleOrder from "../components/Order/SingleOrder";
const orders = [
  {
    id: 1,
    date: "2023-10-10",
    itemCount: 3,
    status: "Shipped",
    thumbnail: "/path-to-your-image.jpg",
  },
  {
    id: 2,
    date: "2023-10-12",
    itemCount: 2,
    status: "Processing",
    thumbnail: "/path-to-another-image.jpg",
  },
  // ... 更多订单数据
];

function OrdersPage() {
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
