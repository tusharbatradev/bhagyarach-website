import { Home } from "@mui/icons-material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import HandshakeIcon from "@mui/icons-material/Handshake";

export const HomeIcon = () => {
  return <Home />;
};

export const LocationIcon = () => {
  return <LocationOnIcon sx={{ color: "white", fontSize: "48px" }} />;
};

export const ContactIcon = () => {
  return <CallIcon sx={{ color: "white", fontSize: "48px" }} />;
};

export const MailIcon = () => {
  return <EmailIcon sx={{ color: "white", fontSize: "48px" }} />;
};

export const VolunteerIcon = () => {
  return <HandshakeIcon />;
};
