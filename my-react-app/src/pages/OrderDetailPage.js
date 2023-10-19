import { Alert, Button, Card, CardContent, List, Snackbar, Typography } from "@mui/material";
import SingleOrderDetail from "../components/Order/SingleOrderDetail";
import { useEffect, useState } from "react";
import { getOrderDetail } from "../service/orderService";
import { useAuth } from "../contexts/AuthContext";
import { useParams } from "react-router-dom";
import { cancelOrder } from "../service/orderService";
export default function OrderDetailPage() {
  const { order_id } = useParams();
  const { isLoggedIn, setIsLoggedIn, setIsForcedLogout} = useAuth();

  const [orderDetail, setOrderDetail] = useState(null);
  const [clickCancel, setClickCancel] = useState(false);

  const handleCancelOrder = (order_id, setIsLoggedIn, setIsForcedLogout) => {
    cancelOrder(order_id, setIsLoggedIn, setIsForcedLogout);
    setOrderDetail(prevDetail => ({ ...prevDetail, status: 'CANCELLED' })); // 设置订单为已取消
    setClickCancel(true);
    console.log("订单已取消");
  };

  useEffect(() => {
    if (isLoggedIn) {
      getOrderDetail(order_id, setOrderDetail, setIsLoggedIn, setIsForcedLogout);
 
    }
  }, [isLoggedIn, order_id]); // 当`isLoggedIn`或`product.product_id`发生变化时再次运行`useEffect`

  return (
    <Card sx={{ maxWidth: 600, width: "100%", margin: "20px auto" }}>
      {orderDetail && (
        <>
          <CardContent sx={{ paddingBottom: 0 }}>
            <Typography variant="h6">Order Detail</Typography>
            <Typography variant="body1">
              Status: {orderDetail.status}
            </Typography>

            <Typography variant="body1" sx={{ paddingBottom: 0 }}>
              Order Placed At: {orderDetail.date}
            </Typography>
          </CardContent>

          <List>
            {orderDetail &&
              orderDetail.items.map((item) => (
                <SingleOrderDetail item={item} />
              ))}
          </List>
          <CardContent
            sx={{
              paddingBottom: 0,
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            {orderDetail.status === "PROCESSING" && (
              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleCancelOrder(order_id, setIsLoggedIn, setIsForcedLogout)}
              >
                Cancel Order
              </Button>
            )}
          </CardContent>

          <Snackbar
        open={clickCancel}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={6000}
        onClose={() => setClickCancel(false)}
      >
        <Alert

          onClose={() => setClickCancel(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          You cancel your order!
        </Alert>
      </Snackbar>
        </>
      )}
    </Card>
  );
}
