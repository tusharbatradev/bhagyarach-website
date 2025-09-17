import { Stack } from "@mui/material";
import React from "react";
import MemberCard from "./MemberCard";
import PriyanshuImage from "../assets/PriyanshuImage.png";

const ImageCarousel = () => {
  const members = [
    {
      img: PriyanshuImage,
      name: "Dr. Priyanshu Ranjan",
      post: "Joint secretary",
    },
    {
      img: PriyanshuImage,
      name: "Priyanshu Ranjan",
      post: "Joint secretary",
    },
    {
      img: PriyanshuImage,
      name: "Priyanshu Ranjan",
      post: "Joint secretary",
    },
    {
      img: PriyanshuImage,
      name: "Priyanshu Ranjan",
      post: "Joint secretary",
    },
    {
      img: PriyanshuImage,
      name: "Priyanshu Ranjan",
      post: "Joint secretary",
    },
    {
      img: PriyanshuImage,
      name: "Priyanshu Ranjan",
      post: "Joint secretary",
    },
    {
      img: PriyanshuImage,
      name: "Priyanshu Ranjan",
      post: "Joint secretary",
    },
    {
      img: PriyanshuImage,
      name: "Priyanshu Ranjan",
      post: "Joint secretary",
    },
  ];
  return (
    <Stack
      sx={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center",
        gap: "28px",
        width: "100%",
        px: "14%",
        mx: "auto",
      }}
    >
      {members?.map((member, index) => (
        <MemberCard key={index} member={member} />
      ))}
    </Stack>
  );
};

export default ImageCarousel;
