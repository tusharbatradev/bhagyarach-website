import { Stack, Typography } from "@mui/material";
import React from "react";
import MemberCard from "./MemberCard";

// Images
import DevendraImg from "../assets/TeamMembers/01_Devendra.jpg";
import RishikeshImg from "../assets/TeamMembers/02_Rishikesh.jpg";
import BhasitaImg from "../assets/TeamMembers/03_Bhasita.jpg";
import JagratiImg from "../assets/TeamMembers/04_Jagrati.jpg";
import RahulImg from "../assets/TeamMembers/05_Rahul.jpg";
import HimanshuImg from "../assets/TeamMembers/06_Himanshu.jpg";
import AnuragImg from "../assets/TeamMembers/07_Anurag.jpg";
import ShrikantImg from "../assets/TeamMembers/08_Shrikant.jpg";
import ChaityaImg from "../assets/TeamMembers/09_Chaitya.jpg";
import PriyanshuImg from "../assets/TeamMembers/10_Priyanshu.png";

const mentors = [
  {
    img: DevendraImg,
    name: "Dr. Devendra Singh Dhakad",
    post: "Urologist, Bhopal",
  },
  {
    img: RishikeshImg,
    name: "Dr. Rishikesh Meena",
    post: "Pulmonologist, Dubai",
  },
];

const teamMembers = [
  {
    img: BhasitaImg,
    name: "Dr. Bhashita Sahu",
    post: "Ophthalmologist",
  },
  {
    img: JagratiImg,
    name: "Dr. Jagriti Behrani",
    post: "Public Health Consultant",
  },
  {
    img: RahulImg,
    name: "Dr. Rahul Baghel",
    post: "Physiologist",
  },
  {
    img: HimanshuImg,
    name: "Dr. Himanshu Bansal",
    post: "General Physician",
  },
  {
    img: AnuragImg,
    name: "Dr. Anurag Gupta",
    post: "Public Health Specialist",
  },
  {
    img: ShrikantImg,
    name: "Dr. Shrikant Gangwar",
    post: "Environmentalist",
  },
  {
    img: ChaityaImg,
    name: "Dr. Chaitya Jain",
    post: "Public Health Consultant",
  },
  {
    img: PriyanshuImg,
    name: "Dr. Priyanshu Ranjan",
    post: "General Physician",
  },
];

const ImageCarousel = () => {
  return (
    <Stack gap={6} width="100%" px="14%" mx="auto" marginBottom={"40px"}>
      {/* Mentors */}
      <Typography
        sx={{
          fontSize: { xs: "28px", md: "40px", lg: "44px" },
          fontWeight: 600,
          color: "#173760",
          textAlign: "center",
        }}
      >
        Our Mentors
      </Typography>

      <Stack direction="row" flexWrap="wrap" justifyContent="center" gap="28px">
        {mentors.map((member, index) => (
          <MemberCard key={index} member={member} />
        ))}
      </Stack>

      {/* Team Members */}
      <Typography
        sx={{
          fontSize: { xs: "28px", md: "40px", lg: "44px" },
          fontWeight: 600,
          color: "#173760",
          textAlign: "center",
        }}
      >
        Our Team Members
      </Typography>

      <Stack direction="row" flexWrap="wrap" justifyContent="center" gap="28px">
        {teamMembers.map((member, index) => (
          <MemberCard key={index} member={member} />
        ))}
      </Stack>
    </Stack>
  );
};

export default ImageCarousel;
