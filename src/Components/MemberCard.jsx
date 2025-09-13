import { Stack, Typography } from "@mui/material";
import React from "react";


const MemberCard = ({member}) => {
  return (
    <Stack
      sx={{
        width: {
          xs: "100%",  
          sm: "48%",   
          md: "30%",
          lg: "22%",    
        },
        flexShrink: 0,
        alignItems: "center",
      }}
    >
      <img
        style={{
          width: "100%",
          height: "220px",
          borderRadius: "16px",
          objectFit: "cover",
        }}
        src={member.img}
        alt="Priyanshu Ranjan"
      />
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
