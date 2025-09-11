import { Stack, Typography } from "@mui/material";
import React from "react";
import PriyanshuImage from "../assets/PriyanshuImage.png";

const MemberCard = () => {
  return (
    <Stack>
      <img
        style={{
          width: "300px",
          height: "300px",
          borderRadius: "16px",
        }}
        src={PriyanshuImage}
        alt=""
      />
      <Typography
        sx={{
          fontSize: "18px",
          fontWeight: 600,
        }}
      >
        Priyanshu Ranjan
      </Typography>
      <Typography
        sx={{
          fontSize: "16px",
          fontWeight: 400,
        }}
      >
        Joint secretary
      </Typography>
    </Stack>
  );
};

export default MemberCard;
