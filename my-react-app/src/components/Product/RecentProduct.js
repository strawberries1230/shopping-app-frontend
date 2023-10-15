import { Grid, Card, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";
function RecentProduct({ product }) {
  return (
    <Grid item xs={12} sm={4} key={product.id}>
      <Card>
        <CardContent>
          <Typography variant="h6">
            <Link to={`/product/${product.id}`} style={{ color: "inherit" }}>
              {product.name}
            </Link>
          </Typography>
          <Typography color="textSecondary">
            Bought On: {product.boughtOn}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
export default RecentProduct;
