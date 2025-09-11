import React from "react";
import { Stack, Typography, Button, Grid } from "@mui/material";
import ImageCarousel from "../Components/ImageCarousel";

const About = () => {
  return (
    <Stack
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "24px",
        width : "100%",
        maxWidth : "100vw"
      }}
    >
      <Stack
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          px: { xs: "20px", md: "300px" },
          py: { xs: "12px", lg: "24px" },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "32px", md: "40px", lg: "44px" },
            fontWeight: 600,
            color: "#173760",
          }}
        >
          About Us
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "15px", md: "22px", lg: "22px" },
            textAlign: "center",
            fontWeight: 500,
            color: "#173760",
            backgroundColor: "#e2eefc",
            padding: "12px",
            borderRadius: "12px",
            mt: "8px",
          }}
        >
          <span
            style={{
              fontSize: { xs: "16px", md: "24px", lg: "24px" },
              fontWeight: 600,
            }}
          >
            Bhagyarach Welfare Foundation
          </span>{" "}
          is a non profit organization dedicated to creating meaningful change
          in society. From education and health to environment and community
          empowerment, our work spans across diverse areas where support is most
          needed. Guided by empathy and fueled by action, we strive to empower
          communities, inspire transformation, and cultivate hope—building
          opportunities for growth, well-being, and sustainability. We envision
          a society where every individual has access to quality education, good
          health, a safe environment, and the opportunity to flourish. Founded
          with the belief that collective effort can change lives, Bhagyarach
          began as a small group of volunteers and today operates across
          multiple regions with a growing team of dedicated staff and partners.
          From providing scholarships and health camps to planting trees and
          supporting women’s initiatives, our journey continues with one goal—to
          create lasting impact and brighter futures.
        </Typography>
      </Stack>

      {/* Team Section */}
      <Stack>
        <Typography
          sx={{
            fontSize: { xs: "32px", md: "40px", lg: "44px" },
            fontWeight: 600,
            color: "#173760",
            textAlign: "center",
          }}
        >
          Our Team
        </Typography>
    
        <ImageCarousel />
      </Stack>
    </Stack>
  );
};

export default About;
