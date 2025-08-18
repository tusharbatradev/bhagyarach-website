import React from "react";
import { Stack, Typography, Button } from "@mui/material";
import {
  LocationIcon,
  ContactIcon,
  MailIcon,
  VolunteerIcon,
} from "../assets/icons";
import ContactBox from "../Components/ContactBox";

const Contact = () => {
  return (
    <Stack
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: { xs: "12px", lg: "24px" },
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "32px", md: "40px", lg: "44px" },
          fontWeight: 600,
          color: "#173760",
        }}
      >
        Contact Us
      </Typography>

      <Typography
        sx={{
          fontSize: "16px",
          textAlign: "center",
          fontWeight: 500,
          color: "#173760",
        }}
      >
        We would love to hear from you. Reach out and let’s work together for a
        better tomorrow.
      </Typography>

      <Stack
        sx={{
          display: "flex",
          flexDirection: { sm: "column", lg: "row" },
          gap: "24px",
          padding: "40px 20px",
        }}
      >
        {/* Address Box */}
        <ContactBox
          icon={LocationIcon}
          title="Visit Us"
          subtitle="Bhagya Rach Welfare Foundation"
          description={
            <>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque,
              corrupti! <br /> Bhopal, Madhya Pradesh
            </>
          }
        />

        {/* Contact Box */}
        <ContactBox
          icon={ContactIcon}
          title="Call Us"
          subtitle="Reach Us Anytime"
          description={
            <>
              Available on Call & WhatsApp
              <br />
              +91 95820 20916
              <br />
              +91 XXXXX XXXXX
            </>
          }
        />

        {/* Mail Box */}
        <ContactBox
          icon={MailIcon}
          title="Mail Us"
          subtitle="For Queries & Support"
          description={<>hq@bhagyarach.org contact@bhagyarach.org</>}
        />
      </Stack>

      {/* Volunteer Button */}
      <Button
        component="a"
        href="https://api.whatsapp.com/send?phone=919582020916&text=Hi%2C%20I%E2%80%99m%20interested%20in%20volunteering%20with%20Bhagya%20Rach.%20Could%20you%20share%20the%20details%3F"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          border: "1px solid #173760",
          color: "#173760",
          padding: "12px",
          fontWeight: 600,
          borderRadius: "12px",
          textDecoration: "none",
          "&:hover": {
            backgroundColor: "#173760",
            color: "white",
          },
        }}
        endIcon={<VolunteerIcon />}
      >
        Be the Change – Volunteer
      </Button>
    </Stack>
  );
};

export default Contact;
