import { Box, Paper, Typography, useTheme, useMediaQuery } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import Experience from "./components/experience";
import "particles.js";
import { useEffect, useRef } from "react";
import particlesConfig from "./particles.json";
import profileImage from "./assets/profile.svg";
import helloImage from "./assets/hello.svg";
import briefcaseImage from "./assets/briefcase.svg";
import toolsImage from "./assets/tools.svg";
import educationImage from "./assets/education.svg";
import untImage from "./assets/unt.png";
import useVisibility from "./hooks/useVisibility";
import Heading from "./components/heading";
import { motion } from "motion/react";
import "./App.css";
import { TypeAnimation } from "react-type-animation";
import SideMenu from "./components/menu";
import Skills from "./components/skills";
import Education from "./components/education";

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    window.particlesJS("particles-js", particlesConfig);
  }, []);

  const mainContent = useRef(null);
  const [about, aboutVisibility] = useVisibility();
  const [experience, experienceVisibility] = useVisibility();
  const [skills, skillsVisibility] = useVisibility();
  const [projects, projectsVisibility] = useVisibility();
  const [education, educationVisibility] = useVisibility();
  const [resume, resumeVisibility] = useVisibility();
  const [contact, contactVisibility] = useVisibility();

  const handleLeftScroll = (e) => {
    if (mainContent.current) {
      mainContent.current.scrollTop += e.deltaY;
    }
  };

  return (
    <Paper
      sx={{
        display: "flex",
        position: "relative",
        flexDirection: isMobile ? "column" : "row",
        height: isMobile ? "100%" : "100vh",
        width: "100vw",
        backgroundColor: "rgb(15 23 42)",
        justifyContent: "center",
      }}
    >
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
            height: isMobile ? "100%" : "100vh",
          }}
        >
          <Box sx={{ height: isMobile ? 0 : "9vh" }}></Box>
          <Typography fontSize={50} fontWeight="bolder">
            Sneha Annamareddy
          </Typography>
          <Typography fontWeight={700} color="gray" fontSize={25}>
            Full Stack Engineer
          </Typography>
          <Typography fontWeight={100} mt={1} fontSize={20}>
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
            <SideMenu
              aboutVisibility={aboutVisibility}
              experienceVisibility={experienceVisibility}
              skillsVisibility={skillsVisibility}
              projectsVisibility={projectsVisibility}
              educationVisibility={educationVisibility}
              resumeVisibility={resumeVisibility}
              contactVisibility={contactVisibility}
            />
          )}

          <Box sx={{ height: isMobile ? "2vh" : "15vh" }}></Box>

          <Box
            sx={{ display: "flex", flexDirection: "row", marginTop: "auto" }}
          >
            <Box mr={3}>
              <GitHubIcon fontSize="large" />
            </Box>
            <Box mr={3}>
              <LinkedInIcon fontSize="large" />
            </Box>
            <Box mr={3}>
              <EmailIcon fontSize="large" />
            </Box>
          </Box>
          <Box sx={{ height: isMobile ? 0 : "9vh" }}></Box>
        </Box>
      </Box>
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
          <Box
            ref={about}
            id="about"
            sx={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: "20px",
              height: "90vh",
            }}
          >
            <Heading img={helloImage} text={"ABOUT ME"} />
            <Typography mt={2} fontWeight={250}>
              I'm a frontend engineer with a specialty in web accessibility,
              focused on building pixel-perfect, intuitive user interfaces. I
              enjoy working at the intersection of design and engineering, where
              great user experience meets robust, clean, and scalable code.
            </Typography>
            <br />
            <Typography fontWeight={250}>
              Currently, I'm a senior frontend engineer at Klaviyo, where I work
              on the component library team to help maintain and evolve our
              design system. In this role, I lead accessibility efforts across
              components, tooling, and patterns.
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
          <Box sx={{ height: "5vh" }}></Box>
          <Box
            ref={experience}
            id="experience"
            sx={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <Box mb={2} pl="20px">
              <Heading img={briefcaseImage} text={"EXPERIENCE"} />
            </Box>
            <motion.div
              initial={{ opacity: 0, x: +120 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.6 }} // triggers when 50% visible
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Experience
                from="2024"
                to="present"
                title="Senior Software Engineer"
                body="Currently, I'm a senior frontend engineer at Klaviyo, where I work on the component library team to help maintain and evolve our design system. In this role, I lead accessibility efforts across components, tooling, and patterns, partnering closely with designers and engineers to ensure accessibility is part of our core architecture."
                skills={["Java", "SpringBoot", "JavaScript", "React", "Azure"]}
                company={"Klaviyo"}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.6 }} // triggers when 50% visible
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Experience
                from="2024"
                to="2025"
                title="Senior Software Engineer"
                body="Currently, I'm a senior frontend engineer at Klaviyo, where I work on the component library team to help maintain and evolve our design system. In this role, I lead accessibility efforts across components, tooling, and patterns, partnering closely with designers and engineers to ensure accessibility is part of our core architecture."
                skills={[
                  "Java",
                  "SringBoot",
                  "JavaScript",
                  "React",
                  "Azure",
                  "Java",
                  "SpringBoot",
                  "JavaScript",
                  "React",
                  "Azure",
                ]}
                company={"Microsoft"}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: +120 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.6 }} // triggers when 50% visible
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Experience
                from="2024"
                to="2025"
                title="Senior Software Engineer"
                body="Currently, I'm a senior frontend engineer at Klaviyo, where I work on the component library team to help maintain and evolve our design system. In this role, I lead accessibility efforts across components, tooling, and patterns, partnering closely with designers and engineers to ensure accessibility is part of our core architecture."
                skills={["Java", "SpringBoot", "JavaScript", "React", "Azure"]}
                company={"Microsoft"}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.6 }} // triggers when 50% visible
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Experience
                from="2024"
                to="2025"
                title="Senior Software Engineer"
                body="Currently, I'm a senior frontend engineer at Klaviyo, where I work on the component library team to help maintain and evolve our design system. In this role, I lead accessibility efforts across components, tooling, and patterns, partnering closely with designers and engineers to ensure accessibility is part of our core architecture."
                skills={["Java", "SpringBoot", "JavaScript", "React", "Azure"]}
                company={"Microsoft"}
              />
            </motion.div>
          </Box>
          <Box sx={{ height: "10vh" }}></Box>
          <Box ref={skills} id="skills">
            <Box mb={2} pl="20px">
              <Heading img={toolsImage} text={"SKILLS"} />
            </Box>

            <Box
              display="flex"
              flexDirection={isMobile ? "column" : "row"}
              width="100%"
            >
              <Skills
                title="Backend Technologies"
                skills={[
                  "Java",
                  "SpringBoot",
                  "Python",
                  "Django",
                  "SQL",
                  "NoSQL",
                ]}
              />

              <Skills
                title="Frontend Technologies"
                skills={[
                  "JavaScript",
                  "React",
                  "Redux",
                  "Jest",
                  "Testing Library",
                  "Webpack",
                  "ES6+",
                  "Angular",
                  "TypeScript",
                  "Next.js",
                  "Tailwind CSS",
                  "HTML/CSS",
                ]}
              />
            </Box>

            <Box
              display="flex"
              flexDirection={isMobile ? "column" : "row"}
              width="100%"
            >
              <Skills
                title="Cloud Technologies"
                skills={[
                  "AWS",
                  "Azure",
                  "GCP",
                  "Docker",
                  "Kubernetes",
                  "Terraform",
                ]}
              />

              <Skills
                title="Other Skills"
                skills={[
                  "Agile Methodologies",
                  "Git",
                  "CI/CD",
                  "Unit Testing",
                  "Microservices Architecture",
                ]}
              />
            </Box>

            <Box
              display="flex"
              flexDirection={isMobile ? "column" : "row"}
              width="100%"
            >
              <Skills
                title="Soft Skills"
                skills={[
                  "Effective Communication",
                  "Team Collaboration",
                  "Problem Solving",
                  "Adaptability",
                  "Time Management",
                ]}
              />

              <Skills
                title="Design Tools"
                skills={["Figma", "Adobe XD", "Sketch", "InVision", "Zeplin"]}
              />
            </Box>
          </Box>
          <Box sx={{ height: "10vh" }}></Box>
          <Box ref={projects} id="projects"></Box>
          <Box ref={education} height="100vh" id="education">
            <Box mb={2} pl="20px">
              <Heading img={educationImage} text={"EDUCATION"} />
            </Box>
            <motion.div
              initial={{ opacity: 0, x: +120 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.6 }} // triggers when 50% visible
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Education
                from="2024"
                to="2025"
                icon={untImage}
                degree="Master of Science"
                school="University of North Texas"
                body="Graduated with a Master of Science in Computer Science from the University of North Texas in 2024. During my time at UNT, I developed a strong foundation in software development principles, algorithms, and data structures. I also completed coursework in web development, databases, and cloud computing, which sparked my passion for building scalable and efficient applications."
              />
            </motion.div>
          </Box>
          <Box ref={resume} height="100vh" id="resume"></Box>
          <Box ref={contact} height="100vh" id="contact"></Box>
        </Box>
      </Box>
      <div
        style={{
          position: "absolute",
          width: "100vw",
          height: "99vh",
          top: 0,
          left: 0,
          zIndex: 1,
          opacity: 0.3,
          margin: 0,
        }}
        id="particles-js"
      ></div>
    </Paper>
  );
}

export default App;
