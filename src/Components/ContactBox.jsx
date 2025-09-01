import { Box, Typography, Stack } from "@mui/material";

const ContactBox = ({ icon: Icon, title, subtitle, description }) => (
  <Box
    sx={{
      bgcolor: "#173760",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      borderRadius: "16px",
      minWidth: "350px",
      maxWidth: "350px",
      minHeight: "200px"
    }}
  >
    {/* Top Section (Icon) */}
    <Box sx={{ mb: 1 }}>
      <Icon />
    </Box>

    {/* Title */}
    <Typography sx={{ color: "white", fontSize: "28px", fontWeight: 600 }}>
      {title}
    </Typography>

    {/* Subtitle (reserved height for consistency) */}
    <Typography
      sx={{
        color: "white",
        fontSize: "18px",
        fontWeight: 500,
        minHeight: "28px", 
        display: "flex",
        alignItems: "center",
      }}
    >
      {subtitle || ""}
    </Typography>

    {/* Description (reserved height as well) */}
    <Typography
      sx={{
        color: "white",
        fontSize: "14px",
        fontWeight: 200,
        mt: 1,
        minHeight: "40px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textDecoration: "none", 
        "& a": {
          color: "inherit", 
          textDecoration: "none",
        },
      }}
    >
      {description || ""}
    </Typography>
  </Box>
);

export default ContactBox;
