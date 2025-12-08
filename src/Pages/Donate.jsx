import React from "react";
import { Typography, Stack, Box } from "@mui/material";
import PaymentQR2 from "../assets/PaymentQR2.jpg";

const Donate = () => {
  return (
    <>
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
            color: " #173760",
          }}
        >
          Donate
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            textAlign: "center",
            fontWeight: 500,
            color: " #173760",
          }}
        >
          Your small contribution can make a big difference in someone's life.
        </Typography>

        {/* QR Image */}
        <Box
          component="img"
          sx={{
            width: { xs: "250px", sm: "250px", lg: "350px" }, // responsive widths
            mt : "16px",
            mb : "16px"
          }}
          src={PaymentQR2}
          alt="QR Code"
        />

        {/* Bank Account Details */}
        <Box
          sx={{
            bgcolor: "#e2eefc",
            padding: "16px",
            borderRadius: "12px",
            marginTop: "12px",
          }}
        >
          <Typography sx={{ fontWeight: 600 }}>
            Bank Name: <span style={{ fontWeight: 400 }}>XYZ Bank</span>
          </Typography>
          <Typography sx={{ fontWeight: 600 }}>
            Account Name:{" "}
            <span style={{ fontWeight: 400 }}>
              Bhagyarach Welfare Foundation
            </span>
          </Typography>
          <Typography sx={{ fontWeight: 600 }}>
            Account Number: <span style={{ fontWeight: 400 }}>1234567890</span>
          </Typography>
          <Typography sx={{ fontWeight: 600 }}>
            IFSC Code: <span style={{ fontWeight: 400 }}>ABCD12345678</span>
          </Typography>
          <Typography sx={{ fontWeight: 600 }}>
            Branch: <span style={{ fontWeight: 400 }}>XYZ Bank</span>
          </Typography>
        </Box>
      </Stack>
    </>
  );
};

export default Donate;
