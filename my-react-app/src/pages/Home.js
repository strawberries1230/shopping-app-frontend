// src/pages/Home.js
import React from "react";
import { Grid } from "@mui/material";
import MediaCard from "../components/MediaCard";

function Home() {
  return (
  
    <div style={{ padding: "30px" }}>
      <Grid container  spacing={2}>
        <Grid item xs={12} sm={4} md={3}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <MediaCard />
          </div>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <MediaCard />
          </div>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <MediaCard />
          </div>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <MediaCard />
          </div>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <MediaCard />
          </div>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <MediaCard />
          </div>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <MediaCard />
          </div>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <MediaCard />
          </div>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <MediaCard />
          </div>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <MediaCard />
          </div>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <MediaCard />
          </div>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <MediaCard />
          </div>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <MediaCard />
          </div>
        </Grid>
  
      </Grid>
    </div>
  );
}

export default Home;
