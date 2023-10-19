import { Grid, Card, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";
function TopProduct({ product }) {
  return (
    <Grid item xs={12} sm={4} key={product.product_id}>
      <Card>
        <CardContent>
          <Typography variant="h6">
            <Link to={`/product/${product.product_id}`} style={{ color: "inherit" }}>
              {product.description}
            </Link>
          </Typography>

          <Typography color="textSecondary">
            Times Bought: {product.count}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
export default TopProduct;
