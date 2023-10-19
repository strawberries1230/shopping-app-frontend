import axios from "axios";
import { forceLogout } from "./authService";

const getOrders = async (setOrders, setIsLoggedIn, setIsForcedLogout) => {
  try {
    const response = await axios.get("https://localhost/api/orders");

    const extractedData = response.data.orders.map((item) => ({
      order_id: item.order_id,
      date: new Date(item.order_time).toISOString().split("T")[0],
      status: item.status,
      itemCount: item.orderDetails.length,
    }));

    // console.log("extractedData", extractedData);

    setOrders(extractedData);
  } catch (error) {
    console.error("Login error:", error);
    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 403)
    ) {
      forceLogout(setIsLoggedIn, setIsForcedLogout);
    }
  }
};

const getOrderDetail = async (orderId, setOrderDetail, setIsLoggedIn, setIsForcedLogout) => {
  try {
    console.log("order id: ", orderId);
    const response = await axios.get(
      `https://localhost/api/orders/withitems/${orderId}`
    );
    console.log(response.data);

    const orderData = response.data;

    // 将日期转换为您需要的格式。这里只是一个例子，您可能需要其他格式。
    const formattedDate = new Date(orderData.order_time)
      .toISOString()
      .split("T")[0];

    // 转换订单详细信息为所需的格式。
    const items = orderData.orderDetailDTOS.map((detail) => ({
      item_id: detail.product_id,
      // TODO: 从API或其他来源获取产品名和缩略图。
      name: "Item " + detail.product_id, // 这只是一个示例，实际上需要从某处获取产品名称。
      price: `$${detail.price_at_order.toFixed(2)}`,
      quantity: detail.quantity,
      thumbnail: `/path-to-image-${detail.product_id}.jpg`, // 仅为示例
    }));
    setOrderDetail({
      order_id: orderData.order_id,
      status: orderData.status,
      date: formattedDate,
      items: items,
    });
  } catch (error) {
    console.error("Login error:", error);
    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 403)
    ) {
      forceLogout(setIsLoggedIn, setIsForcedLogout);
    }
  }
};

const cancelOrder = async (order_id, setIsLoggedIn, setIsForcedLogout) => {
  try {
    await axios.put(`https://localhost/api/orders/cancel/${order_id}`);
  } catch (error) {
    console.error("Login error:", error);
    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 403)
    ) {
      forceLogout(setIsLoggedIn, setIsForcedLogout);
    }
  }
};
export { getOrders, getOrderDetail, cancelOrder };

// const orderDetail = {
//     status: "Processing", // 也可以是 'Completed' 或其他
//     date: "2023-10-10",
//     items: [
//       {
//         id: 1,
//         name: "Item 1",
//         price: "$10.00",
//         quantity: 2,
//         thumbnail: "/path-to-image-1.jpg",
//       },
//       {
//         id: 2,
//         name: "Item 2",
//         price: "$20.00",
//         quantity: 1,
//         thumbnail: "/path-to-image-2.jpg",
//       },
//       // ... 更多商品
//     ],
//   };
