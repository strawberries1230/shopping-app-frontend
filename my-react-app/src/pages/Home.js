// src/pages/Home.js
import React from "react";
import { Grid } from "@mui/material";
import MediaCard from "../components/MediaCard";

function Home() {
  return (
    // <div className="home-page">
    //     <h2>Welcome to the Home Page</h2>
    // </div>

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

        {/* <Grid item xs={12} sm={4} md={3}>
          <MediaCard />
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <MediaCard />
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <MediaCard />
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <MediaCard />
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <MediaCard />
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <MediaCard />
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <MediaCard />
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <MediaCard />
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <MediaCard />
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <MediaCard />
        </Grid> */}
      </Grid>
    </div>
  );
}

export default Home;
