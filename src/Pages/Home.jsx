import React from "react";
import { Stack, Typography, Button, Box, Paper } from "@mui/material";
import MissionCard from "../Components/MissionCard";
import HomeImage from "../assets/HomeImage.png";
import Education from "../assets/Education.jpg";
import Environment from "../assets/Environment.jpg";
import Health from "../assets/Health.jpg";
import Opportunity from "../assets/Opportunity.jpg";
import GalleryCarousel from "../Components/GalleryCarousel";

const Home = () => {
  return (
    <Stack>
      {/* 🌟 Hero Section */}
      <Stack
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: 4, md: 6 },
          bgcolor: "#fdfcfd",
          px: { xs: 3, sm: 4, md: 6, lg: 10 },
          py: { xs: 6, sm: 8, md: 10 },
        }}
      >
        <Box
          sx={{
            textAlign: { xs: "center", md: "left" },
            maxWidth: "540px",
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{
              mb: 2,
              lineHeight: 1.3,
              fontSize: { xs: "28px", sm: "32px", md: "36px" },
            }}
          >
            Building a brighter, more equitable future for all
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 3,
              color: "text.secondary",
              fontSize: { xs: "14px", sm: "15px", md: "16px" },
            }}
          >
            From education to health, environment, and community empowerment—
            our passion drives change.
          </Typography>

          <Button
            variant="contained"
            href="https://api.whatsapp.com/send?phone=919582020916&text=Hi%2C%20I%E2%80%99m%20interested%20in%20volunteering%20with%20Bhagya%20Rach.%20Could%20you%20share%20the%20details%3F"
            sx={{
              bgcolor: "#173760",
              borderRadius: "30px",
              px: 4,
              py: 1.5,
              textTransform: "none",
              fontWeight: "bold",
              "&:hover": { bgcolor: "#a6dfce" },
            }}
          >
            Join Us
          </Button>
        </Box>

        {/* Image */}
        <Box
          sx={{
            maxWidth: { xs: "100%", sm: "340px", md: "420px", lg: "520px" },
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src={HomeImage}
            alt="Hero"
            sx={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </Box>
      </Stack>

      {/* Our Vision Section */}
      <Stack sx={{ mt: 6, px: { xs: 2, md: 6 } }}>
        <Typography
          sx={{
            fontSize: { xs: "32px", md: "40px" },
            fontWeight: 600,
            color: "#173760",
            textAlign: "center",
            mb: 4,
          }}
        >
          Our Vision
        </Typography>

        <Stack
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: "32px",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <MissionCard
            image={Education}
            title="Education for All"
            description="Providing equal learning opportunities for every child."
          />
          <MissionCard
            image={Environment}
            title="Environment Protection"
            description="Creating awareness and action for a greener tomorrow."
          />
          <MissionCard
            image={Opportunity}
            title="Unlocking Opportunities"
            description="Helping individuals reach their true potential."
          />
          <MissionCard
            image={Health}
            title="Health & Wellbeing"
            description="Ensuring a healthier and happier community."
          />
        </Stack>
      </Stack>

      {/* Photo Gallery Section */}
      <Stack sx={{ mt: 8, px: { xs: 2, md: 6 } }}>
        <Typography
          sx={{
            fontSize: { xs: "32px", md: "40px" },
            fontWeight: 600,
            color: "#173760",
            textAlign: "center",
            mb: 4,
          }}
        >
          Photo Gallery
        </Typography>
        <GalleryCarousel />
      </Stack>

      {/* Get Involved Section */}
      <Stack
        sx={{
          mt: 10,
          py: 8,
          backgroundColor: "#f8f9fa",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "28px", md: "36px" },
            fontWeight: 600,
            color: "#173760",
            mb: 4,
          }}
        >
          Get Involved
        </Typography>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          justifyContent="center"
          alignItems="center"
        >
          <Box
            sx={{
              background: "white",
              p: 4,
              borderRadius: "16px",
              boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
              width: "250px",
              height: "180px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography fontWeight={600} fontSize="20px">
              Donate
            </Typography>
            <Typography fontSize="14px" mt={1}>
              Support our mission with your generous contribution.
            </Typography>
          </Box>

          <Box
            sx={{
              background: "white",
              p: 4,
              borderRadius: "16px",
              boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
              width: "250px",
              height: "180px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography fontWeight={600} fontSize="20px">
              Volunteer
            </Typography>
            <Typography fontSize="14px" mt={1}>
              Be a part of our journey by giving your time and skills.
            </Typography>
          </Box>

          <Box
            sx={{
              background: "white",
              p: 4,
              borderRadius: "16px",
              boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
              width: "250px",
              height: "180px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography fontWeight={600} fontSize="20px">
              Partner
            </Typography>
            <Typography fontSize="14px" mt={1}>
              Collaborate with us to create a bigger impact together.
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Home;
