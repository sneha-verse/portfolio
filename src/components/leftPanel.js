import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import {
  Box,
  SvgIcon,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CustomIconButton from "./buttons/iconbutton";
import { TypeAnimation } from "react-type-animation";
import SideMenu from "./menu";
import { ReactComponent as mediumImage } from "../assets/medium.svg";
import React from "react";

const LeftPanel = React.memo(({ visibility, refsMap, mainContent }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleLeftScroll = (e) => {
    if (mainContent.current) {
      mainContent.current.scrollTop += e.deltaY;
    }
  };

  const scrollToWithOffset = (sectionRef) => {
    const container = mainContent.current;
    const offset = container.clientHeight * 0.1;
    const top = sectionRef.offsetTop - offset;

    container.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  const handleMenuClick = (section) => {
    if (section === "about" && refsMap.about) {
      scrollToWithOffset(refsMap.about);
    } else if (section === "experience" && refsMap.experience) {
      scrollToWithOffset(refsMap.experience);
    } else if (section === "skills" && refsMap.skills) {
      scrollToWithOffset(refsMap.skills);
    } else if (section === "projects" && refsMap.projects) {
      scrollToWithOffset(refsMap.projects);
    } else if (section === "education" && refsMap.education) {
      scrollToWithOffset(refsMap.education);
    } else if (section === "resume" && refsMap.resume) {
      scrollToWithOffset(refsMap.resume);
    } else if (section === "contact" && refsMap.contact) {
      scrollToWithOffset(refsMap.contact);
    }
  };

  return (
    <Box
      onWheel={handleLeftScroll}
      sx={{
        width: isMobile ? "100%" : "40%",
        display: "flex",
        color: "white",
        justifyContent: isMobile ? "start" : "end",
        zIndex: 2,
        overflow: "hidden",
        padding: isMobile ? "20px" : 0,
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          width: isMobile ? "100%" : "70%",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          height: isMobile ? "100%" : "100vh",
        }}
      >
        <Box sx={{ height: isMobile ? 0 : "9vh" }}></Box>
        <Typography fontSize={50} fontWeight="bolder">
          Sneha Annamareddy
        </Typography>
        <Typography fontWeight={700} color="gray" fontSize={25}>
          Senior Software Developer
        </Typography>
        <Typography
          fontFamily={"Roboto Mono"}
          fontWeight={100}
          mt={1}
          fontSize={20}
        >
          <TypeAnimation
            sequence={[
              "🟢 Available for work, USA",
              1500,
              "Spring Boot • Microservices",
              1500,
              "AWS • Azure • Kafka",
              1500,
              "React • Full Stack",
              1500,
            ]}
            wrapper="span"
            speed={55}
            repeat={Infinity}
            cursor={true}
          />
        </Typography>

        <Box sx={{ height: isMobile ? 0 : "10vh" }}></Box>

        {!isMobile && (
          <SideMenu visibility={visibility} onClick={handleMenuClick} />
        )}

        <Box sx={{ height: isMobile ? "2vh" : "15vh" }}></Box>

        <Box sx={{ display: "flex", flexDirection: "row", marginTop: "auto" }}>
          <Box mr={3}>
            <CustomIconButton
              href="https://github.com/sneha-verse"
              icon={<GitHubIcon sx={{ color: "white" }} fontSize="large" />}
              text="GitHub"
            />
          </Box>
          <Box mr={3}>
            <CustomIconButton
              href="https://www.linkedin.com/in/snehaa02/"
              icon={<LinkedInIcon sx={{ color: "white" }} fontSize="large" />}
              text="LinkedIn"
            />
          </Box>
          <Box mr={3}>
            <CustomIconButton
              href="https://medium.com/@snehaachowdary2"
              icon={
                <SvgIcon
                  component={mediumImage}
                  inheritViewBox
                  fontSize="large"
                  sx={{ padding: "3px", boxSizing: "border-box" }}
                />
              }
              text="Medium"
            />
          </Box>
          <Box mr={3}>
            <CustomIconButton
              href="snehaachowdary2@gmail.com"
              icon={<EmailIcon sx={{ color: "white" }} fontSize="large" />}
              text="Gmail"
            />
          </Box>
        </Box>
        <Box sx={{ height: isMobile ? 0 : "9vh" }}></Box>
      </Box>
    </Box>
  );
});

export default LeftPanel;
