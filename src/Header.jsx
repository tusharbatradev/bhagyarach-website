import React, { useState } from "react";
import BhagyaRachLogo from "./assets/BhagyaRachLogo.jpg";
import {
  Box,
  Button,
  Stack,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

const navigationItems = [
  { label: "HOME", path: "/" },
  { label: "ABOUT", path: "/about" },
  { label: "CONTACT", path: "/contact" },
  { label: "DONATE", path: "/donate", isButton: true },
];

const Header = () => {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme()

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleNavigate = (path) => {
    navigate(path);
    setDrawerOpen(false);
  };

  return (
    <>
      {/* Top Line */}
      <Box
        sx={{
          height: "50px",
          bgcolor: theme.palette.primary.main, //"#2e7086", // -Theme Colour
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontSize: { xs: "11px", sm: "11px", md: "14px" },
            textAlign: "center",
          }}
        >
          अनुकरणीय रहस्यमयी चेतना जागरणार्थं, सर्व बहुउद्देश्य उपक्रमाः यथार्थाः
          भविष्यति
        </Typography>
      </Box>

      {/* Main Header */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        px={2}
        py={1}
      >
        {/* Logo and Name */}
        <Stack direction="row" alignItems="center" gap="10px">
          <img width="50px" src={BhagyaRachLogo} alt="Logo" />
          <Box>
            <Typography
              sx={{
                fontSize: { xs: "16px", sm: "18px", md: "20px" },
                fontWeight: 600,
                color: theme.palette.primary.dark,
                lineHeight: 1.2,
              }}
            >
              Bhagya Rach
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "10px", sm: "11px", md: "12px" },
                color: theme.palette.primary.dark
              }}
            >
              Welfare Foundation
            </Typography>
          </Box>
        </Stack>

        {/* Navigation - Show only on md and up */}
        <Stack
          direction="row"
          alignItems="center"
          gap="24px"
          sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
        >
          {navigationItems.map((item) =>
            item.isButton ? (
              <Button
                key={item.label}
                sx={{
                  backgroundColor: theme.palette.primary.dark,
                  color: "white",
                  padding: "12px 40px",
                }}
                onClick={() => handleNavigate(item.path)}
              >
                {item.label}
              </Button>
            ) : (
              <Typography
                key={item.label}
                sx={{
                  fontSize: "18px",
                  color: theme.palette.primary.dark,
                  fontWeight: 600,
                  cursor: "pointer",
                }}
                onClick={() => handleNavigate(item.path)}
              >
                {item.label}
              </Typography>
            )
          )}
        </Stack>

        {/* Menu Icon - Show only on sm and down */}
        <IconButton
          sx={{ display: { xs: "block", sm: "block", md: "none" } }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon sx={{ color: "#193c2b", fontSize: "30px" }} />
        </IconButton>
      </Stack>

      {/* Sidebar Drawer for mobile/tablet */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box width="250px" p={2}>
          {/* Logo */}
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mb={4}
          >
            <img width="50px" src={BhagyaRachLogo} alt="Logo" />
          </Box>

          {/* Navigation Items */}
          <List>
            {navigationItems.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton
                  sx={{ padding: "12px 0px" }}
                  onClick={() => handleNavigate(item.path)}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontWeight: "bold",
                      fontSize: "20px",
                      color: "#193c2b",
                      textAlign: "left",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
