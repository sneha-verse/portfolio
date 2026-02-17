import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import profileImage from "../assets/profile.svg";
import helloImage from "../assets/hello.svg";
import briefcaseImage from "../assets/briefcase.svg";
import toolsImage from "../assets/tools.svg";
import educationImage from "../assets/education.svg";
import untImage from "../assets/unt.png";
import { motion } from "motion/react";
import Heading from "./heading";
import Education from "./education";
import DownloadResume from "./resume";
import ContactSection from "./contact";
import React from "react";
import ExperienceSection from "./experience/experienceSection";
import SkillSection from "./skills/skillSection";

const RightPanel = React.memo(({ setRef, mainContent }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      ref={mainContent}
      sx={{
        width: isMobile ? "100%" : "60%",
        height: isMobile ? "100%" : "100vh",
        zIndex: 2,
        overflowY: isMobile ? "hidden" : "auto",
        overflowX: "hidden",
        scrollBehavior: "smooth",
      }}
    >
      <Box
        sx={{
          width: isMobile ? "100%" : "80%",
          display: "flex",
          flexDirection: "column",
          color: "white",
        }}
      >
        <Box sx={{ height: isMobile ? "2vh" : "10vh" }}></Box>

        {/* ABOUT */}
        <Box
          ref={setRef("about")}
          id="about"
          sx={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: "20px",
            height: "90vh",
          }}
        >
          <Heading img={helloImage} text={"ABOUT ME"} />
          <Typography mt={2} color="lightgray">
            I didn’t get into Java just to write code — I was curious about how
            real systems work and support critical business operations. Early in
            my career, I learned enterprise software isn’t about frameworks;
            it’s about solving real problems, handling edge cases, and keeping
            systems reliable under pressure.
          </Typography>
          <br />
          <Typography color="lightgray">
            Over time, my role grew into ownership — designing solutions,
            troubleshooting production issues, improving performance, and
            ensuring workflows run without disruption. Today, I build
            applications that businesses can trust to run their critical
            operations — with an aim to improve stability, performance, and
            reliability with every release.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
              minHeight: 0,
              width: "100%",
            }}
          >
            <img
              src={profileImage}
              alt="profileImg"
              style={{
                objectFit: "contain",
                display: "block",
                width: "100%",
                height: "100%",
              }}
            />
          </Box>
        </Box>
        <Box sx={{ height: isMobile ? 0 : "10vh" }}></Box>

        {/* EXPERIENCE */}
        <Box
          ref={setRef("experience")}
          id="experience"
          sx={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <Box mb={2} pl="20px">
            <Heading img={briefcaseImage} text={"EXPERIENCE"} />
          </Box>
          <ExperienceSection isMobile={isMobile} />
        </Box>
        <Box sx={{ height: "10vh" }}></Box>

        {/* Skills */}
        <Box ref={setRef("skills")} id="skills">
          <Box mb={2} pl="20px">
            <Heading img={toolsImage} text={"SKILLS"} />
          </Box>
          <SkillSection isMobile={isMobile} />
        </Box>
        <Box sx={{ height: "10vh" }}></Box>

        {/* <Box ref={projects} id="projects"></Box> */}

        {/* EDUCATION */}
        <Box ref={setRef("education")} id="education">
          <Box mb={1} pl="20px">
            <Heading img={educationImage} text={"EDUCATION"} />
          </Box>
          <motion.div
            initial={{ opacity: 0, x: +120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.5 }} // triggers when 50% visible
            transition={{ duration: isMobile ? 0.25 : 0.5, ease: "easeOut" }}
          >
            <Education
              from="2024"
              to="2025"
              icon={untImage}
              degree="Master of Science"
              school="University of North Texas"
              body="Strengthened my ability to work with large datasets, apply analytical thinking, and design reliable, data-driven solutions that support business decisions."
            />
          </motion.div>
        </Box>
        <Box sx={{ height: "10vh" }}></Box>
        <Box ref={setRef("resume")} height="100vh" id="resume">
          <DownloadResume />
        </Box>
        <Box ref={setRef("contact")} height="90vh" id="contact">
          <ContactSection />
        </Box>
      </Box>
    </Box>
  );
});

export default RightPanel;
