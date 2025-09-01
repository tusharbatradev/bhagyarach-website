import React from "react";
import { Card, CardMedia, Box, Typography } from "@mui/material";

const MissionCard = ({ image, title, description }) => {
  return (
    <Card
      sx={{
        position: "relative",
        borderRadius: 3,
        overflow: "hidden",
        boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
        transition: "transform 0.3s ease",
        cursor: "pointer",
        width: 300,
      }}
    >
      {/* Image Wrapper */}
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{
            height: 350,
            minHeight: 300,
            maxHeight: 300,
            width : "100%",
            objectFit: "cover",
            display: "block",
          }}
        />

        {/* Overlay (only on image area) */}
        <Box
          className="overlay"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            textAlign: "center",
            p: 2,
            opacity: 0,
            transform: "translateY(20px)",
            transition: "all 0.4s ease",
            "&:hover": {
              opacity: 1,
              transform: "translateY(0)",
            },
          }}
        >
          <Typography variant="h6" fontWeight={600} gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2">{description}</Typography>
        </Box>
      </Box>

      {/* Always visible Title below image */}
      <Box
        sx={{
          backgroundColor: "#fff",
          textAlign: "center",
          py: 1.5,
        }}
      >
        <Typography variant="h6" fontWeight={600}>
          {title}
        </Typography>
      </Box>
    </Card>
  );
};

export default MissionCard;
