import { Stack, Typography } from "@mui/material";
import React from "react";

const MemberCard = ({ member }) => {
  return (
    <Stack
      sx={{
        width: {
          xs: "100%",
          sm: "48%",
          md: "30%",
          lg: "22%",
        },
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Stack
        sx={{
          width: "100%",
          height: "240px",
          borderRadius: "16px",
          backgroundColor: "#f5f5f5",
          overflow: "hidden",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={member.img}
          alt={member.name}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
          }}
        />
      </Stack>

      <Typography sx={{ fontSize: "16px", fontWeight: 600, mt: 1 }}>
        {member.name}
      </Typography>
      <Typography sx={{ fontSize: "14px", fontWeight: 400 }}>
        {member.post}
      </Typography>
    </Stack>
  );
};

export default MemberCard;
