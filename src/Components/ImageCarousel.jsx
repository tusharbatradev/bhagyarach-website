import { Stack } from "@mui/material";
import React from "react";
import MemberCard from "./MemberCard";

const ImageCarousel = () => {
  return (
    <Stack
      sx={{
        display: "flex",
        overflowX: "scroll",
        flexDirection: "row",
        width: {sm : "400px", md : "600px", lg : "1500px"},
        width: {sm : "400px", md : "600px", lg : "1500px"},
        gap: "18px"
      }}
    >
      <MemberCard />
      <MemberCard />
      <MemberCard />
      <MemberCard />
      <MemberCard />
      <MemberCard />
      <MemberCard />
    </Stack>
  );
};

export default ImageCarousel;
