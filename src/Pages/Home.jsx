import React from "react";
import { Stack, Typography } from "@mui/material";
import MissionVisionSection from "../Components/MissionCard";
import Education from "../assets/Education.jpg";
import Environment from "../assets/Environment.jpg";
import Health from "../assets/Health.jpg";
import Opportunity from "../assets/Opportunity.jpg";
import MissionCard from "../Components/MissionCard";

const Home = () => {
  return (
    <Stack>
      <Typography
        sx={{
          fontSize: { xs: "32px", md: "40px", lg: "44px" },
          fontWeight: 600,
          color: "#173760",
          textAlign: "center",
        }}
      >
        Our Vision
      </Typography>

      <Stack
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          gap: "32px",
          alignItems: { xs: "center", sm: "center", md: "flex-start" },
          justifyContent: "center",
          flexWrap: "wrap",
          mt: "8px",
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
  );
};

export default Home;
