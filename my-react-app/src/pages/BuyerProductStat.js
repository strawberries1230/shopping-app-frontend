import React from 'react';
import {
  Typography,
  Card,
  CardContent,
  Container,
  Grid
} from '@mui/material';
import { Link } from 'react-router-dom';

const buyerData = {
  top3Bought: [
    { id: 1, name: "Product A", timesBought: 10 },
    { id: 2, name: "Product B", timesBought: 8 },
    { id: 3, name: "Product C", timesBought: 6 },
  ],
  recent3Bought: [
    { id: 4, name: "Product D", boughtOn: "2023-10-10" },
    { id: 5, name: "Product E", boughtOn: "2023-10-05" },
    { id: 6, name: "Product F", boughtOn: "2023-10-02" },
  ]
};

export default function BuyerProductStat() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>Buyer Details</Typography>

      <Typography variant="h5" gutterBottom>Top 3 Bought</Typography>
      <Grid container spacing={2}>
        {buyerData.top3Bought.map((product) => (
          <Grid item xs={12} sm={4} key={product.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">
                  <Link to={`/product/${product.id}`} style={{ color: 'inherit' }}>
                    {product.name}
                  </Link>
                </Typography>
                
                <Typography color="textSecondary">Times Bought: {product.timesBought}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h5" gutterBottom style={{ marginTop: '24px' }}>Recent 3 Bought</Typography>
      <Grid container spacing={2}>
        {buyerData.recent3Bought.map((product) => (
          <Grid item xs={12} sm={4} key={product.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">
                  <Link to={`/product/${product.id}`} style={{  color: 'inherit' }}>
                    {product.name}
                  </Link>
                </Typography>
                <Typography color="textSecondary">Bought On: {product.boughtOn}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
