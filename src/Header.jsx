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
  { label: "ABOUT US", path: "/about" },
  { label: "CONTACT US", path: "/contact" },
  { label: "DONATE", path: "/donate", isButton: true },
];

const Header = () => {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  console.log(theme.palette.primary.dark);

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
          bgcolor: "#173760",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontSize: { xs: "10px", sm: "11px", md: "14px" },
            textAlign: "center",
          }}
        >
          <marquee direction="left" scrollamount="3">
            अनुकरणीय रहस्यमयी चेतना जागरणार्थ सर्वे बहुउद्देश्यी पहलं
            यथार्थाः हिते ॥
          </marquee>
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
          <img
            onClick={() => navigate("/")}
            width="50px"
            src={BhagyaRachLogo}
            alt="Logo"
          />
          <Box>
            <Typography
              sx={{
                fontSize: { xs: "16px", sm: "18px", md: "20px" },
                fontWeight: 600,
                color: "#173760",
                lineHeight: 1.2,
              }}
            >
              Bhagya Rach
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "10px", sm: "11px", md: "12px" },
                color: "#173760",
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
                  backgroundColor: "#173760",
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
                  color: "#173760",
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
        <Box sx={{ width: "250px", padding: 2 }}>
          {/* Logo */}
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mb={4}
          >
            <img width="100px" src={BhagyaRachLogo} alt="Logo" />
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
                      color: "#173760",
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
