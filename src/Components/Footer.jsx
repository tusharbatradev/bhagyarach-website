import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Link,
} from "@mui/material";
import {
  LocationOn,
  Phone,
  Email,
  Facebook,
  Instagram,
  Twitter,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#173760",
        color: "#fff",
        py: 6,
        mt: "auto", 
        position: "relative",
        bottom: 0,
        width: "100%",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          {/* Visit Us */}
          <Grid item xs={12} md={4}>
            <Box display="flex" alignItems="center" mb={1}>
              <LocationOn sx={{ color: "#4cc9f0", mr: 1 }} />
              <Typography variant="h6" fontWeight="bold">
                Visit Us
              </Typography>
            </Box>
            <Typography variant="body2" color="grey.300">
              Bhagya Rach Welfare Foundation <br />
              22/1 Shirdipuram Mandakini Colony, <br />
              Bhopal, Madhya Pradesh
            </Typography>
          </Grid>

          {/* Call Us */}
          <Grid item xs={12} md={4}>
            <Box display="flex" alignItems="center" mb={1}>
              <Phone sx={{ color: "#4cc9f0", mr: 1 }} />
              <Typography variant="h6" fontWeight="bold">
                Call Us
              </Typography>
            </Box>
            <Typography variant="body2" color="grey.300">
              +91 95820 20916 <br />
              +91 99265 71540
            </Typography>
          </Grid>

          {/* Mail Us */}
          <Grid item xs={12} md={4}>
            <Box display="flex" alignItems="center" mb={1}>
              <Email sx={{ color: "#4cc9f0", mr: 1 }} />
              <Typography variant="h6" fontWeight="bold">
                Mail Us
              </Typography>
            </Box>
            <Typography variant="body2" color="grey.300">
              <Link
                href="mailto:contact@bhagyarach.org"
                color="inherit"
                underline="hover"
              >
                contact@bhagyarach.org
              </Link>
            </Typography>
          </Grid>
        </Grid>

        {/* Divider */}
        <Box sx={{ borderTop: "1px solid #2f3e46", mt: 5, pt: 3 }} />

        {/* Bottom section */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <Typography variant="body2" color="grey.400" mb={{ xs: 2, sm: 0 }}>
            © {new Date().getFullYear()} Bhagya Rach Welfare Foundation | All
            Rights Reserved
          </Typography>

          {/* Social Links */}
          <Box>
            <IconButton
              href="https://facebook.com"
              target="_blank"
              sx={{
                color: "white",
                "&:hover": { color: "#4cc9f0", transform: "scale(1.2)" },
                transition: "all 0.3s",
              }}
            >
              <Facebook />
            </IconButton>
            <IconButton
              href="https://instagram.com"
              target="_blank"
              sx={{
                color: "white",
                "&:hover": { color: "#e1306c", transform: "scale(1.2)" },
                transition: "all 0.3s",
              }}
            >
              <Instagram />
            </IconButton>
            <IconButton
              href="https://twitter.com"
              target="_blank"
              sx={{
                color: "white",
                "&:hover": { color: "#1da1f2", transform: "scale(1.2)" },
                transition: "all 0.3s",
              }}
            >
              <Twitter />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
