import { Stack, IconButton, Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import Gallery1 from "../assets/Gallery1.jpg";
import Gallery2 from "../assets/Gallery2.jpg";
import Gallery3 from "../assets/Gallery3.jpg";
import Gallery4 from "../assets/Gallery4.jpg";
import Gallery5 from "../assets/Gallery5.jpg";
import Gallery6 from "../assets/Gallery6.jpg";
import Gallery7 from "../assets/Gallery7.jpg";
import Gallery8 from "../assets/Gallery8.jpg";
import Gallery9 from "../assets/Gallery9.jpg";

// const images = [
//   Gallery1,
//   Gallery2,
//   Gallery3,
//   Gallery4,
//   Gallery5,
//   Gallery6,
//   Gallery7,
//   Gallery8,
//   Gallery9,
//   Gallery10,
// ];

const images = [
  {
    src: Gallery1,
    title: "Menstrual hygiene Awareness campaign",
  },
  {
    src: Gallery2,
    title: "Free Health Camp",
  },
  {
    src: Gallery3,
    title: "Tree Plantation by Honorable Minister",
  },
  {
    src: Gallery4,
    title: "Gallery 4",
  },
  {
    src: Gallery5,
    title: "Tree plantation Initiative By Bhagyarach Members",
  },
  {
    src: Gallery6,
    title: "School Health Camp",
  },
  {
    src: Gallery7,
    title: "Eye Examination",
  },
  {
    src: Gallery8,
    title: "Eye health checkup Camp",
  },
  {
    src: Gallery9,
    title: "Tuberculosis Awareness campaign",
  },
];

const GalleryCarousel = () => {
  const [index, setIndex] = useState(0);

  // Auto change image every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Stack
        sx={{
          width: { xs: "100%", md: "80%", lg: "70%" },
          height: { xs: "320px", sm: "420px", md: "520px", lg: "600px" },
          position: "relative",
          overflow: "hidden",
          borderRadius: "12px",
        }}
      >
        {/* Images */}
        {images.map((image, i) => (
          <Box
            key={i}
            component="img"
            src={image.src}
            alt={image.title}
            sx={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              display: "block",
              objectFit: "cover", // always cover the full frame
              transition: "opacity 0.8s ease-in-out",
              opacity: index === i ? 1 : 0,
            }}
          />
        ))}

        {/* Title below the image */}
        <Box
          sx={{
            position: "absolute",
            bottom: 12,
            left: "50%",
            transform: "translateX(-50%)",
            bgcolor: "rgba(0, 0, 0, 0.65)",
            color: "white",
            px: 3,
            py: 1,
            borderRadius: "8px",
            transition: "opacity 0.4s ease-in-out",
            opacity: 1,
            pointerEvents: "none",
            maxWidth: "90%",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "10px", sm: "14px", md: "16px" },
            }}
            fontWeight={600}
          >
            {images[index].title}
          </Typography>
        </Box>

        {/* Prev Button */}
        <IconButton
          onClick={handlePrev}
          sx={{
            position: "absolute",
            top: "50%",
            left: "10px",
            transform: "translateY(-50%)",
            background: "rgba(0,0,0,0.4)",
            color: "white",
            "&:hover": { background: "rgba(0,0,0,0.6)" },
          }}
        >
          <ArrowBackIosNew />
        </IconButton>

        {/* Next Button */}
        <IconButton
          onClick={handleNext}
          sx={{
            position: "absolute",
            top: "50%",
            right: "10px",
            transform: "translateY(-50%)",
            background: "rgba(0,0,0,0.4)",
            color: "white",
            "&:hover": { background: "rgba(0,0,0,0.6)" },
          }}
        >
          <ArrowForwardIos />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default GalleryCarousel;
